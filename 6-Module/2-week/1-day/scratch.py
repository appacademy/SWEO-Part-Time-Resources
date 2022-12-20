toys = [
    { 
        "on_sale": True,
        "price": 5,
        "name": 'Toy Truck'
    },
    { 
        "on_sale": True,
        "price": 3,
        "name": 'Tech Deck'
    },
    {
        "on_sale": True,
        "price": 101,
        "name": 'Drone'
    }
]

# print(toys[2]["name"])

# def filter_func(element):
#     if(element["on_sale"] == True): return True
#     else: False

# filtered_toys = filter(lambda toy: toy["on_sale"] == False, toys)
# print(list(filtered_toys))

def map_func(element):
    return element * 0

free_toys = map()


# all(iteratable) Pass in an iterable and check to see if EVERYTHING in the iterable returns True
# string = 'hello'
# print("are strings truthy?", all(string))

# num = [1,2,3]
# print("are nums that are not 0 truthy?", all(num))

# tuple1 = (True, True, False)
# print("does a truple with a false in it pass the all check?", all(tuple1))

# tuple2 = (True, True, True)
# print("does a tuple with all True pass the all check?", all(tuple2))

# any(iterable) Pass in an iterable and check to see if ANYTHING in the iterable returns True
# string = 'hello'
# print("are strings truthy?", any(string))

# num = [1,2,3]
# print("are nums that are not 0 truthy?", any(num))

# tuple1 = (True, True, False)
# print("does a truple with a false in it pass the any check?", any(tuple1))

# tuple2 = (True, True, True)
# print("does a tuple with all True pass the any check?", any(tuple2))

# list1 = [False, False, False]
# print("does a list with all False pass the any check?", any(list1))

# unsorted_list = [6,2,8,3,1,50,34,7]
# print(unsorted_list)

# sorted_list = sorted(unsorted_list, reverse=False)
# print(sorted_list)