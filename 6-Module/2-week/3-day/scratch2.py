# def decorater_function(callback_function):

# 	def wrapper(*args, **kwargs):
# 		first_name, last_name = args
# 		# f_name_l_name = callback_function(*args)
# 		f_name_l_name = callback_function(first_name, last_name)
# 		return f'{f_name_l_name}, my favorite hobby is {kwargs["hobby"]}'

# 	return wrapper


# @decorater_function #wrapper

def top_most_decorator(callback_function):
	def wrapper(*args, **kwargs):
		print('Top Most Decorator')
		return callback_function(*args, authorized=True)
	return wrapper

def authorization_required(callback_function):

	def authorization_required_wrapper(*args, **kwargs):
		if 'authorized' in kwargs:
			if kwargs['authorized']:
				return callback_function(*args)
		print('Not Authorized')
		raise Exception('User is not authorized!')

	return authorization_required_wrapper

@top_most_decorator
@authorization_required
def user_details(first_name, last_name):
	return f'Hi! My name is {first_name} {last_name}'

# user_details = decorater_function(user_details)

# print(user_details('Alex', 'Betita'))

# print(user_details.__closure__[0].cell_contents)


#getters, setters, deleters

class Calculator:

	def __init__(self):
		self.count = 0

	@property
	def count(self):
		return self._count

	@count.setter
	def count(self, value):
		self._count = self.count + value

	# @count.setter
	# def minus(self, value):
	# 	self._count -= value
	# 	# return self._count

calc = Calculator()

# # # print(calc.count)

# # calc.add(20)

calc.count = 100

print(calc.count)

# calc.minus(100)

# print(calc.count)

# calc.count = 1000

# print(calc.count)

class Game:
    def __init__(self):
        self.score = 0

    @property
    def score(self):
        return self._score

    @score.setter
    def score(self, value):
        self._score = value * 10

my_game = Game()
print(my_game.score) # 0

my_game.score = 5
print(my_game.score) # 50
