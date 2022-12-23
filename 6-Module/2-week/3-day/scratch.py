# class Car:
#     car_count = 0
#     def __init__(self):
#         self.make = "Toyota"
#         self.model = "Prius"
#         self.year = 2020

#     def change_year(self, year):
#         self.year = year
#         print(self)

#     def change_make(self, make):
#         self.make = make

#     def printer(val):
#         print(val)

#     @classmethod
#     def some_other_func(self, year):
#         pass

#     @staticmethod
#     def some_func():
#         pass

# car = Car()
# car2 = Car()
# print(car)
# print(car.make)
# print(car.model)
# print(car.year)

# print(car)
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
#         print("Hello from make getter")
#         return self._make

#     @property
#     def model(self):
#         return self._model

#     @year.setter
#     def year(self, year):
#         self._year = year

#     @make.setter
#     def make(self, make):
#         print("Hello from make setter")
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

class Employee:
    def __init__(self, id):
        self.id = id

    def __repr__(self):
        if(isinstance(self, (Manager))):
            return f"Manager id: {self.id}"
        if(isinstance(self, (Employee))):
            return f"Employee id: {self.id}"

class Manager(Employee):
    def __init__(self, id):
        super().__init__(id)
        self.employees = []

    # def __repr__(self):
    #     if(isinstance(self, (Manager))):
    #         return f"Manager id: {self.id}"
    #     if(isinstance(self, (Employee))):
    #         return f"Employee id: {self.id}"

manager = Manager(1)
employee = Employee(2)

print(manager.id)
print(manager)
print(type(manager))
print(" ")
print(employee.id)
print(employee)
print(type(employee))

# 3 sides - Triangle
# 4 sides - Quadrilateral
# 5 sides - Pentagon
# 6 sides - Hexagon
# 7 sides - Heptagon
# 8 sides - Octagon
# 9 sides - Nonagon
# 10 sides - Decagon
# Greater than 10 sides - Polygon with n sides


# Write your class here.
# class RegularPolygon:
#     type = "Polygon"

#     def __init__(self, num_sides, length):
#         if(num_sides < 3):
#             raise Exception("A polygon must have 3 sides")
#         self.num_sides = num_sides
#         self.length = length

#     def identify_polygon(self):
#         identifier = {
#             3: "Triangle",
#             4: "Quadrilateral",
#             5: "Pentagon",
#             6: "Hexagon",
#             7: "Heptagon",
#             8: "Octagon",
#             9: "Nonagon",
#             10: "Decagon"
#         }

#         try:
#             self.type = identifier[self.num_sides]
#         except KeyError:
#             self.type = f"Polygon with {self.num_sides} sides"

#     @classmethod
#     def polygon_factory(cls, values):
#         return [cls(num_sides, length) for num_sides, length in values]

#     @staticmethod        
#     def get_perimeter(polygon):
#         return polygon.num_sides * polygon.length

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

# Write your class here.
# class Game:
# 	def __init__(self):
# 	    self._score = 0

#     @property
#     def score(self):
#         return self._score
    
#     @score.setter
#     def score(self, score):
#     	self._score = score * 10
    	
# my_game = Game()
# print(my_game.score) # 0

# my_game.score = 5
# print(my_game.score) # 50