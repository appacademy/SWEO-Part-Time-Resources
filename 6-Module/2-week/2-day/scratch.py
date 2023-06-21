#DICTIONARIES

### creating

my_dict = {"hello": "world"}

# print(my_dict)

# other_dict = dict()
# other_dict = dict(one=1, two=2, three=3)
other_dict = dict([(1, 'one'), (2, 'two'), (3, 'three')])

# print(other_dict)

### accessing values in a dictionary

# print(my_dict["hello"])
# print(other_dict[1])

# print(my_dict.get("hello"))
# print(my_dict["no key"]) # throws an error
# print(my_dict.get("no key"))


### adding key/values into dictionary

my_dict["new key"] = "new value"

# print(my_dict)

#delete key/values from a dictionary

my_dict["delete"] = "delete me"
# print(my_dict)

# del my_dict["delete"]
# print(my_dict)

### iterating through a dictionary

# for key in my_dict:
#     print(key)

# for key in my_dict.keys():
    # print(f"<{key} key in my_dict>")
    # print(my_dict[key])

# for value in my_dict.values():
#     print(f"<{value} value in my_dict>")

# for key, value in my_dict.items():
#     print(f"key={key}, value={value}")

### dictionary comprehension

# other_dict_2 = dict([('one', 1), ('two', 2), ('three', 3)])

# [x for x in lst]
# dct_2 = { key: value * 2 for key, value in other_dict_2.items()}

# print(dct_2)

# SETS

my_set = { 1, 2, 3 }
other_set = { 3, 4, 5 }

# print(my_set)

### checking if a value is in a set
# print(4 not in my_set)
# print(1 not in my_set)

### unions - combining two sets

# print(my_set.union(other_set))
# print(my_set | other_set)

### intersection - result of only the non-unique items in two sets

# print(my_set.intersection(other_set))
# print(my_set & other_set)

### difference - result of set1 after removing anything present in set2

# print(my_set.difference(other_set))
# print(other_set.difference(my_set))
# print(my_set - other_set)

## symmetric differencae - the reuslt of only the unique items in two sets)

# print(my_set.symmetric_difference(other_set))
print(my_set ^ other_set)
