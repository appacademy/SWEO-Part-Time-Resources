

class Car:
    def __init__(self, color=None, year_model=None):
        # self._color = 'super' + color + 'secret'
        self._color = color
        self.year_model = year_model
        self.num_trips = 0
    
    @property
    def color(self):
        # unhidden = self._color[5:9]
        return self._color
    @color.setter
    def color(self, value):
        self._color = value
    
    def take_on_ride(self):
        self.num_trips += 1
    
    def print_trips(self):
        print(f'This car has been on {self.num_trips} trips')
        
    def __repr__(self):
        return f'a car that is {self._color} and has been on {self.num_trips} trips'

new_car = Car('blue', 2021)

print(new_car)
# print(new_car.color)
# new_car.color = 'red'
# print(new_car.color)
new_car.take_on_ride()
new_car.take_on_ride()
print(new_car)
# new_car.print_trips()
# new_car.take_on_ride()
# new_car.take_on_ride()
# new_car.take_on_ride()
# new_car.take_on_ride()
# new_car.print_trips()