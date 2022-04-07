/*

pre, in, post order review, all depth first recursive 

*
Pre
log current val
recurse left 
recurse right
*

*
in 
recurse left
log node
recurse right
*

*
post
recurse left
recurse right
log node
*

*
Breadth first iteration via queue
visits every node on a level before moving on.

queue starts with node

remove from queue
some action against val
push children
*



*
Iterative depth first, using a stack.  mimic's the call stack

same as bfs but with stack
*



Look ahead for tomorrow discussion

*min max*
binary search -- recurse all the way left or right
binary -- visit every node and keep track current max or min
*Height*
recurse, count nodes, minus 1 when you see null
compare left and right 
*count nodes*
visit every node and count
*Balanced tree*
compare the heights of left and right
*Get Parent*
find the node that point to your target, thats the parent 
*node deletion*
no children, -- make the node null
on child, parents child becomes node to deletes child
two children, replace the value of the node to delete with the in order predecessor,  
and then delete the in order predecessor 
*/

console.log()