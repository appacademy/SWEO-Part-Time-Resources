# CLASSES
import wonky as test #import the entire file
from wonky import say_my_name #imports specific things from that a file

class ChessPiece: # Parent Class Declaration
  __slots__ = ['_x','_y', 'color']
  
  def __init__(self, color='white'): # Constructor
    self.color = color
    self._x = 0
    self._y = 0
  
  def move(self, delta_x, delta_y):
    self._x += delta_x
    self._y += delta_y
    return (self._x, self._y)
  
  # def getX(self):
    # return self._x
  @property
  def x(self):
    return self._x
  @property
  def y(self):
    return self._y
  @property
  def coords(self):
    return [self._x, self._y]
  
  @x.setter
  def x(self, val):
    if val < 0:
      val = 0
    self._x = val
  
  def __repr__(self):
    return f'ChessPiece (x: {self._x}, y: {self._y}, color: {self.color})'
  
pawn = ChessPiece()
print(pawn.move(2,1))
print(pawn)

class Pawn(ChessPiece): # Child Class Declaration
  def __init__(self, color='white'):
    super().__init__(color) # Super Constructor
    
  def move_1(self):
    self._x += 1
    return (self._x, self._y)


black_pawn = Pawn('black')
print(black_pawn)
print(black_pawn.move_1())
pawn.x = -5
print(pawn.coords)
# print(pawn.move_1())

'''
DECORATORS : function that accepts a callback and returns an inner function
'''

# def say_my_name(cb):
#   def inner(arg):
#     print('Heisenberg')
#     cb(arg)
#   return inner

@say_my_name
def double(num):
  print(num*2)
  
double(2)