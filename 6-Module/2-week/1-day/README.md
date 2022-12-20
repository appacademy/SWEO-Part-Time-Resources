# Week 33 Assessment
- 1 hour 6 minutes (66 minutes)
- 6 MC (1 point each)
- 4 Coding Specs (8 points)
- Passing score 11/14

# Dictionaries
- Similar to JavaScript objects
- Mutable
- Can store any type of data
- Hashable values are used as keys 
- Dictionaries are not the same as objects, so you must use the square braces to access keys like so: ['attribute']

```python
toys = [
    { 
        on_sale: True
        price: 5
        name: 'Toy Truck'
    },
    { 
        on_sale: True
        price: 3
        name: 'Tech Deck'
    },
    {
        on_sale: False,
        price: 101,
        name: 'Drone'
    }
]

toys[0]["on_sale"]
```

# Filter
`filter(function, iterable)` creates a new iterable of the same type which includes each item for which function returns True.

## Parameters:
- function: takes an item (from the iterable) and returns a Boolean
- iterable: e.g. list, tuple, range, dictionary, set, or str

# Map
- `map(function, iterable)` creates a new iterable of the same type which includes the result of calling the function on every item in the iterable.

## Parameters:
- function: takes an item (from the iterable) and returns another item (of same or different type)
- iterable: e.g. list, tuple, range, dictionary, set, or str

# Sorted
- sorted(iterable, key=None, reverse=False) creates a new sorted list from the items in iterable.
- Notice that the output is always a list.

## Parameters:
- iterable: e.g. list, tuple, range, dictionary, or set
- key: optional function which converts an item to a value to be compared (e.g. key=str.lower for case-insensitive sorting on a list of strings)
- reverse: optional boolean
-The parameters key and reverse must be set using the name and an equal sign.