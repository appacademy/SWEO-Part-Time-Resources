def example(arg):
	# if arg == 1:
	# 	print('Hello World')
	# elif arg == 2:
	# 	print('I like python')
	# else:
	# 	print('I like javascript')
	if isinstance(arg, int):
		for i in range(arg):
			print(i)
	if isinstance(arg, (str, tuple, list)):
		for i in arg:
			print(i)
	else:
		try:
			for key in arg:
				print(key)
		except Exception as e:
			# print(e)
			raise Exception(e) # throw New Error(e)
	# print(type(arg))
	# print(isinstance(arg, int))

# strings
# list
# tuples
# dictionaries

# example((0,1,2,3,4,5,6))
example(None)
