
#! -------------------------------------------------------------------
#! ----- Quadrilateral with Inheritance ------------------------------
#! -------------------------------------------------------------------
class Quadrilateral:
    def __init__(self, length, width):
        self.length = length
        self.width = width


class Square(Quadrilateral):
    def __init__(self, length, width):
        if length == width:
            super().__init__(length, width)
        else:
            raise Exception("That ain't a square yo")


# quad = Quadrilateral(20, 10)
# print(f"{quad.length}, {quad.width}")  # 20, 10

# square = Square(10, 10)
# print(f"{square.length}, {square.width}")  # 10, 10

# # Exception: A square must have an equal length and width.
# not_square = Square(5, 10)

#! -------------------------------------------------------------------
#! ----- Triangle with Inheritance -----------------------------------
#! -------------------------------------------------------------------

'''
Stupid problem don't do it
Solution in a/A Open if you really want
But seriously it's a waste of your time
Don't do that to yourself
You deserve better ❤️❤️❤️
'''

#! -------------------------------------------------------------------
#! ----- Book Polymorphism--------------------------------------------
#! -------------------------------------------------------------------


class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year

    def description(self):
        return f'{self.title} is written by {self.author} and was published in {self.year}'


class NonfictionBook(Book):
    def __init__(self, title, author, year, subject):
        super().__init__(title, author, year)
        self.subject = subject

    def description(self):
        return f"{self.title} is written by {self.author} and was published in {self.year}. It is a nonfiction book about {self.subject}."


# book = Book("Alice in Wonderland", "Lewis Carroll", 1865)
# # Alice in Wonderland is written by Lewis Carroll and was published in
# # 1865.
# print(book.description())

# nonfiction = NonfictionBook(
#     "Cosmos",
#     "Carl Sagan",
#     1980,
#     "cosmic evolution and human civilization")
# # Cosmos is written by Carl Sagan and was published in 1980. It is a
# # nonfiction book about cosmic evolution and human civilization.
# print(nonfiction.description())

#! -------------------------------------------------------------------
#! ----- Magic Methods -----------------------------------------------
#! -------------------------------------------------------------------

class StrNumeric:
    def __init__(self, value):
        if isinstance(value, str) and value.isnumeric():
            self.val = value
        else:
            raise Exception(
                'String value can have only numeric characters.')

    def __add__(self, thing_2):
        return int(self.val) + int(thing_2)


# str_1 = StrNumeric("1")
# print(str_1 + 2)  # 3

# str_44 = StrNumeric("44")
# print(str_44 + 6)  # 50

# num_44 = 44
# print(num_44 + 6)  # 50

# # Exception: String value can have only numeric characters.
# not_numeric = StrNumeric("1.2")


#! -------------------------------------------------------------------
#! ----- Linked List Iterator ----------------------------------------
#! -------------------------------------------------------------------

class LinkedListIterator:
    def __init__(self, _curr):
        self._curr = _curr

    def __iter__(self):
        return self

    def __next__(self):
        if not self._curr:
            raise StopIteration

        currentNode = self._curr._value
        self._curr = self._curr._next
        return currentNode


# ? Given to us
class Node:
    def __init__(self, value):
        self._value = value
        self._next = None


# ? Given to us
class LinkedList:
    def __init__(self):
        self._head = None
        self._tail = None
        self._length = 0

    def add(self, value):
        new_node = Node(value)

        if self._head is None:
            self._head = new_node
        else:
            self._tail._next = new_node

        self._tail = new_node
        self._length += 1
        return self

    def __iter__(self):
        return LinkedListIterator(self._head)


linked_list = LinkedList()
linked_list.add('node 1')
linked_list.add('node 2')
linked_list.add('node 3')
linked_list.add('node 4')
linked_list.add('node 5')

# # this loop should print "Current node: node x" five times
# # for each node in the linked list
# for i in linked_list:
#     print(f"Current node: {i}")
