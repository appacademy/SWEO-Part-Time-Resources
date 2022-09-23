
class Employee:
    def __init__(self, name=None):
        if name is None:
            raise ValueError('name must be provided')
        else:
            self.name = name

    @staticmethod
    def status_checker(status, inst):
        print(inst)
        completed = ['1', '3', '4']
        non_completed = ['2']
        if status == 'complete':
            return completed
        elif status == 'incomplete':
            return non_completed
        else:
            return 'provided status is not valid'
    
    @classmethod
    def class_factory(cls, names_list):
        return [cls(name) for name in names_list]

    def parent_printer(self):
        print('This is coming from the parent')


    def __repr__(self):
        return self.name


class Associate(Employee):
    def __init__(self, name=None, title=None):
        super().__init__(name)
        self.title = title

    def parent_printer(self):
        super().parent_printer()
        print('this is coming from the child')

yake = Employee('Yake')

baylen = Associate('baylen')

print(baylen.parent_printer())





# # print(type(baylen.class_factory(['james'])[0]))
# baylen.parent_printer()
# print(baylen.class_factory(['zavier', 'james', 'yake']))
# print(Employee.status_checker('incomplete', baylen))