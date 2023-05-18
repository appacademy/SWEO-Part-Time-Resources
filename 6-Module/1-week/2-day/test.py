# COMMENT!
"""
This is a multi-line comment
"""
# print("Hello World")

# def my_func():
#     print("Hello World")
#     if(True):
#        print("in if")

# my_func()

print(not True)













def not_equal(num1, num2):
    # print("FLAG", not num2)
    num3 = not num2
    # print("num 3", num3)
    a = 5
    b = 5
    # print(5 is 5)
    # print(a is b)
    # print("NUMS", num1 == num3)
    return num1 is num3
    # return num1 != num2


# print(not_equal(0, 2))   #>  True
# print(not_equal(2, 2))   #>  False
# print(not_equal(2, "2")) #>  True




def length_list(list, n):
    return len(list) is n


# print(length_list([], 1))   #>  False
# print(length_list([], 0))   #>  True
# print(length_list([5, 2], 2))   #>  True
# print(length_list([1, 4, 3], 4))   #>  False
# print(length_list([0, 2, "i", 0.9], 4))   #>  True


def has_remainder(num1, num2):
#   print(not False)
  return not (num1 % num2 == 0)
#   return num1 % num2 is not 0
#   return num1 % num2 != 0


# print(has_remainder(4, 2))   #>  False
# print(has_remainder(57, 4))  #>  True
# print(has_remainder(6, 3))   #>  False
# print(has_remainder(81, 7))  #>  True


def xor(x, y):
  return x ^ y


# print(xor(False, False))   #>  False
# print(xor(True, False))   #>  True
# print(xor(True, True)) #>  False



def compare(str1, str2):
    # num1 = 0
    # for s in str1:
    #     num1 += 1
    # num2 = 0
    # for s in str2:
    #     num2 += 1
    # return num1 == num2
    return len(str1) == len(str2)


# print(compare("AB", "CD"))              #> True
# print(compare("ABC", "DE"))             #> False
# print(compare("hello", "App Academy"))  #> False
