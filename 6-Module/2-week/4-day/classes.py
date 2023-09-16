class Employee:

    # store_id = 50
    employee_count = 0

    @classmethod
    def add_employee(cls):
        cls.employee_count += 1

    def __init__(self, id, name, salary):
        self.id = id
        self.name = name
        self.salary = salary
        # self.employee_count += 1 # wrong, overwrites class variable and makes it an instance variable
        # Employee.employee_count += 1 # modify class variable using Class
        Employee.add_employee()
        # self.add_employee()

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "salary": self.salary
        }

class Manager(Employee):
    def __init__(self, id, name, salary):
        super().__init__(id, name, salary)
        self.salary = int(self.salary * 1.2)




# print('employee count:', Employee.employee_count)
# new_employee = Employee(1, 'Tom', 50000)
# print('employee count:', new_employee.employee_count)
# new_employee2 = Employee(2, 'Bill', 50000)
# print('employee count:', new_employee2.employee_count)
# # print('new_employee to_dict:', new_employee.to_dict())
# new_manager = Manager(3, 'Amanda', 50000)
# # print(new_manager.to_dict())
# print('employee count:', new_manager.employee_count)
# print('employee count:', Employee.employee_count)
# print('new_employee store_id:', new_employee.store_id) # access class variable using instance
# print('new_employee store_id:', new_employee2.store_id) # access class variable using instance
# print('Employee class store_id:', Employee.store_id) # access class variable using Employee class

def some_func():
    print('hello')

x = 5
