import tree
import unittest
from unittest.mock import Mock, PropertyMock, patch


class TestNodeInitialize(unittest.TestCase):
    def setUp(self):
        self.node = tree.Node('some value')

    def test_should_set_an_initial_value(self):
        self.assertEqual(self.node.value, 'some value')

    def test_should_set_parent_to_None(self):
        self.assertIsNone(self.node.parent)

    def test_should_set_children_to_an_empty_array(self):
        self.assertListEqual(self.node.children, [])


class TestNodeParentSetter(unittest.TestCase):
    def setUp(self):
        self.child1 = tree.Node('child1')
        self.parent = tree.Node('parent')
        self.child2 = tree.Node('child2')

        self.child1.parent = self.parent
        self.child2.parent = self.parent

    def test_should_set_a_nodes_parent_to_the_passed_node(self):
        self.assertEqual(self.child1.parent, self.parent)
        self.assertEqual(self.child2.parent, self.parent)

    def test_should_add_the_child_node_to_the_passed_nodes_children(self):
        self.assertListEqual(self.parent.children, [self.child1, self.child2])

    def test_should_not_add_the_same_node_twice(self):
        self.child2.parent = self.parent
        self.assertListEqual(self.parent.children, [self.child1, self.child2])

    def test_should_handle_None_without_error(self):
        self.child2.parent = None
        self.assertIsNone(self.child2.parent)

    def test_when_reassigning_should_set_the_nodes_parent_to_the_new_parent(self):
        self.child2.parent = self.child1
        self.assertEqual(self.child2.parent, self.child1)

    def test_when_reassigning_should_add_the_node_to_the_new_parents_children(self):
        self.child2.parent = self.child1
        self.assertIn(self.child2, self.child1.children)

    def test_when_reassigning_should_remove_the_node_from_its_former_parent(self):
        self.child2.parent = self.child1
        self.assertNotIn(self.child2, self.parent.children)


class TreeNodeAddChild(unittest.TestCase):
    def setUp(self):
        self.child1 = tree.Node('child1')
        self.parent = tree.Node('parent')
        self.child2 = tree.Node('child2')

        self.child1.parent = self.parent
        self.child2.parent = self.parent

    def test_should_pass_itself_to_the_child_parent_setter(self):
        with patch('tree.Node.parent', new_callable=PropertyMock) as mock_prop:
            parent = tree.Node('parent')
            child = tree.Node('child')
            parent.add_child(child)
            mock_prop.assert_called_with(parent)

    def test_should_not_add_the_child_twice(self):
        self.child1.add_child(self.child2)
        self.assertListEqual(self.child1.children, [self.child2])


class TreeNodeRemoveChild(unittest.TestCase):
    def setUp(self):
        self.child1 = tree.Node('child1')
        self.parent = tree.Node('parent')
        self.child2 = tree.Node('child2')

        self.child1.parent = self.parent
        self.child2.parent = self.parent

    def test_should_pass_None_to_the_child_parent(self):
        with patch('tree.Node.parent', new_callable=PropertyMock) as mock_prop:
            parent = tree.Node('parent')
            child = tree.Node('child')
            parent._children.append(child)
            child._parent = parent

            parent.remove_child(child)
            mock_prop.assert_called_with(None)


class TreeNodeIsSearchable:
    def setUp(self):
        self.nodes = [tree.Node(i) for i in "abcdefg"]
        parent_index = 0
        for index, child in enumerate(self.nodes):
            if index == 0:
                continue
            child.parent = self.nodes[parent_index]
            parent_index += 1 if index % 2 == 0 else 0

    def test_should_return_itself_if_it_contains_the_value(self):
        self.assertEqual(self.nodes[0].depth_search('a'), self.nodes[0])

    def test_should_find_descendant(self):
        self.assertEqual(self.nodes[0].depth_search('g'), self.nodes[-1])

    def test_should_return_None_when_value_not_found(self):
        self.assertIsNone(self.nodes[0].depth_search('x'))


class TreeNodeIsSearchableByDepthFirst(TreeNodeIsSearchable, unittest.TestCase):
    def test_should_take_correct_path_to_descendant(self):
        for child in self.nodes:
            child.depth_search = Mock(wraps=child.depth_search)

        self.assertEqual(self.nodes[0].depth_search('e'), self.nodes[4])

        self.nodes[2].depth_search.assert_not_called()
        for i in [0, 1, 3, 4]:
            self.nodes[i].depth_search.assert_called()


class TreeNodeIsBreadthFirstSearchable(unittest.TestCase):
    def setUp(self):
        self.nodes = [tree.Node(i) for i in "abcdefg"]
        parent_index = 0
        for index, child in enumerate(self.nodes):
            if index == 0:
                continue
            child.parent = self.nodes[parent_index]
            parent_index += 1 if index % 2 == 0 else 0

    def test_should_return_itself_if_it_contains_the_value(self):
        self.assertEqual(self.nodes[0].breadth_search('a'), self.nodes[0])

    def test_should_find_descendant(self):
        self.assertEqual(self.nodes[0].breadth_search('g'), self.nodes[-1])

    def test_should_return_None_when_value_not_found(self):
        self.assertIsNone(self.nodes[0].breadth_search('x'))


if __name__ == '__main__':
    unittest.main()
