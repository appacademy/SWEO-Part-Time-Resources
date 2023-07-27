def say_my_name(cb):
  def inner(*args, **kwargs):
    print('Heisenberg')
    print(cb(*args, **kwargs))
  return inner