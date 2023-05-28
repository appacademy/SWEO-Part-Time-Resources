from problem_02_class import Dragon


def test_constructor_accepts_name_and_color():
    dragon = Dragon("Puff", "green")
    assert "Puff" == dragon._name
    assert "green" == dragon._color


def test_breathes_fire_returns_correct_string():
    dragon = Dragon("Puff", "green")
    test1 = dragon.breathes_fire()
    assert "Puff breathes fire everywhere! BURN!!!" == test1


def test_change_nature_toggles_is_good():
    dragon = Dragon("Puff", "green")
    dragon.change_nature()
    assert False == dragon._is_good


def test_change_nature_toggles_correct_string():
    dragon = Dragon("Puff", "green")
    test1 = dragon.change_nature()
    test2 = dragon.change_nature()
    assert "Puff is a bad dragon!" == test1
    assert "Puff is a good dragon!" == test2


def test_repr_returns_proper_string_representation():
    dragon = Dragon("Puff", "green")
    assert f"{dragon}" == "<Puff is a green dragon>"
