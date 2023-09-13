state_capitals = {'California': 'Sacramento'}
# state_capitals2 = {'California', 'Sacramento'}
# state_capitals = dict([('California', 'Sacramento')])
state_capitals = {}
state_capitals['California'] = 'Sacramento'

# print(state_capitals)
# print(state_capitals2)

# random_data = {2: 2, 'hello': 'goodbye', 'list': [], 'dict': {}, 2.00: 5.5, 1: 'this is true'}

# print(random_data)
# random_data.update({True: 'this is not true'})
# print(random_data)

capital_city = 'Phoenix'
new_state = 'Arizona'

state_capitals[new_state] = capital_city

# print(state_capitals)

# state_capitals.Nevada = 'Carson City'
state_capitals['Nevada'] = 'Carson City'
# print(state_capitals)

# print(state_capitals[new_state])

# print('California' in state_capitals)
# print('Oregon' in state_capitals)

# print('Phoenix' in state_capitals.values())
# print('Salem' in state_capitals.values())

state_capitals3 = dict([('Colorado', 'Denver'), ('New Jersey', 'Trenton')])
# print(state_capitals3)

# print(state_capitals)
# for state, capital in state_capitals3.items():
#     state_capitals[state] = capital

# print(state_capitals)

# print(state_capitals.items())

# print(state_capitals)
# del state_capitals['Nevada']

# print(state_capitals)

# print(len(state_capitals))

### SETS

nums = {1, 2, 3}
# print(nums)
nums2 = set([1, 4, 7])
# print(nums)

# print(nums | nums2)
# print(nums)

# nums.update(nums2)
# print(nums)

# nums_intersection = nums & nums2
# print(nums & nums2)
# print(nums_intersection)

# print(nums - nums2)
# print(nums2 - nums)

print(nums ^ nums2)
