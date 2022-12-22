# class Car:
#     car_count = 0
#     def __init__(self):
#         self.make = "Toyota"
#         self.model = "Prius"
#         self.year = 2020
#         # car_count += 1
#     # @some_func
#     def change_year(self, year):
#         self.year = year
#     def change_make(self, make):
#         self.make = make

# car = Car()
# car2 = Car()
# print(car)
# print(car.make)
# print(car.model)
# print(car.year)

# car.change_year(2022)
# car2.change_year(2000)
# car.year
# print(car.year)
# print(car2.year)

# class Car:
#     def __init__(self):
#         self._make = "Toyota"
#         self._model = "Prius"
#         self._year = 2020
    
#     @property
#     def year(self):
#         return self._year

#     @property
#     def make(self):
#         return self._make

#     @property
#     def model(self):
#         return self._model

#     @year.setter
#     def year(self, year):
#         self._year = year

#     @make.setter
#     def make(self, make):
#         self._make = make

#     @model.setter
#     def model(self, model):
#         self._model = model    


# car = Car()

# print(car.make)
# print(car.model)

# car.make = "Nissan"
# car.model = "ALtima"

# print(car.make)
# print(car.model)

