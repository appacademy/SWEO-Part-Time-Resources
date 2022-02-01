/*
        4
      /   \
     2     6
    / \   / \
   1   3 5   7

*/



class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;

console.log(a);
