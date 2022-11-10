# highestNum = longestStringLength = counter = 10000

# print(highestNum, longestStringLength, counter)


# highestNum += 100

# longestStringLength = len('eijfeifjeifj')

# counter += 1

# print(highestNum, longestStringLength, counter)


# def myFunction():
#     valj = 12

# print(myFunction())

# myStr = '5'
# myNum = 5

# print(myStr == myNum)

# myList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

# print(myList[0:len(myList):3])
# print(myList[:::])

# for i in myList:
#     print(i)

# for i in range(4):
#     print(myList[i])

# for i in range(len(myList)):
#     # print(val)
#     if (i == 2):
#         val = "Hello"
#         print(val)
#     else:
#         continue
#     # print(val)

# print(valefiejfiejf)


# catching named errors
a = 100
# b = "5"
# b = 0
b = 5
try:
    print(a / b)
except ZeroDivisionError:
    print("Oh no an error!")
except (TypeError, NameError) as e:
    print("ERROR!", e)
finally:
    print("Finally...")
