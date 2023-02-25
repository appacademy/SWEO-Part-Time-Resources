from random import randint

# Imagine a boutique pizza restaurant hired you to create software that handles orders.
# You have more code to write and don't want random pizza functions in random files,
# so like a good python programmer you group your pizza functions within a class to keep them organized.
#
# Create a class called "PizzaProcessor" that contains methods that manipulate dictionary, string and int data types.
#
# The PizzaProcessor class constructor takes no arguments and should have:
#
#      - A protected attribute named "error" initialized to the following string:
#
#           "Invalid data: please check your data types before proceeding."
#
#      - A protected property named "pizzas_made" initialized to 0, that is externally accessed only through your getter method.
#
# *NOTE: All error handling should return the "error" protected attribute. Don't forget to make a getter for "pizzas_made".
#
#
# ----- instance method 1: ------
# This method will log the customer name and their order.
#
# Define an instance method named "pizza_pick" that takes 3 positional arguments and returns a string formatted as follows:
#
#     "{arg1} ordered a {arg2} crust pizza with {arg3} toppings!"
#
# Your constraints are as follows:

#     - arg1 must be a string, arg1 must be sentence cased. (you can expect a string with no spaces)
#     - arg2 must be a string, arg2 must be lowercased.
#     - arg3 must be a positive int, arg3 must not be greater than 10.
#
# Return the error attribute if arguments don't match your constraints.
#
# ----- instance method 2: ------
# This method will make a single pizza and give you employee information for that order.
#
# Define an instance method named "pizza_production" that takes 3 keyword arguments in any position:
#
#     time_started, time_ended, employee_name
#
# This function returns a string of the following format:
#
#     "{employee_name} started making pizza at {time_started} and ended at {time_ended}."
#
# This function will increment your pizzas_made property.
#
# If no arguments are passed to your function, default your parameters to None.
# All arguments for pizza_production must be strings.
# Be sure to handle incorrect data types by returning the error instance attribute.
#
# ----- instance method 3: ------
# This method will make a large amount of pizzas and return an object compatible with a database(JSON).
# For this method, use your knowledge of python's "*args" parameter functionality.
#
# Define an instance method named "pizza_prepper" that collects any number of arguments of data type int,
# and returns a dictionary with the following format:
# NOTE: here we are using angle brackets to indicate where the variables should be.
#
#     {
#         <order_number: type str>: { "crust": <type: str>, "toppings": <type: int> },
#     }
#
# *NOTE: The key of each pizza object represent the order number, and should be an index value.
# *Notice order_number is a str type in the format example above. The reason this is converted is to avoid an error when unpacking later.
# *It's a python thing.
#
# This function will increment your pizzas_made property for every pizza made.
#
# Constraints:
#
#     - if the index is odd the crust is stuffed, otherwise the crust is thin.
#     - the parameter value is the number of toppings.
#     - parameters are positive ints and cannot be greater than 10.
#
# Return the error attribute if arguments don't match your constraints.
#
#
# ----- instance method 4: ------
# This method will print all the pizzas returned from your "pizza_prepper" method.
#
# Define an instance method named "pizza_printer".
# This function collects the return of pizza_prepper as an arbitrary number of key/value pairs.
# This function will return a base string formatted as:
#
#         "Printing all the pizzas!"
#
# And for each pizza in the order append the following string to your base string:
#
#         "\n {crust} crust with {toppings} toppings\n"
#
# Be sure the returned string includes all key value pairs passed into your function.
#
#
# You're finished! 😅
#
#
# In addition to running `pytest test/test_problem_05_functions.py` you can also
# test your code manually using the sample data below.
#
#______________________________YOUR CODE BELOW______________________________#

class PizzaProcessor:
    def __init__(self):
        self._error = "Invalid data: please check your data types before proceeding."
        self._pizzas_made = 0

    @property
    def pizzas_made(self):
        return self._pizzas_made
    
    def pizza_pick(self, name, crust, toppings):
        if isinstance(name, str) and isinstance(crust, str) and isinstance(toppings, int) and -1 < toppings < 11:
            return f"{name} ordered a {crust} crust pizza with {toppings} toppings!"
        else:
            return self._error
        
    def pizza_production(self, employee_name=None, time_started=None, time_ended=None):
        if isinstance(employee_name, str) and isinstance(time_started, str) and isinstance(time_ended, str):
            self._pizzas_made += 1
            return f"{employee_name} started making pizza at {time_started} and ended at {time_ended}."
        else:
            return self._error
    
    def pizza_prepper(self, *pizzas):
        dict = {}
        for i,p in enumerate(pizzas):
            if isinstance(p, int) and -1 < p < 11:
                if i % 2 == 0:
                    dict[str(i)] = { "crust": "thin", "toppings": p}
                else:
                    dict[str(i)] = { "crust": "stuffed", "toppings": p}
            else:
                return self._error
            self._pizzas_made += 1
        return dict
    
    def pizza_printer(self, **pizza_dicts):
        base_str = "Printing all the pizzas!"
        for k,v in pizza_dicts.items():
            base_str += f"\nOrder {k} is a {v['crust']} crust with {v['toppings']} toppings\n"
        return base_str

# __________SAMPLE TEST DATA__________ #
# pizza_processor = PizzaProcessor()

# print(pizza_processor.pizza_pick("DAN", "thin", 0))
# # Dan ordered a thin crust pizza with 0 toppings!

# time_ended = "03:30pm"
# employee_name = "Brad"
# time_started = "03:00pm"
# print(pizza_processor.pizza_production(employee_name, time_started, time_ended))
# # Brad started making pizza at 03:00pm and ended at 03:30pm.

# # NOTE: Use the list of your choice below. The large list is a random sample.

# orders_list_small = [3,1,5,2]
# orders_list_large = [randint(1,5) for _ in range(0, 16)]

# print(pizza_processor.pizza_prepper(*orders_list_small))
# {
#    '0': {'crust': 'thin', 'toppings': 3},
#    '1': {'crust': 'stuffed', 'toppings': 1},
#    '2': {'crust': 'thin', 'toppings': 5},
#    '3': {'crust': 'stuffed', 'toppings': 2}
# }

# print(pizza_processor.pizzas_made)
# 5

# orders_dict = pizza_processor.pizza_prepper(*orders_list_small)

# print(pizza_processor.pizza_printer(**orders_dict))
# Printing all the pizzas!
# Order 0 is a thin crust with 3 toppings

# Order 1 is a stuffed crust with 1 toppings

# Order 2 is a thin crust with 5 toppings

# Order 3 is a stuffed crust with 2 toppings

# print(pizza_processor.pizzas_made)
# 9