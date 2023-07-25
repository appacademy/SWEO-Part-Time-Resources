## Iterables

lfi =        ['Tristan', 'Greg', 'Toby', 'Maria', 'Nancy']
second_lfi = ['Huckabee', 'Isales', 'McGuire', 'Takeuchi']
third_lfi =  [1,2,3,4]
demo_iter = iter(lfi)
# print(demo_iter)
# print(next(demo_iter))
# print(next(demo_iter))
# print(next(demo_iter))

# Filter
filtered_lst = filter(lambda x: x[0] == 'T', lfi)
# print(list(filtered_lst))
# Map
mapped_lst = map(lambda x: x[0], lfi)
# print(list(mapped_lst))
# Sorted
sorted_list = sorted(lfi, key=lambda x: x[1], reverse=False)
# print(list(sorted_list))
# print(lfi)
# Enumerate
enumed_lst = enumerate(lfi, start=100)
# print(list(enumed_lst))
# Zip
zipped_lst = zip(lfi, second_lfi, third_lfi)
# print(list(zipped_lst))

nums = [1, 2, 5, 10, 33]
res = len(nums)
res = max(nums)
res = min(nums)
res = sum(nums)

bools = []
res = any(bools) # looking for true values
res = all(bools) # looking for false values

# print(res)

greg = {'first_name': 'Greg', 'last_name': 'Isales', 'age': 31, 'height':'6cm'}
# print(f'\n{greg}')
print(zipped_lst)
# print(dir(zipped_lst))

# SET OPERATIONS
set_1 = {1,2,3}
set_2 = {3,4,5}
set_3 = {1,2,5}

print('UNION', set_1 | set_2 | set_3)         # and
print('INTERSECTION', set_1 & set_2)          # xand
print('DIFFERENCE',  set_2 - set_3)           # or
print('SYMETRICAL DIFFERENCE', set_1 ^ set_2) # xor