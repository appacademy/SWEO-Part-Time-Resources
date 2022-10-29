class Automobile:
	def __init__(self, type):
		self.type = type

	def honk(self):
		print('Honk honk!')

class Car(Automobile):
	def __init__(self):
		# self.type = "Car"
		super().__init__("car")
		self.wheels = 4

					#polymorphism
	def honk(self): #overriding
		super().honk()
		print('Beep beep!')
		# pass

# mitshubishi = Car()
# print(mitshubishi.type)

# mitshubishi.honk()

automobile = Automobile('default')

automobile.honk()
