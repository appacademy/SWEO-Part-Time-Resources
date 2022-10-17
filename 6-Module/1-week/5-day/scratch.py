nums = [1,2,3,4,5]

doubled = [x*2 for x in nums]

even_doubled = [x*2 for x in nums if x % 2 == 0]

def is_prime(num):
  for i in range(2, num):
    if num%i == 0:
      return False
  return True

res = [x for x in range(25) if x > 1 and is_prime(x)]

matrix = [
	[19,20,39],
	[1,4,88],
	[2,8,9]
	]

flatten_list = [element for sublist in matrix for element in sublist]

print(flatten_list)
