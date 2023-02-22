# `M6W2D2`

## Dictionaries

-   Collection of comma separated key:value pairs
-   Insertion ordered since python 3.7
    -   Prior to that, were unordered
-   Mutable
-   Dictionaries can't use dot notation like JS Objects

```py
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
```

## Sets

-   A collection of unique hashable (immutable/primitive) elements
-   Mutable
-   Unordered

```py
my_set = {1,2,3}
other_set = set([3,4,5])

# Union - the result of combining two sets
print(my_set | other_set)
print(my_set.union(other_set))

# Like dictionaries, you can update a set
my_set.update(other_set)
print(my_set)

# Can be passed any iterable
my_set.update([1, 10, 4, 11, 3, 7])
print(my_set)

# Intersection - the result of only the non-unique items in two sets
print(my_set & other_set)
print(my_set.intersection(other_set))

# Difference - the result set1 after removing anything present in set2
print(my_set - other_set)
print(my_set.difference(other_set))
print(other_set - my_set)

# Symmetric difference - the result of only the unique items in two sets
print(my_set ^ other_set)
print(my_set.symmetric_difference(other_set))
```
