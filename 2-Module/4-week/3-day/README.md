# M2W4D3

## Hash functions

A `hash function` takes in an input, runs it through a set of **deterministic** steps, and returns a scrambled output. Given the same input, it will **ALWAYS** return the same output.

- No matter what the *input* is, the hashing process will **always go through the exact same steps** resulting in the same output for that particular input.
- **Only works in one direction**. (input -> output) There is no way to decrypt a hash output. *This is why they are so useful for security*.

### SHA256 hashing

SHA stands for **Secure Hash Algorithm**. It's both **fast and extremely secure**. Given an input of any number of bits it will return an output of 256 bits which is equivalent to 2^256 possibilities.. You're not going to be able to decrypt the output.

- The output will always be 64 characters long. It is a **hexadecimal** string which represents 4 bits in memory.
- Unlike a simple `hash function`, `sha256()` will return a completely different output for *similar* inputs. This is a trait of secure hash functions.

## Hash Tables (Hash Map)

Arguably the most important data structure you will learn, `Hash maps` provide key/value storage with `O(1)` time complexity for insertion, deletion, access, and search.

- Have already been using hash maps for a while in the form of `JS objects`.

Under the hood they are basically an `array` with its elements *indexed by a hashed key*. We use the modulo of that key to get an `array` index.

### Hash Table Data Storage

To implement, you need to initialize an `array` of fixed size for data storage. Each slot in the `array` is referred to as a `bucket` and initialized to `null`.

Next you need a `hash function` to convert the keys to integers and a function to convert the key hash into a valid `array` index using the `modulo` operator.

### Inserting data into a hash table

First you need to hash and modulo the key to find the correct `bucket` index,, then you create the key/value pair and store it in the correct `bucket`.

Just like with `LinkedList` nodes you can create a new `class` for KeyValuePair data.

```js
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
```

If the hashModulo function returns 1, then you would insert it into that index.

```js
HashTable {
  data: [
    null,
    KeyValuePair { key: 'key', value: 'value' },
    null,
    null,
    null,
    null,
    null,
    null
  ]
}
```

### Retrieving data from a hash table

In order to get data from the hash table, you just run your hashModulo function on the key to get the index and then grab that `bucket` from the `data` array.

### Performance analysis

- Hashing is technically `O(n)` where n is the length of the key but as long as it is reasonably sized it's considered fast enough to be `O(1)`.
- Modulo is `O(1)` as well.
- insertion and reading from a hash table has the same time complexity as an array `O(1)`.

Searching for keys in a hash table is faster than searching through an array. While searching an array is `O(n)`, (looping to find an element) hash tables accomplish this in `O(1)` time.

- searching for values is still `O(n)`.

Like `arrays`, hash tables have an O(n) space complexity, even though they waste some memory by holding empty buckets.

### Hash Collisions

When two keys hash to the same index, it's called a `hash collision`.

Since avoiding hash collisions is impossible, you must be able to resolve them. There are no *elegant* solutions to this problem. This can be solved in a few ways:

- Use `LinkedList chaining` to store the data by adding a next pointer to each `KeyValuePair` object like a `LinkedList` node. This will cause each bucket to hold several things.

  ```js
  class KeyValuePair {
    constructor(key, value, next) {
      this.key = key;
      this.value = value;
      this.next = next;
    }
  }
  ```

  - If you use this method, you will have to *traverse* the `linked list` to find or delete the values you're looking for. this is `O(n)` time, however the `n` is referring to the **number of collisions**, *not the number of items in the list*, which should not be a problem with an appropriately sized `hash map`.
  - If you use this method you will have an average of `O(1)` time and a worst case of `O(n)` time per search.

> The probability of a collision is equivalent to 1 / buckets.length

 you can reduce the probability of collisions by increasing the number of `buckets`. Create a new `array` with it's size doubled and copy the old into the new. Since the length of the `array` has changed, you'll have to hash each key again.

- Resizing a hash table is an `O(n)` operation where `n` is the number of pairs in all buckets. This should be done sparingly.

#### **Load Factor**

The `load factor` is the number of key/value pairs divided by the number of buckets. Should trigger a resize at about 0.7. This means that a `hash table` will *always* waste between 35-70% of its allocated memory, but still has `O(n)` space complexity.

### Other methods of resolving collisions

- [Collision Resolution on Wikipedia](https://en.wikipedia.org/wiki/Hash_table#Collision_resolution)

There is no *elegant* solution to this problem, every solution has a minimum of `O(n)` time complexity.

## Project Time

- [Linked List Project](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-10---data-structures/linked-list-project) (until EOD)

If you finish early, just get started on Homework and study up!