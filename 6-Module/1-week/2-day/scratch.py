#variables
# let, const, var keywords

# x = 'hello'

# +, -, *, /, %, **, //


# function name(){}
# () => {}

# def test(first_name):
# 	print(first_name) # console.log
# 	return 'bye'

# print(test('bruce'))

# a = True
# print(not a) # False

def is_it_true_is_it_false(arg1,arg2):
	if (not arg1 or not arg2) and (arg1 or arg2):
		return 'it is true!'
	else:
		return 'it is false!'

# print(is_it_true_is_it_false(False, False)) #


str_ = 'My name is Tony Stark!'

str_2 = "My name is Bruce Wayne!"

str_3 = '''
Spider-Man is a superhero appearing in American comic books published by Marvel Comics.
Created by writer-editor Stan Lee and artist Steve Ditko,
he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the
Silver Age of Comic Books. He has since been featured in films, television shows, video games, and plays. Spider-Man is the alias of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker died in a plane crash. Lee and Ditko had the character deal with the struggles of adolescence and financial issues and gave him many supporting characters, such as Flash Thompson, J. Jonah Jameson, and Harry Osborn; romantic interests Gwen Stacy, Mary Jane Watson, and the Black Cat; and foes such as Doctor Octopus, the Green Goblin, and Venom. In his origin story, Spider-Man gets superhuman spider-related powers and abilities from a bite from a radioactive spider; these include clinging to surfaces, superhuman strength, speed, and agility, and detecting danger with his "spider-sense." He also builds wrist-mounted "web-shooter" devices that shoot artificial spider webs of his own design.

When Spider-Man first appeared in the early 1960s, teenagers in superhero comic
books were usually relegated to the role of sidekick to the protagonist. The Spider-Man series broke ground by featuring Peter Parker, a high school student from Queens, New York, as Spider-Man's secret identity, whose "self-obsessions with rejection, inadequacy, and loneliness" were issues to which young readers could relate.[8] While Spider-Man had all the makings of a sidekick, unlike previous teen heroes such as Bucky and Robin, Spider-Man had no superhero mentor like Captain America and Batman; he thus had to learn for himself that "with great power there must also come great responsibility"—a line included in a text box in the final panel of the first Spider-Man story but later retroactively attributed to his guardian, his late Uncle Ben Parker.

Marvel has featured Spider-Man in several comic book series, the first and longest-lasting of which is The Amazing Spider-Man. Over the years, the Peter Parker character developed from a shy, nerdy New York City high school student to troubled but outgoing college student, to married high school teacher to, in the late 2000s, a single freelance photographer. In the 2000s, he joins the Avengers. Doctor Octopus also took on the identity for a story arc spanning 2012–2014, following a body swap plot in which Peter appears to die.[9] Marvel has also published books featuring alternate versions of Spider-Man, including Spider-Man 2099, which features the adventures of Miguel O'Hara, the Spider-Man of the future; Ultimate Spider-Man, which features the adventures of a teenaged Peter Parker in an alternate universe; and Ultimate Comics Spider-Man, which depicts the teenager Miles Morales, who takes up the mantle of Spider-Man after Ultimate Peter Parker's supposed death. Miles later became a popular superhero in his own right, and was brought into the mainstream continuity, where he sometimes works alongside Peter.
'''

def is_palindrome(str_):
	print(str_[::-1]) # reverses a string
	return str_ == str_[::-1]

# print(str_[11:15]) #Tony
# print(str_[-1]) #-1
# print(str_.endswith('Stark')) #False
# print(str_3)


print(is_palindrome('racecar'))

#python operations
# +=
# -=
# /=
# *=
# == equals


x = '1'
y = '000'

# print(x + y*3)

# formatting strings

first_name = 'Bruce,Wayne,Batman'
last_name = 'Wayne'

# print('My name is %s!' % first_name)
# print('My name is {} {}!'.format(first_name, last_name)) #automatic indexing
# print('My name is {0} {1}!'.format(first_name, last_name))
# print('My name is {0} {2}!'.format(first_name, last_name))
# f strings
# print(f'My name is {first_name} {last_name}')

# splitted_string = first_name.split(',')
# print(' '.join(splitted_string))


x = 100
y = 100.123

# print(str(x) + '1000') #1001000
# print(x + int('1000')) #1100

input_ = int(input("What is your favorite number?\n"))

print('My favorite number is ' + str(input_*3))
