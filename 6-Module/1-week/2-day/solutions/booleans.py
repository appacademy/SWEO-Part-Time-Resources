# # Numeric Equality

# # Write your function, here.
# def is_same_num(num1, num2):
#   return num1 == num2


# print(is_same_num(4, 8))   #>  False
# print(is_same_num(2, 2))   #>  True
# print(is_same_num(2, "2")) #>  False

# # Not Equal

# # Write your function, here.
# def not_equal(arg1, arg2):
# 	if(arg1 != arg2):
# 		return True
# 	return False

# print(not_equal(0, 2))   #>  True
# print(not_equal(2, 2))   #>  False
# print(not_equal(2, "2")) #>  True

# # Using and

# # Write your function, here.
# def And(arg1, arg2):
# 	return arg1 and arg2

# print(And(True, False))    #> False
# print(And(True, True))     #> True
# print(And(False, True))    #> False
# print(And(False, False))   #> False

# # Using Not Or

# # Write your function, here.
# def not_or(arg1, arg2):
# 	return not arg1 or arg2

# """
# if(!(a || b))

# """

# print(not_or(True, False))    #> False
# print(not_or(True, True))     #> True
# print(not_or(False, True))    #> True
# print(not_or(False, False))   #> True

# # Length of List

# # Write your function, here.
# def length_list(list1, length):
# 	print(len(list1))
# 	if(len(list1) == length):
# 		return True
# 	return False

# print(length_list([], 1))   #>  False
# print(length_list([], 0))   #>  True
# print(length_list([5, 2], 2))   #>  True
# print(length_list([1, 4, 3], 4))   #>  False
# print(length_list([0, 2, "i", 0.9], 4))   #>  True

# # Has Remainder

# # Write your function, here.
# def has_remainder(arg1, arg2):
# 	if(arg1 % arg2 == 0):
# 		return False
# 	return True

# print(has_remainder(4, 2))   #>  False
# print(has_remainder(57, 4))  #>  True
# print(has_remainder(6, 3))   #>  False
# print(has_remainder(81, 7))  #>  True


# # xor

# # Write your function, here.
# def xor(arg1, arg2):
# 	return arg1 ^ arg2

# """

# 5 / 2 = 2 reminder: 1
# 2 / 2 = 1 reminder: 0
# 1 / 2 = 0 reminder: 1

# 3 / 2 = 1 remainder: 1
# 1 / 2 = 0 remainder: 1

# 5 = 101
# 3 = 011
# --------
# 6 = 110

# """

# print(xor(False, False))   #>  False
# print(xor(True, False))   #>  True
# print(xor(True, True)) #>  False
# print(xor(5, 3))  #> 6
# print(xor(8, 4))  #> 12
# print(xor(2, 2))  #> 0
# print(xor(1, 2))  #> 3
# print(xor(4, 4))  #> 0
