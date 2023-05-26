from employee import Employee

class Manager(Employee):
    def __init__(self, name, salary, title, manager):
        super().__init__(name, salary, title, manager)
        self.employees = []

    def add_employee(self, employee):
        self.employees.append(employee)
        return employee

    def calculate_bonus(self, multiplier):
        return (self.salary + self.total_sub_salary()) * multiplier

    def total_sub_salary(self):
        total_sub_salary = 0

        for employee in self.employees:
            if isinstance(employee, Manager):
                total_sub_salary += employee.salary + employee.total_sub_salary()
            else:
                total_sub_salary += employee.salary

        return total_sub_salary
