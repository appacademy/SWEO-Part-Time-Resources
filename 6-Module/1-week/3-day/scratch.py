count = 13
count = max = min = 0
# print(count, max, min)
max = 1
# print(count, max, min)

'''
print(32 == 32.0)
print(32 is 32.0)
print(32 != 45)
print(32 is not 45)
'''

count = 2
# if count%2 is 1:
#   print(f'{count} is odd')
# else:
#   print('Is even?')
  
# count_mod = count%2
# one = 1
# if count_mod is one:
#   print(f'{count} is odd')
# print('Is even.')

# count = 0
# while count <= 5:
#   # if count%2 is 1:
#   #   count += 1
#   #   continue
#   if count is 4:
#     break
#   print(count)
#   count += 1
# print('outside of loop')

# for (counter;condition;iterative step) {}
# our_list = ['a','b','c','d','e']
# our_dict = {'first':1, 'second':2}
# [0,1,2,3,4]
# # for i in range(3):
# #   print(our_list[i])
# index = 0
# idx_of_search = -1
# for char in our_list:
#   print(char)
#   idx_of_search = index
#   index += 1
  
res = 4
try:
  res /= 0
except ZeroDivisionError:
  print('You can\'t divide by 0')
except TypeError as err:
  print(err)
else:
  print(res)
finally:
  print('inside finally')
print('outside try/except')

# if (True) {}
def my_func():
  pass

if True:
  pass
print('afterwards')