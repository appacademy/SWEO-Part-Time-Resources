# new_list = [return_val for x in iterable if conditional=true]

users = [
  {'first_name': 'John', 'last_name': 'Doe', 'membership': 'premium'},
  {'first_name': None, 'last_name': 'Doe', 'membership': 'premium'},
  {'first_name': 'John', 'last_name': None, 'membership': 'premium'},
  {'first_name': 'Jane', 'last_name': 'Smith', 'membership': 'free'},
  {'first_name': 'Sarah', 'last_name': 'Conner', 'membership': 'free'},
  {'first_name': 'John', 'last_name': 'Conner', 'membership': None}]
#                   (return_val             ) (iteration      ) (filter conditional    )
incomplete_users = [(users.index(user), user) for user in users if None in user.values()]
#                (return_val                                                   ) (iteration      ) (filter conditional              )
premium_users = [{'first_name':user['first_name'],'last_name':user['last_name']} for user in users if user['membership'] == 'premium']

print('Incomplete: ', incomplete_users)
print('\nPremium: ', premium_users)

vowels = 'aeiouAEIOU'
sentence = 'This is a comprehension?'

sent_vowels = [char for char in sentence if char in vowels]
print('\nVOWELS:', sent_vowels)
#        (return value             ) (iteration       ) (filter conditional)
evens = ['EVEN' if i%2==0 else 'ODD' for i in range(10)]
print('\nFRONT IF:', evens)
