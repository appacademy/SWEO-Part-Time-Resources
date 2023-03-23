# class Parent:
#     def test(self):
#         print('I am a parent class')

#     def big_method(self):
#         print("This method originated from the parent")

#     def medium_method(self):
#         print('Did you get me to print?')


# class Child(Parent):
#     def test(self):
#         print('I am a child class')
#         super().test()

#     def small_method(self):
#         super().big_method()


# child = Child() # const child = new Child()

# child.test()
# child.small_method()
# child.medium_method()

# class Example:
#     a_class_variable = "Hello there!"

#     def __init__(self, name):
#         self.name = name

#     def __repr__(self):
#         return f'< class Item | name: {self.name} >'

#     def test_method(self):
#         print(self.a_class_variable)


# my_instance = Example("James")

# my_instance.test_method() # Hello there!

# Example.a_class_variable = "Goodbye now!"

# print(Example.a_class_variable)  # Goodbye now!
# my_instance.test_method()  # Goodbye now!

# my_second_instance = Example('Crystal')

# my_second_instance.a_class_variable = 'heller planet'

# my_second_instance.test_method()
# print(Example.a_class_variable)  # Goodbye now!
# print(my_second_instance)
# print(my_instance)

# class Example:
#     __slots__ = ['name']

#     a_class_variable = "Hello there!"

#     def __init__(self, name):
#         self.name = name

#     def test_method(self):
#         print(self.a_class_variable)


# my_instance = Example("James")
# # my_instance.a_class_variable = "Goodbye" # Attribute Error: Read-only
# Example.a_class_variable = "Goodbye" # Works fine

# my_instance.test_method()

# class Example:
#     a_class_variable = "Hello there!"

#     def __init__(self, name):
#         self.name = name

#     @staticmethod
#     def my_static_method(*args):
#         return [instance.name for instance in args]


# j = Example("James")
# c = Example("Crystal")

# print(j.my_static_method(j, c)) # ['James', 'Crystal']

# print(Example.my_static_method(c)) # ['Crystal']


class Item:

    def __init__(self, name, cost):
        self.name = name
        self.cost = cost

    def __repr__(self):
        return f'< class Item | name: {self.name}, cost: ${self.cost} >'

    @classmethod
    def bulk_create_items(cls, *args):
        return [cls(name, cost) if cost else cls(name, 10)
                for name, cost in args]

    @staticmethod
    def total_cost(*args):
        return f'${sum([el.cost for el in args])}'


milk, chair, shirt = Item.bulk_create_items(
    ('Milk', 3), ('Chair', 15), ("T-shirt", None))

print(milk)  # < class Item | name: Milk, cost: $3 >
print(chair)  # < class Item | name: Chair, cost: $15 >
print(shirt)  # < class Item | name: T-shirt, cost: $10 >

cart_total = Item.total_cost(milk, chair, shirt)
print(cart_total)  # $28