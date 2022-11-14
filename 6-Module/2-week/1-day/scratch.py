# Solutions for Monday a/A Open
#! -------------------------------------------------------------------
#! -------------------------- Adopted Cats ---------------------------
#! -------------------------------------------------------------------

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


def cat_verify(cats):
    return all(map(lambda cat: cat['breed'] == cats[0]['breed'], cats)), any(
        map(lambda el: not el['adopted'], cats))


print(cat_verify(cat_list))    # False

#! -------------------------------------------------------------------
#! ------------------------- Most Used Card --------------------------
#! -------------------------------------------------------------------

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


def sort_cards(card_list):
    # This prints what the AA Repl asks you to print
    return list(map(lambda el: el['company'], sorted(
        card_list, key=lambda el: el['num_users'])))

    # This prints what the instructions asks actually for
    # return list(map(lambda el: el['company'], sorted(card_list,
    # key=lambda el: el['num_users'], reverse=True)))


print(sort_cards(cards))        # Citi, Wells Fargo, Chase


#! -------------------------------------------------------------------
#! --------------------------- Nested Sort ---------------------------
#! -------------------------------------------------------------------

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


def sort_teachers_by_classroom_capacity(teach_list):
    return list(map(lambda el: el['name'], sorted(
        teach_list, key=lambda el: el['classroom']['capacity'])))


print(sort_teachers_by_classroom_capacity(teachers))
# Richly Emiardson, Emily Richardson, Richard Emilyson


#! -------------------------------------------------------------------
#! ------------------------ Remove Duplicates ------------------------
#! -------------------------------------------------------------------

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


def get_unique_models(phone_list):
    models = []

    def filter_helper(el):
        if el['model'] in models:
            return False
        else:
            models.append(el['model'])
            return True

    return filter(lambda el: filter_helper(el), phone_list)


def map_to_names(phone_list):
    return list(map(lambda el: el['model'], phone_list))


unique_models = list(get_unique_models(phones))

print(unique_models)
# iPhone 13 Pro, Galaxy S22+, Pixel 6 (dictionaries)

print(map_to_names(unique_models))
# iPhone 13 Pro, Galaxy S22+, Pixel 6
