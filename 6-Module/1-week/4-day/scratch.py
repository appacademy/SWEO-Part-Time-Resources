# # Function definition and invocation

# def printer(arg):
#     print(arg)

# printer('Hello World')

# # Default function parameters

# def printer(name, saying = "What's up"):
#     print(name, 'says', saying)
# printer('Jesse')
# printer('Jesse', 'Welcome to class')
# printer('Jesse', saying = 'Python is cool')

# printer('Jesse')
# printer('Jesse', saying = "How's it going", last_name = "Brooks")

# # Default function parameters, mismatching default parameters

# def printer(name, last_name = '', saying = "What's up"):
#     print(name, last_name, 'says', saying)

# printer('Jesse')
# printer('Jesse', saying = "How's it going", last_name = "Brooks")

# Lambda function

# to_upper = lambda s: s.upper()

# print(to_upper('uppercase'))

# def multiply_string(string):
#     return lambda i : string * i

# print(multiply_string('hello ')(2))
