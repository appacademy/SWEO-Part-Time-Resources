import pytest
from wtforms import IntegerField, StringField, SubmitField, TextAreaField
from flask_wtf import FlaskForm
from dotenv import load_dotenv
load_dotenv()

@pytest.fixture
def client():
    from app import app
    app.config["TESTING"] = True
    app.config["WTF_CSRF_ENABLED"] = False
    app.config["DEBUG"] = False

    with app.test_client() as client:
        yield client


def test_main_page_has_message(client):
    r = client.get("/")
    assert b"<h1>Practice Assessment</h1>" in r.data
    assert "Content-Type" in r.headers
    assert "text/html" in r.headers.get("Content-Type", "")


@pytest.mark.parametrize("field", [
    '<input id="name" name="name" required',
    '<input id="age" name="age"',
    '<textarea id="bio" name="bio">',
    '<input id="submit" name="submit" type="submit" value="Submit">',
])
def test_simple_form_page(client, field):
    r = client.get("/simple-form")
    content = r.data.decode("utf-8")
    print(content)
    assert '<form method="post" action="/simple-form">' in content
    assert field in content


@pytest.mark.parametrize("name,type,label", [
    ("name", StringField, "Name"),
    ("age", IntegerField, "Age"),
    ("bio", TextAreaField, "Biography"),
    ("submit", SubmitField, "Submit"),
])
def test_simple_form_class(name, type, label):
    from app.forms import SimpleForm
    assert FlaskForm in SimpleForm.__bases__
    attr = getattr(SimpleForm, name)
    assert attr.field_class == type
    assert label in attr.args
