toys = [
    { 
        "on_sale": False,
        "price": 5,
        "name": 'Toy Truck'
    },
    { 
        "on_sale": False,
        "price": 3,
        "name": 'Tech Deck'
    },
    {
        "on_sale": True,
        "price": 101,
        "name": 'Drone'
    }
]

# def callback():
#     pass

# map(callback function, iterator)

# on_sale = all(map(lambda s: s["on_sale"] == True, toys))
# mapped_stuff = map(lambda toy: toy["on_sale"] == True, toys)
# print(mapped_stuff)
# print(on_sale)

# print(toys[0].name)
# print(toys[0]["name"])


# any_on_sale = all(map(lambda s: s["on_sale"] == True, toys))
# any_on_sale = any(map(lambda toy: toy["on_sale"] == True, toys))
# print(any_on_sale)


# Sorting
# def callback(num):
#     return num

# unsorted_list = [7,2,66,2,9,1,9]
# sorted_list = sorted(unsorted_list, key=callback, reverse=True)

# print(sorted_list)