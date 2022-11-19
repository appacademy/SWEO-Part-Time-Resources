from problem_05_functions import PizzaProcessor



def test_class_has_correct_protected_attributes():
    c = PizzaProcessor()
    assert '_error' in dir(c)
    assert '_pizzas_made' in dir(c)


def test_class_has_correct_default_values():
    c = PizzaProcessor()
    assert c.pizzas_made == 0
    assert c._error == "Invalid data: please check your data types before proceeding."


def test_pizza_pick_handles_errors_correctly():
    c = PizzaProcessor()
    sample = c.pizza_pick("Dan", "stuffed", [])
    assert sample == c._error


def test_pizza_pick_returns_correct_string():
    c = PizzaProcessor()
    sample = c.pizza_pick("Dan", "thin", 4)
    assert sample == "Dan ordered a thin crust pizza with 4 toppings!"


def test_pizza_production_handles_errors_correctly():
    c = PizzaProcessor()
    sample1 = c.pizza_production()
    sample2 = c.pizza_production({"check"}, [1], 2)
    assert sample1 == sample2 == c._error


def test_pizza_production_returns_correct_string():
    c = PizzaProcessor()
    sample = c.pizza_production(time_ended="12:40pm", employee_name="Nigel", time_started="12:00pm")
    assert sample == "Nigel started making pizza at 12:00pm and ended at 12:40pm."


def test_pizza_prepper_handles_errors_correctly():
    c = PizzaProcessor()
    sample = c.pizza_prepper("bad", "data", [])
    assert sample == c._error


def test_pizza_prepper_handles_errors():
    c = PizzaProcessor()
    sample1 = c.pizza_prepper(4, 2, 3, 11)
    assert sample1 == c._error


def test_pizza_prepper_returns_correct_object():
    c = PizzaProcessor()
    sample = c.pizza_prepper(4, 2, 3)
    control = {
        '0': {
            "crust": "thin",
            "toppings": 4
        },
        '1': {
            "crust": "stuffed",
            "toppings": 2
        },
        '2': {
            "crust": "thin",
            "toppings": 3
        },
    }
    assert sample == control


def test_pizza_printer_returns_correct_string():
    c = PizzaProcessor()
    o = c.pizza_prepper(4,3)
    print(o)
    sample = c.pizza_printer(**o)
    control = "Printing all the pizzas!\nOrder 0 is a thin crust with 4 toppings\n\nOrder 1 is a stuffed crust with 3 toppings\n"
    assert sample == control