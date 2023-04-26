# person = {"first_name": "Blake", "last_name": "Watts", 1: 489}

# print(person)


person = dict(first_name = 'Blake', last_name = 'Watts')

person_details_dict = {"dog": "paisley", "age": 28}

# person = {**person, **person_details_dict}

person.update(person_details_dict)

person_details_dict.update(person)
print(person, person_details_dict)

# empty_dict = {}

# print('middle_name' in person)
# print(person)

# for key in person:
#     print(person[key])

# for key, value in person.items():
#     print(key, value)
