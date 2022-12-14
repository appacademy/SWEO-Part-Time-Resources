# Adding Two Numbers

# Define your function "addition" here
def addition(arg1, arg2):
	return arg1 + arg2


print(addition(2, 3))   #> 5
print(addition(-3, -6)) #> -9
print(addition(7, 3))   #> 10

# Plus, Minus, More

# DO NOT EDIT - Setup for exploration
# tiny number
int1 = 5
float1 = 5.0
# small number
int2 = 135
float2 = 135.246
# huge number known as `googol`
int3 = 10**100
float3 = 10.0**100

# STEP 1: Print and compare tiny numbers
print('** FIVE **')
# 1A: Print int1
print(int1)
# 1B: Print float1
print(float1)
# 1C: Print equality comparison (==) between int1 and float1
print(int1 == float1)
# STEP 2: Print and compare huge numbers
print('\n** GOOGOL **')
# 2A: Print int3
print(int3)
# 2B: Print float3
print(float3)
# 2C: Print equality comparison (==) between int1 and float3
print(int3 == float3)
# STEP 3: Compare results of integer division in all 4 possible combinations
print('\n** INTEGER DIVISION **')
# 3A: Print int2 divided by int1 (//)
print(int2 // int1)
# 3B: Print float2 divided by float1 (//)
print(float2 // float1)
# 3C: Print float2 divided by int1
print(float2 // int1)
# 3D: Print int2 divided by float1
print(int2 // float1)

# STEP 4: Compare results of mod in all 4 possible combinations
print('\n** MOD **')
# Copy/paste 4 statements from STEP 3 and switch operator to mod (from // to %)
# 3A: Print int2 divided by int1 (//)
print(int2 % int1)
# 3B: Print float2 divided by float1 (//)
print(float2 % float1)
# 3C: Print float2 divided by int1
print(float2 % int1)
# 3D: Print int2 divided by float1
print(int2 % float1)

# Return Next Number

# Create your function, here.
def increment(num):
	return num + 1

print(increment(0))   #> 1
print(increment(9))   #> 10
print(increment(-3))  #> -2

# Convert Minutes To Seconds

# Your function here
def min2sec(minute):
	return minute * 60

print(min2sec(5)) #> 300
print(min2sec(3)) #> 180
print(min2sec(2)) #> 120

# Livestock Legs

# Write your function, here.
# Parameters are in this order: chickens, cows, pigs
def how_many_legs(chickens, cows, pigs):
	return chickens * 2 + cows * 4 + pigs * 4


print(how_many_legs(2, 3, 5))    #> 36
print(how_many_legs(1, 2, 3))    #> 22
print(how_many_legs(5, 2, 8))    #> 50

# String To Integer

# Write your function, here.
def string_int(string):
	return int(string)


print(string_int("6"))     #> 6
print(string_int("1000"))  #> 1000
print(string_int("12"))    #> 12

# By The Power Of...# Write your function, here.
def calculate_exponent(num1, num2):
	return num1 ** num2


print(calculate_exponent(5, 5))     #> 3125
print(calculate_exponent(10, 10))   #> 10000000000
print(calculate_exponent(3, 3))     #> 27

# Integer Division

# Write your function, here.
def integer_division(num1, num2):
	return num1 // num2


print(integer_division(5.0, 2))     #> 2.0
print(integer_division(10, 10))     #> 1
print(integer_division(60, 8.0))    #> 7.0
print(integer_division(5.0, 1.0))   #> 5.0
print(integer_division(8, 2))       #> 4

# Total Digits

# Write your function, here.
def find_digit_amount(num):
	length = len(str(num))
	if(num < 0):
		length -= 1
	return length




print(find_digit_amount(123))           #> 3
print(find_digit_amount(-56))           #> 2
print(find_digit_amount(7154))          #> 4
print(find_digit_amount(61217311514))   #> 11
print(find_digit_amount(0))             #> 1

# Perfect Square

# Write your function, here.
def perfect_square(num1, num2):
	return num2 * num2 == num1



print(perfect_square(15, 5)) #> False
print(perfect_square(25, 5)) #> True
print(perfect_square(81, 9)) #> True
print(perfect_square(9, 2))  #> False

# Recursive Fibonacci

# Write your function, here.
def recursive_fib(num):
	if(num <= 1):
		return num
	else:
		return recursive_fib(num-1) + recursive_fib(num-2)


print(recursive_fib(1))     #> 1
print(recursive_fib(2))     #> 1
print(recursive_fib(4))     #> 3
print(recursive_fib(6))     #> 8
print(recursive_fib(12))    #> 144

# Recursive Countdown

# Write your function, here.
def recursive_countdown(num):
	if(num <= 0):
		return
	else:
		print(num)
		recursive_countdown(num - 1)

recursive_countdown(5) #> 5 4 3 2 1

# Recursive Is Prime - Challenge

# Write your solution here.
def is_prime(num, i = 2):
    if (num <= 2):
        return True if (num == 2) else False
    if (num % i == 0):
        return False
    if (num < i * i):
        return True

    return is_prime(num, i + 1)


print(is_prime(1))  #> False
print(is_prime(2))  #> True
print(is_prime(3))  #> True
print(is_prime(5))  #> True
print(is_prime(9))  #> False
print(is_prime(15)) #> False
