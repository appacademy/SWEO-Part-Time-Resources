# `M2W6D2`

## `Graphs Overview`

All of the `node-and-pointer` data structures we've learned about recently (`linked lists`, `binary trees`, etc.) are forms of **`graphs`**!

To solve `graph` problems you'll use `arrays`, `hash tables`, `sets`, `stacks`, `queues`, `recursion`, `breadth` and `depth-first` search and more. They can be tricky, and as such will show up in advanced coding interviews (**FAANG companies love these**).

`Graphs`:

- are an abstract data type
- represent a collection of `nodes` and `edges`
- each `node` represents one or more values
- unlike `trees`, do not have to start from a `root node` and can have any number of `edges`.

### `Directed vs Undirected`

If a `graph` diagram has arrows representing the `edges`, it's a `directed graph`, otherwise it's an `undirected graph`.

`Undirected`:

- each `edge` represents a 2-way relationship

`Directed`:

- each `edge` only goes in one direction

### `Cyclic vs Acyclic`

The main difference between `trees` and `graphs` are that `graphs` can have `cycles` while `trees` cannot. Traversals can be tricky because `cycles` lead to infinite loops if not properly tracked.

### `Weighted vs Unweighted`

`Edges` can have *weight* to them. The weight is a number that can represent any extra data we need for that `edge`. For instance in a traffic `graph` the weight may indicate the time it takes to traverse from end to end. (if traffic is heavy or the speed limit is lower the weight of that `edge` will be higher). In an `unweighted graph`, every `edge` has a weight of 1.

### `Adjacency Lists`

The most standard way to represent a `graph` in code is an **`adjacency list`**. This is implemented as *an `object` with a `key` for each `node` with a `value` of an `array` containing all of the `nodes` it points to*.

<!-- ![`graph` example](./lecture/pics/`graph`Example.png) -->
<img width='500' src='https://github.com/appacademy/SWEO-Part-Time-Resources/raw/2022-May-E/2-Module/6-week/3-day/lecture/pics/graphExample.png' ref='bi-directional graph example'>

For the above `graphs` the `adjacency lists` would be:

```js
const graph1 = {
  T: ['V'],
  U: ['V'],
  V: [],
};

const graph2 = {
  X: ['Y'],
  Y: ['Z'],
  Z: ['X'],
};

const graph3 = {
  A: ['B', 'C', 'E'],
  B: [],
  C: ['B', 'D'],
  D: [],
  E: ['A'],
  F: ['E'],
};
```

`Adjacency lists` are pretty simple compared to some other things we've worked with!

- Unlike `binary search trees`, `graphs` don't have an order to their children.

Since we can't guarantee an order, and we know that there cannot be any duplicate `edges`, you could use a `set` to represent adjacencies instead of an `array`.

> **Using this format, we can check if 2 `nodes` are `neighbors` in `O(1)` time instead of `O(n)` with an `array`! If your input is very large, this is the most efficient way, otherwise an `array` will work fine.**

#### `Bi-directional and Undirected edges`

In this case the `edges` are represented by two directional `edges` in an `adjacency list`.

<!-- ![bi-directional `graph`](./lecture/pics/bidirectional`Graph`Example.png) -->
<img width='400' src='https://github.com/appacademy/SWEO-Part-Time-Resources/raw/2022-May-E/2-Module/6-week/3-day/lecture/pics/bidirectionalGraphExample.png' ref='bi-directional graph example'>

```js
const undirected = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};
```
