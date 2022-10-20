# def decorator_function(function_):
# 	def wrapper_function(*args, **kwargs):
# 		# print(dir(function_)) #auth_required
# 		# print(function_.__name__) #wrapper_auth

# 		return function_(args[0], args[1], authorized = kwargs['authorized'])
# 		# first_name, second_name = args
# 		# return_of_first_function = function_(first_name, second_name)
# 		# return f'{return_of_first_function}! My favorite hobby is {kwargs["hobby"]}'
# 	return wrapper_function

#decorator function
# def auth_required(callback_function):
# 	def wrapper_auth(*args, **kwargs):
# 		if 'authorized' in kwargs:
# 			return callback_function(args[0], args[1])
# 		else:
# 			print('Not Authorized')
# 			raise Exception('Not Authorized')
# 	return wrapper_auth


# #wrapper function
# # @decorator_function
# # @auth_required
# def print_words(first_name, second_name):
# 	return f'Hi! {first_name} {second_name}'

# print_words = auth_required(print_words)


def auth_required(callback_function):
	def wrapper_auth(*args, **kwargs):
		if 'authorized' in kwargs:
			return callback_function(*args)
		else:
			print('Not Authorized')
			raise Exception('Not Authorized')
	return wrapper_auth

def print_words(first_name, second_name):
	return f'Hi! {first_name} {second_name}'

print_words = auth_required(print_words)

# print(print_words('Alex', 'Betita', authorized=True))

# print(print_words.__closure__[0])


class Calculator:

	__slots__ = ['_value']
	# __slots__ = [_value]

	def __init__(self, value): #initializing
		self._value = value

	@property
	def value(self):
		return self._value

	@value.setter
	def add(self, value):
		print('ran add')
		self._value += value
		return self._value

	@value.setter
	def substract(self, value):
		print('ran substract')
		self._value -= value
		return self._value

	def __repr__(self):
		return f'THIS IS A CALCULATOR, USE THE ADD AND SUBSTRACT ATTRIBUTES'


# calc = Calculator(0)
# print(calc)

# print(calc.value)
# # calc.value = 100
# # print(calc.value)
# # print(calc.add(100))
# calc.add = 100
# print(calc.value)
# # print(calc.substract(50))
# calc.substract = 80
# # calc.value = 200
# print(calc.value)



# def test(x):
# 	return (-dict(x), x)

# list_ = [(5, 'a'), (1, 'c'), (3, 'd')]
# print(sorted(list_, key=lambda x: (-dict(x), x)))

class Dog:
  """
			THIS IS OUR DOCS FOR THE DOG CLASS

			HOW TO USE:
				-make_sound(): prints Sound
				-change_sound(): changes the sound
  """
  def __init__(self):
    self.sound = 'woof'


  def make_sound(self):
    print(self.sound)

  def change_sound(self, sound):
    self.sound = sound

  def __repr__(self):
    return 'Dog Class'

my_dog = Dog()
# print(my_dog)
# print(my_dog.__doc__)
# print(my_dog.make_sound.__doc__)
# print(help(my_dog))
# my_dog.make_sound()
# my_dog.change_sound('bark') # notice that we aren't passing in self, python does this automatically
# my_dog.make_sound()


# 3 sides - Triangle
# 4 sides - Quadrilateral
# 5 sides - Pentagon
# 6 sides - Hexagon
# 7 sides - Heptagon
# 8 sides - Octagon
# 9 sides - Nonagon
# 10 sides - Decagon
# Greater than 10 sides - Polygon with n sides

side_s = """
3 sides - Triangle
4 sides - Quadrilateral
5 sides - Pentagon
6 sides - Hexagon
7 sides - Heptagon
8 sides - Octagon
9 sides - Nonagon
10 sides - Decagon
"""


# Write your class here.
# class RegularPolygon:

#   type = 'Polygon'

#   def __init__(self, sides, length):
#     self.sides = sides
#     self.length = length
#     if sides < 3:
#       raise Exception("A polygon must have at least 3 sides.")

#   def identify_polygon(self):
#     shapes = {3:'Triangle', 4:'Quadrilateral', 5:'Pentagon', 6:'Hexagon', 7:'Heptagon', 8:'Octagon', 9:'Nonagon', 10:'Decagon'}
#     self.type = shapes[self.sides]

#   @classmethod
#   def polygon_factory(cls, tup): #cls == class, class == RegularPolygon
# 	#tup = [(num_sides, length), (num_sides, length), (num_sides, length)]
# 	# expecting
# 	# list = [<RegularPolygon instance objects>, <RegularPolygon instance objects>, <RegularPolygon instance objects>]
#     # instances = []

#     # for sides, length in tup: #list of tuples
#     #     instances.append(cls(sides, length))

#     return [cls(sides,length) for sides, length in tup]

#   @staticmethod
#   def get_perimeter(polygon):
#     return polygon.sides * polygon.length

# pentagon = RegularPolygon(5, 5)
# octagon = RegularPolygon(8, 10)
# dodecagon = RegularPolygon(12, 1)

# print(f"{pentagon.num_sides} sides of length {pentagon.length}") # 5 sides of length 5
# print(f"{octagon.num_sides} sides of length {octagon.length}") # 8 sides of length 10
# print(f"{dodecagon.num_sides} sides of length {dodecagon.length}") # 12 sides of length 1

# pentagon.identify_polygon()
# octagon.identify_polygon()
# dodecagon.identify_polygon()

# print(pentagon.type) # Pentagon
# print(octagon.type) # Octagon
# print(dodecagon.type) # Polygon with 12 sides

# print(RegularPolygon.get_perimeter(pentagon)) # 25
# print(RegularPolygon.get_perimeter(octagon)) # 80
# print(RegularPolygon.get_perimeter(dodecagon)) # 12

# print(RegularPolygon.polygon_factory([(5, 5), (3, 2), (8, 10)])) # prints a list of 3 RegularPolygon objects

# not_a_polygon = RegularPolygon(2, 5) # Exception: A polygon must have at least 3 sides.


class Test:

	def __init__(self): #instance method, always takes in one positional argument which is called self by convention
		pass

	@classmethod #class method, always takes in one positional argument which is called cls by convention
	def class_(cls):
		pass

	@staticmethod #static method, optional parameters
	def static_():
		pass

create_test = Test()
create_test.class_()

Test.static_()
