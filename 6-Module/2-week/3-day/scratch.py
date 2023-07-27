# import demo as decorators
from demo import say_my_name

# CLASSES
class ChessPiece: # Class Declaration
  __slots__ = ['_x', '_y', '_color'] # pre-allocate space in memory for properties
  
  def __init__(self, color='white'): # Initializer => like a constructor
    self._x = 0
    self._y = 0
    self._color = color
    
  def move(self, delta_x, delta_y):
    self.ex += delta_x
    self._y += delta_y
    return (self.ex, self._y)
  
  def __repr__(self):
    return f'<ChessPiece (_x:{self.ex}, _y:{self._y}, _color:{self._color})>'
  
  @property
  def coords(self):
    return [self._x, self._y]
  @property #getter property
  def ex(self):
    return self._x
  
  @ex.setter
  def ex(self, value):
    if value < 0:
      value = 0
    if value > 7:
      value = 7
    self._x = value
    
  @ex.deleter
  def ex(self):
    del self._x

bishop = ChessPiece()

# print(bishop.x, bishop.y, bishop._color)
print(bishop.move(2,2))
print('Bishop: ',bishop)


class Pawn(ChessPiece): # Child Class Declaration
  def __init__(self, color='white'):
    super().__init__(color)
  def move(self, delta_x, delta_y):
    self.ex -= delta_x
    self._y -= delta_y

pawn = Pawn()
print('Pawn:   ', pawn)
print(pawn.move(2,0))
print(pawn.ex, pawn._y)
print(pawn.move(10,0))
# del pawn.ex
# print('Pawn:   ', pawn)
print(pawn.coords)

'''
DECORATORS : function that accepts a callback and returns an inner function
'''
# def say_my_name(cb):
#   def inner(*args, **kwargs):
#     print('Heisenberg')
#     print(cb(*args, **kwargs))
#   return inner

# @decorators.say_my_name
@say_my_name
def exclaim(string):
  return string

exclaim('OOOOOOOH!')