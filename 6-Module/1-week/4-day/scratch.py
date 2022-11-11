# def my_func(a, b, c, *args, ):
# def my_func(a, b, c="house"):
# def my_func(a, b, c='house', d='planet'):
#     print(a, b, c, d)


# # my_func("blue", "red", "green", 'purple', 'yellow')
# my_func('hello', 'blue', d='earth', c='test' )

# def parameters( positional):
#     print(positional)


# parameters('hello', 'yes')

# def parameters(positional, *args, t=(), d={}):
#     print(positional, args, t, d)


# parameters('hello', 1, [2, 3], "4", t=("blue", 10), d={"name": 'Z'})


# def my_func(someVal, firstName=""):
#     print(someVal, firstName)


# my_func(6, firstName="Zaviar")
# n_t_s = lambda b: f"{b}"


# def my_func(a):

#     return lambda b: f"{a}{b}" # () =>


# num_to_string = my_func(11235235)
# print(num_to_string)
# print(num_to_string(100000))

# print(list(range(5)))
# print(range(5))
# print(range(0, 5))
# myTuple = (1, 2, 3)
# myOtherSyntax = 1, 2, 3, 4, 5

# print(myTuple)
# print(myOtherSyntax)
# start = 10
# end = 20

# for i in range(start, end + 1):
#     print(i)

# mySet = {1, 2, 3, 1, 3, 4, 6, 1, 2}

# print(mySet)

# myList = [5, 1, 2, 3, 4, 5, 6, 7]
# myList.reverse()

# new_list = list(reversed(myList))
# other_list = [40, 50]
# new_list.extend([40, 50])

# myList.clear()
# myList = list() # []

# print(myList)

# print(new_list.extend([40, 50]))
#! Not valid myList.extend(new_list.extend([40, 50]))
# JS LAND [...myList, ...new_list, ...[40]]
# print(myList)
# print(list(new_list))
# print(myList)


# for i in range(len(myList) - 1):
#     curr_el = myList[i]
#     if i > 1 and curr_el == 5:
#         myList.remove(curr_el)

# print(myList)

# myList.sort()


# for i in range(0, 11):
#     myList.append(i)
#     if not i % 2: myList.append()

# print(myList)

# print("------Changed------")


# print(myList)
# what_is_this = myList.remove(3)

# print(myList)
# print(what_is_this)

# my_list = [1, 2, 3, [4, 5], [6]]

# new_list = my_list.copy()
# new_list[len(new_list) - 1].pop()
# # new_list.pop()

# print(my_list)
# print(new_list)

# 8
mat2 = [[1, 1, 1, 1],
       [1, 1, 1, 1],
       [1, 1, 1, 1],
       [1, 1, 1, 1]]

# 25
mat = [[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]]

# 0, 0
# 1, 1
# 2, 2

# 0, 2
# 1, 1
# 2, 0


def diagonalSum(m):
    l = len(m)
    total = 0

    for i in range(l):
        total += m[i][i]
        total += m[i][l - 1 - i]
    
    if l % 2:
        mid = l // 2
        total -= m[mid][mid]

    return total


print(diagonalSum(mat))
print(diagonalSum(mat2))
