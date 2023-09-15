x = 5

class Employee:
    store_id = 50
    employee_count = 0

    @classmethod
    def add_employee(cls):
        if cls.employee_count >= 2:
            print("You cannot make anymore employeees")
            return
        cls.employee_count = cls.employee_count + 1

    def __init__(self, id, name, salary, employee_type='Employee'):
        self.id = id
        self.name = name
        self.salary = salary
        self.employee_type = employee_type
        self.add_employee()
        if employee_type == 'Manager':
            self.salary = int(self.salary * 1.2)
        # print(employee_count) # wrong
        # print('employee count before updating:', self.employee_count)
        # self.employee_count = self.employee_count + 1 # change class variable using self
        # Employee.employee_count = Employee.employee_count + 1 # change class variable using Employee class
        # print('employee count after updating:', self.employee_count)
        # print('employee count from employee constructor:', Employee.employee_count) # print class variable using Employee Class
        # print('employee count from employee constructor:', self.employee_count) # print class variable using self

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "salary": self.salary,
            "employee_type": self.employee_type
        }

class Manager(Employee):
    def __init__(self, id, name, salary, employee_type):
        super().__init__(id,  name, salary, employee_type)
        # print('before employee type is changed:', self.employee_type)
        # self.employee_type = 'Manager'
        # self.salary = int(self.salary * 1.2)
        # print('after employee type is changed:', self.employee_type)

# print('employee count before updating:', Employee.employee_count)
# new_employee = Employee(1, 'Gabriel', 50000)
# print('employee count after updating:', Employee.employee_count)
# new_employee2 = Employee(1, 'Gabriel', 50000)
# print('employee count after updating:', Employee.employee_count)
# new_employee = Employee(1, 'Gabriel', 50000)
# print('employee count after updating:', Employee.employee_count)
# print(new_employee.to_dict())
# print('store id, using the Employee class:', Employee.store_id)
# print('store id, using the employee instance:', new_employee.store_id)


# new_employee = Employee(1, 'Jack', 45000)
# new_manager = Manager()
# # print('Employee instance:', new_employee)
# # print('Manager instance:', new_manager)
# # print(new_employee.employee_type)
# print('Employee instance:', new_employee.to_dict())
# print('Manager instance:', new_manager.to_dict())

print('Hello from classes.py')
