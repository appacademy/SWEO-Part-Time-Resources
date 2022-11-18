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


# child = Child()
# # child.test()
# # child.small_method()
# child.medium_method()


# class Example:
#     a_class_variable = "Hello there!"

#     def __init__(self, name):
#         self.name = name

#     def test_method(self):
#         print(self.a_class_variable)


# my_instance = Example("Zaviar")
# other_instance = Example("Anthony")

# other_instance.a_class_variable = "Goodbye now!"

# other_instance.test_method()  # Goodbye now!
# print(Example.a_class_variable)  # Hello there!
# my_instance.test_method()  # Hello there!

# my_instance = Example("Zaviar")
# my_instance.test_method()  # Hello there!

# Example.a_class_variable = "Goodbye now!"

# print(Example.a_class_variable)  # Goodbye now!
# my_instance.test_method()  # Goodbye now!

# class Example:
#     __slots__ = ['name']

#     a_class_variable = "Hello there!"

#     def __init__(self, name):
#         self.name = name

#     def test_method(self):
#         print(self.a_class_variable)


# my_instance = Example("Zaviar")
# # print(my_instance.a_class_variable)
# # my_instance.a_class_variable = "Goodbye"  # Attribute Error: Read-only
# Example.a_class_variable = "Goodbye" # Works fine
# print(my_instance.name)
# print(my_instance.a_class_variable)

# class Example:
#     a_class_variable = "Hello there!"

#     def __init__(self, name):
#         self.name = name

#     @staticmethod
#     def my_static_method(*args):
#         return [instance.name for instance in args]


# z = Example("Zaviar")
# a = Example("Anthony")

# print(z.my_static_method(z, a)) # ['Zaviar', 'Anthony']

# print(Example.my_static_method(a)) # ['Anthony']

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


# milk, chair, shirt = Item.bulk_create_items(('Milk', 3), ('Chair', 15), ("T-shirt", None))
# look = Item.bulk_create_items(('Milk', 3), ('Chair', 15), ("T-shirt", None))
# print(look)
milk = Item('Milk', 3)
chair = Item('Chair', 15)
shirt = Item("T-shirt", None)


print(milk)  # < class Item | name: Milk, cost: $3 >
print(chair)  # < class Item | name: Chair, cost: $15 >
print(shirt)  # < class Item | name: T-shirt, cost: $10 >

cart_total = Item.total_cost(milk, chair, shirt)
print(cart_total)  # $28
