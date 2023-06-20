cat_list = [
    {
        "name": "Lenny",
        "breed": "Ragdoll",
        "adopted": False
    },
    {
        "name": "Roger",
        "breed": "Siamese",
        "adopted": False
    },
    {
        "name": "Katya",
        "breed": "Persian",
        "adopted": True
    }
]

# Write your code here.

def cat_verify(cats):
	# return list(breeds)
    breed = all(map(lambda cat: cat["breed"] == cats[0]["breed"], cats))
    adopted = any(map(lambda cat: cat["adopted"], cats))

    return (breed, adopted)

print(cat_verify(cat_list))

# Most Used Card
cards = [
    {
        "company": "Wells Fargo",
        "card_name": "Active Cash",
        "annual_fee": 0,
        "intro_reward_type": "cash",
        "intro_reward_amount": 200,
        "num_users": 20
    },
    {
        "company": "Chase",
        "card_name": "Sapphire Preferred",
        "annual_fee": 95,
        "intro_reward_type": "points",
        "intro_reward_amount": 60000,
        "num_users": 54
    },
    {
        "company": "Citi",
        "card_name": "Diamond Preferred",
        "annual_fee": 0,
        "intro_reward_type": "cash",
        "intro_reward_amount": 150,
        "num_users": 13
    }
]

# Write your code here.
def sort_cards(card_list):
	return list(map(lambda card: card["company"],sorted(card_list, key=lambda card: card["num_users"], reverse=True)))


# print(sort_cards(cards))

# Nested Sort
teachers = [
    {
        "name": "Emily Richardson",
        "subjects": ["Geometry", "Geometry Honors"],
        "years_active": 5,
        "classroom": {
            "building_id": "A",
            "room_number": 12,
            "capacity": 45
        }
    },
    {
        "name": "Richard Emilyson",
        "subjects": ["English 11", "AP English Language"],
        "years_active": 12,
        "classroom": {
            "building_id": "J",
            "room_number": 42,
            "capacity": 60
        }
    },
    {
        "name": "Richly Emiardson",
        "subjects": ["Chemistry", "Chemistry Honors", "AP Chemistry"],
        "years_active": 8,
        "classroom": {
            "building_id": "C",
            "room_number": 5,
            "capacity": 32
        }
    },
]

# Write your code here.
def sort_teachers_by_classroom_capacity(teacher_list):
  return list(map(lambda teacher: teacher["name"],sorted(teacher_list, key=lambda teacher: teacher["classroom"]["capacity"])))

# print(sort_teachers_by_classroom_capacity(teachers))
# Richly Emiardson, Emily Richardson, Richard Emilyson

# Remove Duplicates

phones = [
    {
        "brand": "Apple",
        "model": "iPhone 13 Pro",
        "cost": 929,
        "color": "alpine green"
    },
    {
        "brand": "Samsung",
        "model": "Galaxy S22+",
        "cost": 999,
        "color": "black"
    },
    {
        "brand": "Google",
        "model": "Pixel 6",
        "cost": 599,
        "color": "kinda coral"
    },
    {
        "brand": "Apple",
        "model": "iPhone 13 Pro",
        "cost": 929,
        "color": "gold"
    },
    {
        "brand": "Google",
        "model": "Pixel 6",
        "cost": 599,
        "color": "stormy black"
    }
]

# Write your code here.
def get_unique_models(phone_list):
    models = []

    def filt_func(phone):
      if phone["model"] not in models:
        models.append(phone["model"])
        return True
      else:
        return False

    return filter(filt_func, phone_list)

# def get_unique_models(phone_list):
#     seen = []
#     return filter(lambda phone: seen.append(phone['model']) is None if phone['model'] not in seen else False, phone_list)

def map_to_names(phone_list):
    return list(map(lambda phone: phone["model"], phone_list))

unique_models = list(get_unique_models(phones))
# print(unique_models)                # iPhone 13 Pro, Galaxy S22+, Pixel 6 (dictionaries)
# print(map_to_names(unique_models))  # iPhone 13 Pro, Galaxy S22+, Pixel 6
