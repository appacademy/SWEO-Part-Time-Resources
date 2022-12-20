# Common Dictionary Usage
- `in` keyword to check if a key is in the dictionary
- Checking if a dictionary is easy in python, since dictionaries are iterable, you can check the dictionaries length. If it's 0 it's empty.
- Create dictionaries either by invoking `dict()` or by using `{}`
- Use the update() method to update the dictionary, you must provide a key and a value for it to work.
- Use double asterisk `**` to "spread" / copy an existing dictionary in a different one

# Sets
- Sets in python store unique data, there can be no duplicate data in a set
```python
set1 = set(1,2,3,4)
set2 = {4,5,6}
```

## Set Operators
- When working with sets, these symbols are not to be confused with their bitwise operator counterparts. 
- `&` a "pipe", this operator gets the "intersection" of both sets (returns all elements, but leaves out elements if they have already been added)
- `|` "ampersand", this operator gets the "union" of both sets (returns only the elements that are found in both sets)
- `^` "caret", this operator adds both sets together and then returns all elements that do not appear in both sets(this is called the symmetric difference)
```python
print(set1 ^ set2) # prints: {1,2,3,5,6}
```
- `-` minus sign, this operator returns the difference of two sets.
```python
print(set1 - set2) # prints: {1,2,3}
# This would read: What elements are in set1 that are not in set2?

print(set2 - set1) # prints: {5,6}
# This would read: What elements are in set2 that are not in set1?
```