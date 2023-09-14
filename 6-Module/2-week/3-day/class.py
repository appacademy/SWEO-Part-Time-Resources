class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age



    @property
    def name(self):
        return self.name

    @property
    def age(self):
        return self.age

    @name.setter
    def name(self, name):
        self._name = name

    @age.setter
    def age(self, age):
        if(age > 0):
            self._age = age
            return
        print("The age must be greater than 0")


    def __str__(self):
        return f'Hello my name is {self.name}, I am {self.age} years old.'

    def to_dict(self):
        return {
            "name": self._name,
            "age": self._age
        }





jesse = Person('Jesse', 27)

jesse.name = 'Brooks'

# jesse.age = 28
jesse.age = -3

# print(jesse)
# print(jesse.to_dict())

# print(jesse._name)
print(jesse._age)

# print(jesse.age)
# print(jesse.name)
