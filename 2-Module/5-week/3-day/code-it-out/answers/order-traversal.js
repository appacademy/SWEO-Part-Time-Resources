/*
                 10
               /    \
              5      12
             / \       \ 
            4   8       13
                 \       \   
                  9      14
*/                  

//*************Preorder**************
//given this tree, use Preorder traversal to log the data in that order(don't code, just provide output throw analysis)?
//hint: Preorder traversal is good for visiting the data first as we traverse the node
/*
log the data from the node
then recurse left and repeat this logic
then recurse right and repeat this logic

*/

//Your answer: 10, 5, 4, 8, 9, 12, 13, 14


//*************Inorder**************
//given this tree, use inorder traversal to log the data in that order
//hint: inorder traversal is good for visiting the nodes data in a way that gives an inherent order
//Your answer: 4, 5, 8, 9, 10, 12, 13, 14
/*

then recurse left and repeat this logic
log the data from the node
then recurse right and repeat this logic

*/

//*************Postorder**************
//given this tree, use Postorder traversal to log the data in that order
//hint: Postorder traversal is good for visiting left subtree first, the right, then the root.
//Your answer: 4, 9, 8, 5, 14, 13, 12, 10

/*

then recurse left and repeat this logic
then recurse right and repeat this logic
log the data from the node

*/