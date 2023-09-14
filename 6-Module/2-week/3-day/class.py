class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age

    @property
    def name(self):
        return self._name

    @property
    def age(self):
        return self._age

    @name.setter
    def name(self, name):
        self._name = name

    @age.setter
    def age(self, age):
        if age > 0:
            self._age = age
            return
        print("The age must be over 0")

    def __str__(self):
        return f'Hello my name is {self.name}, I am {self.age} years old'

    def to_dict(self):
        return {
            "name": self.name,
            "age": self.age
        }

jesse = Person('Jesse', 27)

# print(jesse.name)
print(jesse.age)

# print(jesse)

# print(jesse.to_dict())

# jesse.name = '123'
# print(jesse.name)

jesse.age = -3
print(jesse.age)
