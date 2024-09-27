# squares = [a**2 for x in [[1,2,3,4], [5,6,7,8, 10]] for a in x if a % 2 == 0]
# print(squares)  # Output: [0, 4, 16, 36, 64, 100]

# squares_dict = {x: x**2 for x in range(6) if x % 2 == 0}
# print(squares_dict)  # Output: {0: 0, 2: 4, 4: 16}

# dict_one = {'name': 'james', 'height': "6'0\""}

# upper_name = {k: v.upper() for k, v in dict_one.items() if k == 'name'}

# print(upper_name)

# numbers = [1, 2, 3, 4]
# squared = list(map(lambda x: x**2, numbers))
# print(squared)  # Output: [1, 4, 9, 16]

# names = ["Alice", "Bob", "Charlie", 'Homie']
# scores = [85, 90,]
# combined = list(zip(names, scores))
# print(combined)  # Output: [('Alice', 85), ('Bob', 90), ('Charlie', 95)]

# items = ['apple', 'banana', 'cherry']
# for index, item in enumerate(items):
#     print(index, item)