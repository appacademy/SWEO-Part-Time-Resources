class Employee:
    def __init__(self, name=None) :
        self.name = name
        self.parent_at = 'I am the parent'

    @staticmethod
    def return_status(status):
        completed_tasks = ['1', '3', '4']
        uncompleted_task = ['2']
        if status == 'complete':
            return completed_tasks
        elif status == 'uncompleted':
            return uncompleted_task
        else:
            return 'status provided is invalid'
    
    @classmethod
    def class_factory(cls, list_of_names):
        return [cls(name) for name in list_of_names]

    def print_status(self):
        return 'Parent'
    
    def __repr__(self):
        return self.name


class Associate(Employee):
    def __init__(self, name=None):
        super().__init__(name)
    
    def print_status(self):
        print('parent super', super().print_status())
        print('parent super')
        return 'Child'

    
yake = Associate('yake')
print(yake.class_factory(['Will', 'James', 'Zarviar']))
print(yake.print_status())






# baylen = Employee('baylen')
# print(baylen.name)
# print(Employee.return_status('huh'))
# print(baylen.class_factory(['james', 'zarviar']))