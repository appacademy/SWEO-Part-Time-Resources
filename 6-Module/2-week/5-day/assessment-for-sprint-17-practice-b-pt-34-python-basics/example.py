# def append_to(num, target=[]):
#     target.append(num)
#     return target

# print(append_to(1))  # prints: [1]
# print(append_to(2))  # prints: [1, 2]
# print(append_to(3))  # prints: [1, 2, 3]


def append_to(num, target=None):
    if target is None:
        target = []
    target.append(num)
    return target

print(append_to(1))  # prints: [1]
print(append_to(2))  # prints: [2]
print(append_to(3))  # prints: [3]
