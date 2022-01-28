/*
Implement a doubly linked list.

addToHead
removeFromHead
addToTail
removeFromTail
contains (should return true if a value exists in the list, false if it doesn't)
*/

// class Node {
//   constructor(val){
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   addToHead(val){
//     const newNode = new Node(val);

//     if(!this.head){
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       const oldHead = this.head;

//       newNode.next = oldHead;
//       oldHead.prev = newNode;

//       this.head = newNode;
//     }

//     this.length++
//   }

//   addToTail(val){
//     const newNode = new Node(val);

//     if(!this.head){
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       const oldTail = this.tail;

//       oldTail.next = newNode;
//       newNode.prev = oldTail;

//       this.tail = newNode;
//     }

//     this.length++;
//   }

//   removeFromHead(){
//     if(!this.head) return;

//     const oldHead = this.head;
//     this.head = oldHead.next;
//     if(this.head) this.head.prev = null;

//     this.length--;
//     return oldHead;
//   }

//   removeFromTail(){
//     if(!this.head) return;

//     const oldTail = this.tail;
//     this.tail = oldTail.prev;
//     if(this.tail) this.tail.next = null;

//     this.length--;
//     return oldTail;
//   }

//   contains(searchVal){
//     let current = this.head;

//     while(current){
//       if(current.val === searchVal){
//         return true;
//       }
//       current = current.next;
//     }

//     return false;
//   }
// }


// const test = new DoublyLinkedList();
// test.addToHead(0)
// test.addToHead(1)
// test.addToTail(2)
// // test.removeFromHead();
// console.log(test.contains(6));



// const rand = (size) => [...Array(size)].map(() => Math.floor(Math.random() * size));

// const small = rand(100);
// const medium = rand(5_000);
// const large = rand(100_000);
// const huge = rand(1_000_000)

// const solution1 = arr => {
//   console.time('Array.includes');
//   for (let int = 1;;int++) {
//     if (!arr.includes(int)) {
//       console.timeEnd('Array.includes');
//       return int;
//     }
//   }
// }

// const solution2 = set => {
//   console.time('Set.has');
//   for (let i = 1;;i++) {
//     if (!set.has(i)) {
//       console.timeEnd('Set.has');
//       return i
//     }
//   }
// }

// console.log('Testing small');
// solution1(small);
// solution2(new Set(small));
// console.log('----')

// console.log('Testing medium');
// solution1(medium);
// solution2(new Set(medium));
// console.log('----')

// console.log('Testing large');
// solution1(large);
// solution2(new Set(large))
// console.log('----')

// console.log('testing huge')
// solution1(huge);
// solution2(new Set(huge));


// let count = 0
// let cache = {1: 0, 2: 1};

// function fib(n) {
//   count++
//   // console.log(`Running fib(${n})`);
//   if (n === 1) return 0;
//   if (n === 2) return 1;

//   return fib(n-1) + fib(n-2);
// }


// function fibMemo(n) {
//   count++
//   console.log(`Running fibMemo(${n})`);

//   if (cache[n] === undefined) {
//     cache[n] = fibMemo(n-1) + fibMemo(n-2);
//   }

//   console.log(cache);
//   return cache[n];
// }

// console.log(fib(45));
// console.log(fibMemo(45));
// console.log("count of calls fib: ", count)

// function fibTab(n) {
//   for (let i = 3 ; i <= n ; i++) {
//     cache[i] = cache[i-1] + cache[i-2];
//   }

//   return cache[n];
// }

// console.log(fibTab(10));
// console.log(cache);

// const hashIt = (word) => {
//   return word
//     .split('')
//     .reduce((res, char) =>{
//       console.log("res: ", res)
//       return Number(char.charCodeAt().toString(2)) + res
//     }, 0);
// };

// console.log(hashIt('hashedString'))




/*

{
  "firstName" : "James"


}



let hashed = hash('firstName') => Ox47AF3






 Ox47AF3| location2 | "James"
        | location1 | value
        ect...





*/
