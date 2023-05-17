# #LISTS
# lst = ['h', 'i']
# print("LST: ",lst)
# lst1 = list('hi')
# print("LIST1: ", lst1)

# #Dictionary
# dictionary = {"key": "value"}
# print("DICTIONARY: ", dictionary)
# dict1 = dict(key = "value")
# print("DICT1: ", dict1)

# num = 1.2
# print("INT: ", int(num))
# print("FLOAT: ", float(num))


# simple error catching
# a = 321
# # print(len(a))   #throws an error
# try:
#     print(len(a))
# except:
#     print('Silently handle error here')
#     # Optionally include a correction to the issue
#     a = str(a)
#     print(len(a))


#catching named errors
# a = 100
# # b = "5"
# # b = 0
# # b = 5
# try:
#     print(a / b)
# except ZeroDivisionError:
#     pass
# except (TypeError, NameError) as e:
#     print("ERROR!", e)
# finally:  #always runs
#     print("Finally...")



#while loop
# spam = 0
# while spam < 5:
#   print('Hello, world.')
#   spam = spam + 1

#break out with break
# spam = 0
# while True:
#   print('Hello, world.')
#   spam = spam + 1
#   if spam >= 5:
#     break

#For loop
# for i in range(5):
#    print('priting: (' + str(i) + ')')

name = "Will"
if name == 'Will':
    print('Hi, Will.')

if (name == 'Will'):
    print('Hi, Will.')

name="Anthony"
if name == 'Will':
    print('Hi, Will.')
else:
    print('Hello, stranger.')

name= "Waldo"
if name == 'Will':
    print('Hi, Will.')
elif name == 'Anthony':
    print('You are not Will.')
elif name == 'Waldo':
    print('Where is Waldo?')
else:
    print('You are neither Kristen nor a little kid.')
