# import classes
from datetime import datetime

from classes import Employee, Manager

# from flask import Flask

# print(classes.Employee)

# new_employee = classes.Employee(1, 'Jim', 50000)
# print(new_employee.to_dict())

new_employee = Employee(1, 'Jim', 50000)
new_manager = Manager(1, 'Jim', 50000, 'Manager')
print(new_employee.to_dict())
print(new_manager.to_dict())
