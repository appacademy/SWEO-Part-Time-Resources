//*************Preorder**************
/*
                 10
               /    \
              5      12
             / \       \ 
            4   8       13
                 \       \   
                  9      14
*/                  

//given this tree, use Preorder traversal to log the data in that order(don't code, just provide output through analysis)
//hint: Preorder traversal is good for visiting the data first as we traverse the node

/***********Pseudo Code Example
 - log the data from the node
 - then repeat this logic for Node's left(recurse the func passing it the left node) (preOrder(currentNode.left))
 - then repeat this logic for Node's right(recurse the func passing it the right node)
*/

//Your answer: 


//*************Inorder**************
/*
                 10
               /    \
              5      12
             / \       \ 
            4   8       13
                 \       \   
                  9      14
*/         
//given this tree, use inorder traversal to log the data in that order
//hint: inorder traversal is good for visiting the nodes data in a way that gives an inherent order

/***********Pseudo Code Example
 -then repeat this logic for Node's left(recurse the func passing it the left node)
 -log the data from the  node
 -then repeat this logic for Node's right(recurse the func passing it the right node)
*/


//Your answer:

//*************Postorder**************
/*
                 10
               /    \
              5      12
             / \       \ 
            4   8       13
                 \       \   
                  9      14
*/         
//given this tree, use Postorder traversal to log the data in that order
//hint: Postorder traversal is good for visiting left subtree first, the right, then the root.

/***********Pseudo Code Example
 -then repeat this logic for Node's left(recurse the func passing it the left node)
 -then repeat this logic for Node's right(recurse the func passing it the right node)
 -log the data from the  node
*/

//Your answer: 