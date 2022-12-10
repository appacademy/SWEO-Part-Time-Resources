import pytest
from sqlalchemy.sql.sqltypes import String, Integer
from sqlalchemy.ext.declarative import DeclarativeMeta
from dotenv import load_dotenv
load_dotenv()

@pytest.fixture
def client():
    from app import app
    app.config["TESTING"] = True
    app.config["WTF_CSRF_ENABLED"] = False
    app.config["DEBUG"] = False

    with app.test_client() as client:
        with app.app_context():
            from app.models import db
            db.drop_all()
            db.create_all()
        yield client


def test_configuration_has_database_setting():
    from app.config import Configuration
    for component in ["sqlite:///", "dev.db"]:
        assert component in Configuration.SQLALCHEMY_DATABASE_URI


def test_sqlalchemy_database_uri_configured_properly():
    from app.config import Configuration
    from app import app
    assert app.config.get("SQLALCHEMY_DATABASE_URI", "") == Configuration.SQLALCHEMY_DATABASE_URI


def test_model_class_has_proper_table_name():
    from app.models import SimplePerson
    assert SimplePerson.__tablename__ == "simple_people"


@pytest.mark.parametrize("name,type,pk,nullable", [
    ("id", "INTEGER", True, False),
    ("name", "VARCHAR(50)", False, False),
    ("age", "INTEGER", False, True),
    ("bio", "VARCHAR(2000)", False, True),
])
def test_simple_people_has_good_mappings(name, type, pk, nullable):
    from app.models import SimplePerson
    attr = getattr(SimplePerson, name)
    assert name == attr.__dict__.get("key", "")
    assert pk == attr.primary_key
    assert type == str(attr.type)
    assert nullable == attr.nullable

@pytest.mark.parametrize("age,bio", [
    (None, ""),
    ("17", ""),
    ("17", "asdf")
])
def test_post_of_good_data(client, age, bio):
    r = client.post(
        '/simple-form',
        data={'name': 'name', 'age': age, 'bio': bio},
        follow_redirects=True
    )
    content = r.data.decode("utf-8")
    assert "<h1>Practice Assessment</h1>" in content, f"Failed on age={age}, bio={bio}"


def test_post_of_bad_data(client):
    r = client.post(
        '/simple-form',
        data={'name': '', 'age': None, 'bio': ""},
        follow_redirects=True
    )
    content = r.data.decode("utf-8")
    assert "Bad Data" in content


def test_simple_form_data_retrieval(client):
    from app import app
    with app.app_context():
        from app.models import db, SimplePerson
        db.session.add(SimplePerson(name="Marley", age=21, bio="Living life"))
        db.session.add(SimplePerson(name="Harley", age=100, bio="Rocking chair demon"))
        db.session.commit()

    r = client.get("/simple-form-data")
    content = r.data.decode("utf-8")
    assert "Marley" in content
    assert "Harley" not in content
    assert "21" in content
    assert "100" not in content
    assert "Living life" in content
    assert "Rocking chair demon" not in content
