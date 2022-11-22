# # Run this for each val

# val = "A"
# print(val in {"a": "A", "B": "b", "C": "C"})
# val = "a"
# print(val in {"a": "A", "B": "b", "C": "C"})
# val = "B"
# print(val in {"a": "A", "B": "b", "C": "C"})
# val = "b"
# print(val in {"a": "A", "B": "b", "C": "C"})
# val = "C"
# print(val in {"a": "A", "B": "b", "C": "C"})
# val = "c"
# print(val in {"a": "A", "B": "b", "C": "C"})


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
        return [1, 2, 3, 4]
