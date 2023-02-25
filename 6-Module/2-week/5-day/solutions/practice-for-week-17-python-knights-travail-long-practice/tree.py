class Node:
    def __init__(self, value):
        self._value = value
        self._parent = None
        self._children = []

    def add_child(self, node):
        if node not in self._children:
            self._children.append(node)
            node.parent = self

    def depth_search(self, value):
        if self._value == value:
            return self
        for child in self._children:
            node = child.depth_search(value)
            if node is not None:
                return node

    def breadth_search(self, value):
        q = [self]
        while q:
            n = q.pop(0)
            if n.value == value:
                return n
            q.extend(n._children)

    def remove_child(self, node):
        if node in self._children:
            self._children.remove(node)
            node.parent = None

    @property
    def value(self):
        return self._value

    @property
    def parent(self):
        return self._parent

    @parent.setter
    def parent(self, node):
        if self._parent is node:
            return
        if self._parent is not None:
            self._parent.remove_child(self)
        self._parent = node
        if node is not None:
            node.add_child(self)

    @property
    def children(self):
        return self._children

    def __str__(self):
        return f"Node<{self._value}>"