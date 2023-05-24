

# Creating

my_dict = {'hello': 'world'}
print(my_dict)

other_dict = {x: x ** 2 for x in range(10)}
print(other_dict)

another_dict = dict(first=1, second=2, third=3) #naming with kwargs
print(another_dict)

tuple_list = [(1, 'a'),(2, 'b'),(3, 'c')] #(key, value)
tuple_dict = dict(tuple_list)
print(tuple_dict)

# Accessing
print(my_dict['hello'])

# Adding
my_dict['new_key'] = 'new_value'
print(my_dict)

# Updating
my_dict.update({'goodbye': 'planet'})
print(my_dict)

my_dict.update({'goodbye': 'world', 'hello': 'planet'})
print(my_dict)

# Deleting
del my_dict['hello']
print(my_dict)

# Copying, lists & list-likes
print(tuple_dict.keys()) # list-like
print(tuple_dict.values()) # list-like
print(tuple_dict.items()) # list-like

print(list(tuple_dict.keys())) # list
print([*tuple_dict.values()]) # list
print({*tuple_dict.items()}) # set
print({**tuple_dict}) # dictionary


# Iterating
for key in tuple_dict:
  print(key)

for key in tuple_dict.keys():
  print(key)

for value in tuple_dict.values():
  print(value)

for k,v in tuple_dict.items():
  print(k,v)


# Python will require you make the keys that you create to be strings
# But you can have numbered keys in python dictionaries


# Dictionaries can't use dot notation like JS Objects
# will fail
# person = {first_name: "Will", last_name: "Duffy", 1: 489}

# will pass
person = {"first_name": "Will", "last_name": "Duffy", 1: 489}
print(person)

# You can also create a dictionary with the dict() callable
# Doing this will allow you to assign keys without quotation marks
# But you must use keywords

# will fail
# person = dict(first_name = "Will", last_name = "Duffy", 1 = 489)
# will pass
person = dict(first_name = "Will", last_name = "Duffy")
print("PERSON", person)







#CHECKING FOR EMPTY DICTIONARY
empty_dict = {}

# will print True letting you know this dictionary is empty
print(not empty_dict)


person = {"first_name": "Will", "last_name": "Duffy"}

# will print False letting you know this dictionary is not empty
print(not person)

f_name = "first_name"
#CHECKING FOR KEY VALUE PAIR
person = {"first_name": "Will", "last_name": "Duffy"}

# will print the value if the key is present in the dictionary
print(person["first_name"])

# will throw an error if the key is not present in the dictionary
# print(person("middle_name"))

# will print True if the key is present in the dictionary
print("first_name" in person)

# will print False if the key is present in the dictionary
print("middle_name" in person)





#Concatenatenating dictonaries

# reassigning and using ** to combine dictionaries
person = dict(first_name = "Will")
person_last_name = dict(last_name = "Duffy")

person = {**person, **person_last_name}
print(person)

# using ** to create a new dictionary
person_first_name = dict(first_name = "Will")
person_last_name = dict(last_name = "Duffy")

person = {**person_first_name, **person_last_name}
print(person)

# Or use the .update method on your dictionary
person = dict(first_name = "Will")
person_last_name = dict(last_name = "Duffy")

person.update(person_last_name)
print(person)

"""
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

SETS
"""

# my_set = {1,2,3}
# other_set = set([3,4,5])

# # Union - the result of combining two sets
# # print("Union", my_set | other_set)
# # print(my_set.union(other_set))

# # Like dictionaries, you can update a set
# my_set.update(other_set)
# print("Updated Set", my_set)

# my_set.add("grape")
# print("Add", my_set)

# my_set.remove("grape")
# print("Remove", my_set)

# # Can be passed any iterable
# my_set.update([1, 10, 4, 11, 3, 7])
# print("Updated with iterable", my_set)

# # Intersection - the result of only the non-unique items in two sets
# print("Intersection", my_set & other_set)
# print(my_set.intersection(other_set))

# # Difference - the result set1 after removing anything present in set2
# print("Difference", my_set - other_set)
# print(my_set.difference(other_set))
# print(other_set - my_set)

# # Symmetric difference - the result of only the unique items in two sets
# print("Symmetric difference", my_set ^ other_set)
# print(my_set.symmetric_difference(other_set))


# my_set = {"apple", "banana", "orange"}

# if "apple" in my_set:
#     print("Apple is present in the set.")
# else:
#     print("Apple is not present in the set.")

# for item in my_set:
#     print(item)
