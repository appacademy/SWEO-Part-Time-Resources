# DICTIONARIES

### creating
my_dct = { "hello": "world", 3: 'three' }

other_dct = dict(first=1, second=2, third=3) # naming with kwargs
other_dct_2 = dict([(4, 'four'), (5, 'five'), (6, 'six')]) # (key, value)

# print(my_dct)
# print(other_dct)
# print(other_dct_2)

### access
# print(my_dct["hello"])

# print(my_dct["goodbye"]) # throws an error since key doesnt exist in dictionary
# print(my_dct.get("goodbye")) # safer method when accessing key value pairs in dictionary

### adding
# my_dct["new_key"] = 100

# print(my_dct)

### deleting

# my_dct["delete_me"] = "please"

# print(my_dct)

# del my_dct["delete_me"]

# print(my_dct)


### iterating

# for key in my_dct:
#     print(f"key: {key}, value: {my_dct[key]}")

# for key in my_dct.keys():
#     print(key)

# for value in my_dct.values():
#     print(value)

# for key, value in my_dct.items():
#     print(f"key: {key}, value: {value}")

### dictionary comprehension

new_dct = {'a': 1, 'b': 2, 'c': 3, 'd': 4}

comp_dct = { key * 2: value * 2 for key, value in new_dct.items() }

# print(comp_dct)

# SETS

my_set = { 1, 2, 3 }
other_set = { 3, 4, 5 }

# print(my_set)

### union - the result of combining 2 sets

# print(my_set | other_set)
# print(my_set.union(other_set))

### intersection - the result of only the non-unique items in two sets

# print(my_set & other_set)
# print(my_set.intersection(other_set))

### difference - result of set1 after removing anything in set2

# print(my_set - other_set)
# print(my_set.difference(other_set))

# print(other_set - my_set)
# print(other_set.difference(my_set))

### symmetric difference - result of only the unique items in two sets

# print(my_set ^ other_set)
# print(my_set.symmetric_difference(other_set))


### checking if a value exists in a set

# print(1 not in my_set) # False
# print(1 in my_set) # True
