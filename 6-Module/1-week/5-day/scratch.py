# nums = [(1, 2, 3, 4, 5), (6, 7, 8, 9, 10), (11, 12, 13, 14, 15)]
# # doubled = [el + 10 for el in nums]
# # doubledEven = [el * 2 if el % 2 else el for el in nums]
# # print(doubled)
# # print(doubledEven)

# flatten = [eachNum for innerList in nums for eachNum in innerList ]

# print(flatten)

# my_key_value_tuples = [('name',
#                         'Elden Ring'),
#                        ('value',
#                         '10/10'),
#                        ('genre',
#                         'open rpg'),
#                        ('num of weapons',
#                         10000),
#                        ('weapon types',
#                         ['sword',
#                          'bow',
#                          'polearm'])]

# elden_dictionary = {key: value for key, value in my_key_value_tuples}

# print(elden_dictionary)


# def index_sort(l):
#     # final = []

# while len(l):
#     print(l)
#     smallest_index = 0

#     for i in range(len(l)):
#         curr_tuple = l[i]
#         if curr_tuple[1] < l[smallest_index][1]:
#             smallest_index = i

#     next_tuple = l.pop(smallest_index)
#     final.append(next_tuple)

# return final
def myFunc(val):
    val.sort(key=lambda el: el[1])
    # val.sort((el) => el[1])
        # val.sort(  => (el) el[1])
            # val.sort(  => (el): el[1])
                # val.sort( lambda el: el[1])




# > [(2, 0, 4), (1, 2, 3), (0, 5, 0), (6, 8, 9)]
# print(index_sort([(1, 2, 3), (6, 8, 9), (0, 5, 0), (2, 0, 4)]))
# print(index_sort([(9, 55, 11), (7, 14, 5), (32, 41, 12), (8, 5, 2)])) #> [(8, 5, 2), (7, 14, 5), (32, 41, 12), (9, 55, 11)]
# print(index_sort([(0, 9, 1), (4, 3, 0), (6, 5, 14), (64, 32, 28)]))
# #> [(4, 3, 0), (6, 5, 14), (0, 9, 1), (64, 32, 28)]
