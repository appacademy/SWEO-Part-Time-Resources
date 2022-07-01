//given that the root is initially null
//root = null
//insert these numbers one by one into a BINARY SEARCH TREE.
// 100, 50, 25, 200, 125


//write out each step!!!
//Write out pseudo plan here for .insert method:
/*

0) ...edge case to handle if node is null, what is it? If our root node is null, we must then take the element an make it our root node.

1) create a pointer (currentNode) that will be used to traverse the tree starting at root node. (think of root = head in a link list). CurrentNode will always start at the entry point.

2) is the value less than the currentNode.val?
    //3) is currentNode.left null? if null --> assign currentNode.left = node(value)
    //4) if left is not null --> we need to recurse -->
call insert again and repeat for this for next node

*/