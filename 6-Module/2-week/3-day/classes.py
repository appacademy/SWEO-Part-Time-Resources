import itertools

def login_required_decorator(funct_to_decorate):
    def login_required_wrapper(user, *args):
        if user.id in users and user.logged_in == True:
            return funct_to_decorate(user, *args)

        return "User is not logged in or does not exist"

    return login_required_wrapper



class User:
    newId = itertools.count()
    instances = {}
    def __init__(self, first_name, last_name, email, password ):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password
        self.username = None
        self.logged_in = False
        self._pet = None
        self.title = None
        self.id = next(User.newId)
        self.__class__.instances.update({self.id : self})

    def give_use_pet(self, new_pet):
        if isinstance(new_pet, str) and len(new_pet) > 3:
            self._pet = new_pet
        print("new pet must be a str and have a length > 3")

    @property
    def pet(self):
        return self._pet

    @pet.setter
    def pet(self, new_pet):
        if isinstance(new_pet, str) and len(new_pet) > 3:
            self._pet = new_pet
        print("new pet must be a str and have a length > 3")


    def __repr__(self):
        return f'< User ( id: {self.id}, title : {self.title}, first_name : {self.first_name}, last_name : {self.last_name}, username : {self.username} email : {self.email}, pet : {self._pet}, logged_in : {self.logged_in}) >'


blake = User(first_name = "Blake", last_name = "Watts",  email = 'bWatts@test.com', password='password')




User.give_use_pet(blake, "hieee")

# blake.give_use_pet("paisley")

# print(blake.change_user_name("wollyWombat527"))


print(blake)
