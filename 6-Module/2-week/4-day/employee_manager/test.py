from employee import Employee
from manager import Manager

hobbes = Manager('Hobbes', 1000000, 'Founder', None)
calvin = Manager('Calvin', 130000, 'Director', hobbes)
susie = Manager('Susie', 100000, 'TA Manager', calvin)
lily = Employee('Lily', 90000, 'TA', susie)
clifford = Employee('Clifford', 90000, 'TA', susie)

print(hobbes.calculate_bonus(0.05))  # 70500
print(calvin.calculate_bonus(0.05))  # 20500
print(susie.calculate_bonus(0.05))  # 14000
print(lily.calculate_bonus(0.05))  # 4500
print(clifford.calculate_bonus(0.05))  # 4500

print(isinstance(hobbes, Manager))  # True
print(isinstance(lily, Manager))  # False
