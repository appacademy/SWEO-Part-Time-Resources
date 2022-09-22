

class Car:
    def __init__(self, color=None, year_model=None):
        self._color = color
        self.year_model = year_model
        self.number_of_rides = 0


    def print_year(self):
        print(self.year_model)


    @property
    def color(self):
        print('some logic')
        return self._color


    @color.setter
    def color(self, value):
        print('some other logic')
        self._color = value


    def take_on_ride(self):
        self.number_of_rides += 1

    
    def __repr__(self):
        return f'this is {self._color} car class, this car is from {self.year_model} and has been on {self.number_of_rides} rides'

new_car = Car('blue', 2020)
print(new_car)
# print(new_car.year_model)
new_car.take_on_ride()
new_car.take_on_ride()
new_car.take_on_ride()
new_car.take_on_ride()
print(new_car)
# print(new_car.number_of_rides)
# new_car.color = 'red'
# print(new_car.color)
# # new_car.print_year()