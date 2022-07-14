//-----------------problem 1------------------- 
//given the image below, write out the equivalent adjacency list in a javascript object below: https://i.imgur.com/JgEkPg6.png

// Your code here, 1 has been done for us:
const adjList = {
    1: [2,5],
    2: [1,3,5],
    3: [2,4],
    4: [3,5,6],
    5: [1,2,4],
    6: [4]
}


//-----------------problem 2------------------
const startNode = 1;
//create a variable called `neighborsArr` and take the adjList, grab the neighbors array for the startNode of 1 (remember Pojos?)
//result should be: [2,5]

//write your code here  
const neighborsArr = adjList[1]; //bracket notation to access the pojo object using 1 as the key
console.log(neighborsArr);

