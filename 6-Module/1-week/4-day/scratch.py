# # Function definition and invocation

# def printer(arg):
#     print(arg)
# print(printer('test'))
# # Default function parameters

# def printer(name, saying = "What's up"):
#     print(name, 'says', saying)

# printer('Jesse')
# printer('Jesse', 'Welcome to class')
# printer('Jesse', saying = 'Python is cool')

# # Default function parameters, mismatching default parameters

# def printer(name, last_name = '', saying = "What's up"):
#     print(name, last_name, 'says', saying)

# printer('Jesse')
# printer('Jesse', saying = "How's it going", last_name = "Brooks")

# Lambda function

# to_upper = lambda s: s.upper()

# print(to_upper('uppercase'))

# def multiply_string(string):
#     return lambda i : string * i

# print(multiply_string('hello ')(5))

# for i in 'hello':
#     print(i)

# List examples
# list1 = ['pens', 'staplers', 'flame-throwers', 'binders']

# print(list1)

# loop through list

# for i in list1:
#     print(i)
    # find index of i inside of list
    # use index to mutate the index on the list
    # list1[i] = 'z'
    # print(list1[i])
# print(list1)
# loop through list with index

# for i in range(len(list1)):
#     print('Index ' + str(i) + ' in supplies is: ' + list1[i])

# list1 = [1,2,3,4,5,6]

# for i in range(len(list1) - 1, -1, -1):
#     print(i, 'step')
#     print(list1[i])

# string = 'hello'

# for i in range(len(string)):
#     string[i] = 'z'

# print(list1)

# for i in range(len(list1) - 1, -1, -1):
#     list1[i] = '999'

# list2 = [1,2,3,"1", "2", "3"]
# print(list2)

# if(99 in list2): print('found the 1')

# print(list1)

# for i in list1:
#     print(i)
#     pass

# def func():
#     pass

# func()

# num1 = 1

# string1 = str(num1)
# print(type(num1))
# print(type(string1))

# float1 = float(num1)
# print(type(float1))
# print(num1)
# print(float1)
# print(len(num1))

# print(float1)
# print(len(string1))

# print(num1 is string1)

# def func():
#     pass

# func()

# if(True): print('1')
# elif(True): print('2')
# else: print('3')
# if(True): print('4')


# list1 = [1,2,3]

# iterate and mutate elements with a while loop

list1 = ['pens', 'staplers', 'flame-throwers', 'binders']

# print(list1)
# index = 0
# while(index < len(list1)):
#     list1[index] = 'zzz'
#     index += 1
# print(list1)

# iterate and mutate elements with a for loop

# print(list1)
# for index in range(len(list1)):
#     list1[index] = 'zzz'
# print(list1)
