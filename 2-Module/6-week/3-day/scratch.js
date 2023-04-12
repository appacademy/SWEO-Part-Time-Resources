// directed
// a -> b, z -> x
// edges {a,b}, {z,x}
// vertices {a,b,z,x}

// undirected/bidirectional
// j <--> k
// edges {j,k}, {k,j}
// vertices {j,k}

// edge weight
// f -> l
// ew = 10
// f -> p
// ew = 2

class Vertex {
	constructor(){
		this.neighbors = [];
		// this.weight = 0;
	}
}

class TreeNode {
	constructor(val){
		this.left = null
		this.right = null
		this.val = val
	}
}

class DoublyLinkNode {
	constructor(val){
		this.prev = null
		this.next = null
		this.val = val
	}
}

// tree
// left and right
// ll
// next and prev

// adjaceny list

const graph1 = [
	[2,3],
	[0,4],
	[1,0],
	[2],
	[]
]

const graph2 = {
	'A' : ['C'],
	'B' : ['A'],
	'C' : []
}
