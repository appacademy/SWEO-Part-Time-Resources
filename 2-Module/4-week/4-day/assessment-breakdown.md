## Week 10 Assessment Breakdown
- 5 MC; 11 Specs; 
  - Passing score: 12/16

- Link lists, hashmaps, queues, arrays
- Doubly vs. Singly linked list operations and time complexity.
- Understanding Hash Collision
  - i.e. what happens when 2 different keys, after going through a hash function/modulo, have the same hash output?
- Time complexity (average and worst) of hashmap operations, link lists operations,
  - i.e. operations like remove, insert, lookup, etc.

- Coding Portion: Analyze and Refactor
  - Polya's Plan
    - Understand the prompt. Read the code and see what it is doing.
    - Make a plan, add comments to reflect what the code should do.
    - Execute
  - Given the wrong or slow usage of a datastructure for the code, Determine which other datastructure(s) is better fit for the job
	- then apply that datastructure (changing it from the old to the new)
	- after we apply that new datastructure, REFACTOR the code to make it work w/ new datastructure (apply the new datastructure's method over the old ones)
	- i.e. if I'm replacing the array with a queue, instead of using array.shift (removing front), I would use queue.?
    	- Datastructures that we should have familiarity with (don't have to build it, but know how to use it)
    	- Queues (implemented through link list)
    	- Sets
  		- Arrays
  		- Linked List
- Hard if we're not prepared (understanding sets, queues, linked list, sets and understanding a problem)