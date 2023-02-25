from tree import Node

# Phase 2

class KnightPathFinder:
    def __init__(self, start_position):
        self._root = Node(start_position)
        self._considered_positions = {start_position}

    def get_valid_moves(self, pos):
        possible_moves = [
            (-2, -1),
            (-2, 1),
            (-1, -2),
            (-1, 2),
            (1, -2),
            (1, 2),
            (2, -1),
            (2, 1),
        ]
        moves = []
        root_x, root_y = pos

        for x, y in possible_moves:
            new_pos = (root_x + x, root_y + y)
            new_x, new_y = new_pos
            if new_x in range(0, 8) and new_y in range(0, 8):
                moves.append(new_pos)
        return moves

    def new_move_positions(self, pos):
        possible_moves = set(self.get_valid_moves(
            pos)).difference(self._considered_positions)
        # Alternative:
        # set(self.get_valid_moves(pos)) - self._considered_positions
        self._considered_positions = self._considered_positions.union(
            possible_moves)
        # Alternative: self._considered_positions | possible_moves
        return possible_moves

# Phase 2: Manual Testing

# finder = KnightPathFinder((0, 0))
# print(finder.new_move_positions((0, 0)))   # {(1, 2), (2, 1)}

# Phase 3

    def build_move_tree(self):
        root = self._root
        nodes = [root]

        while len(nodes) > 0:
            current_node = nodes.pop(0)
            current_position = current_node.value
            possible_moves = self.new_move_positions(current_position)
            for move in possible_moves:
                possible_position = Node(move)
                current_node.add_child(possible_position)
                nodes.append(possible_position)

# Phase 3: Manual Testing

# finder = KnightPathFinder((0, 0))
# finder.build_move_tree()
# print(finder._root.children)
# [<tree.Node object at 0x108fc6520>, <tree.Node object at 0x108fc6850>]

# Phase 4

    def find_path(self, end_position):
        end_node = self._root.depth_search(end_position)
        path = [pos.value for pos in self.trace_to_root(end_node)]
        return path

    def trace_to_root(self, end_node):
        nodes = []
        current_node = end_node

        while current_node is not None:
            nodes.insert(0, current_node)
            if current_node.parent is not None:
                current_node = current_node.parent
            else:
                current_node = None
        return nodes

# Phase 4: Manual Testing


# finder = KnightPathFinder((0, 0))
# finder.build_move_tree()
# print(finder.find_path((2, 1)))  # => [(0, 0), (2, 1)]
# print(finder.find_path((3, 3)))  # => [(0, 0), (2, 1), (3, 3)]
# print(finder.find_path((6, 2)))
# => [(0, 0), (1, 2), (2, 4), (4, 3), (6, 2)]

# print(finder.find_path((7, 6)))
# # => [(0, 0), (1, 2), (2, 4), (4, 3), (5, 5), (7, 6)]