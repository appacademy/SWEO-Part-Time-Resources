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

# Sorting Example
```python
help(sorted)
```
- the key keyword argument is a function that is applied to each element in the iteration
- the reverse keyword arguement is either True or False that determines whether the list will be sorted in ascending or descending order (reverse=True would be descending order)