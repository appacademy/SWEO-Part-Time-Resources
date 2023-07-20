name_of_variable = '12'

count = max = min = 0
# print(count, max, min)
min = 1
# print(count, max, min)

# print(count == 0.00)
# print(count is 0.00) # count === 0
# print(count != 1)
# print(count is not 1) # count === !1

# count = 2
# if count%2 is 1:
#   print('count is odd')
# elif count%2 is 0:
#   print('count is even')
# else:
#   print('Weird')

# num = 0
# while num < 5:
#   if num is 2:
#     num += 1
#     continue
#   if num is 3:
#     break
#   print(num)
#   num += 1
# print('done')

# our_list = ['Lingxuan','Edith','Greg','Tristan']
# our_str  = 'MVEMJSUN'
# # for(counter;condition;step) {}
# for person in our_list:
#   print(person)
# for i in range(4):
#   print(i, our_list[i])
# for planet in our_str:
#   print(planet)
  
try:
  res = 100//0
except ZeroDivisionError as error:
  print(error)
except TypeError as error:
  print(error)
else:
  print(res)
finally:
  print('this always happens')
  
# function namedFunc() {}
def named_func():
  pass

print(named_func())
print('more stuff')