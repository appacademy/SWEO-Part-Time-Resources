# import classes
from classes import Employee, Manager
from datetime import datetime

# new_employee = classes.Employee(1, 'Something', 50000)
# print(new_employee.to_dict())

new_employee = Employee(1, 'Something', 50000)
print(new_employee.to_dict())
