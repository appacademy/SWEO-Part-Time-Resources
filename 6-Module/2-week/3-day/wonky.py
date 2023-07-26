def say_my_name(cb):
  def inner(arg):
    print('Heisenberg')
    cb(arg)
  return inner