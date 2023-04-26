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
        self.id = next(User.newId)
        self.__class__.instances.update({self.id : self})

    def login_user(self, email, password):
        # print(email, password, self.email, self.password)
        if email == self.email and password == self.password:
            self.logged_in = True
            return f"User with the id of {self.id} has been logged in"
        return "Invalid Credential!!!!!!!!!"

    @login_required_decorator
    def change_user_name(self, username):
        self.username = username
        return self

    @login_required_decorator
    def change_user_first_name(self, first_name):
        self.first_name = first_name
        return self

    # @login_required_decorator
    # def give_user_pet(self, pet_name):
    #     self.pet = pet_name
    #     return self

    @property
    def pet(self):
        return self._pet

    @pet.setter
    def pet(self, new_pet):
        self._pet = new_pet


    def __repr__(self):
        return f'< User ( id: {self.id}, first_name : {self.first_name}, last_name : {self.last_name}, username : {self.username} email : {self.email}, pet : {self.pet}, logged_in : {self.logged_in}) >'



blake = User(first_name = "Blake", last_name = "Watts",  email = 'bWatts@test.com', password='password')

andres = User(first_name = "Andres", last_name = "Aguilar", email = 'aAguilar@test.com', password = 'password' )



users = User.instances

blake.login_user(email = 'bWatts@test.com', password = 'password')
print(blake.change_user_name("wollyWombat527"))

# blake.pet = "paisley"
# print(blake.pet)
