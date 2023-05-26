class Employee:
    def __init__(self, name, salary, title, manager=None):
        self.name = name
        self.salary = salary
        self.title = title
        self.manager = manager
        if manager:
            manager.add_employee(self)

    def calculate_bonus(self, multiplier):
        return self.salary * multiplier
