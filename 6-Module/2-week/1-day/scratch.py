## Iterables
# Iterables include lists, dictionaries, tuples, sets and string

lfi = ['Tristan', 'Greg', 'Toby', 'Maria', 'Nancy']
lfi_iterable = iter(lfi)
# print(lfi_iterable)
# print(next(lfi_iterable))
# print(next(lfi_iterable))
# print(next(lfi_iterable))

second_lfi = ['Huckabee', 'Isales', 'McGuire', 'Takeuchi']
third_lfi = [1, 2, 3, 4]
# Filter
filtered_lst = filter(lambda name: name[0] == 'T', lfi)
# Map
mapped_lst = map(lambda name: name+'!',lfi)
# Sorted
sorted_list = sorted(lfi, key=lambda x: x[3], reverse=False)
# Enumerate
enumed_lst = enumerate(lfi, start=1)
# print(list(enumed_lst))
# Zip
zipped_lst = zip(lfi, second_lfi, third_lfi)
# print(list(zipped_lst))

res = len(lfi)
res = max(1, 3, 500)
res = min(third_lfi)
res = sum(third_lfi)
booleans = [False]
res = any(booleans) # checking for any True
res = all(booleans) # checking for no False
# print(res)
# print(mapped_lst)
# print(dir(mapped_lst))

# SET OPERATIONS
set_1 = {1,2,3}
set_2 = {3,5,6}
set_3 = {1,2,6}

# print('Set Union: ', set_1 | set_2 | set_3)
# print('Set Intersection: ', set_1 & set_2)
# print('Set Difference: ', set_1 - set_3)
# print('Set Symetrical Difference: ', set_1 ^ set_2 ^ set_3)

