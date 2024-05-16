# M2W4D4

## Let's hash out hashing

- What is hashing?
  - Hashing is basically just running some input through a formula\
  and getting back a different, but consistent result.
  - Hashing is ONE WAY, we don't care about the original data, just\
  that we get something more 'unique'.

  - Here's a super simple hashing function

```js
function simpleHash(str) {
  let hashValue = 0;

  for (let i = 0 ; i < str.length ; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}
```

  - Not great, that's why we have some better hashing algorithms out there.\
  Better just means similar inputs have vastly different outputs. Many possibilities\
  that would be hard, near impossible to crack.
    - SHA256
    - MD5
    - A lot more

## Hash Tables

- First, I want us to note `We treat POJOs and Maps as Hash Tables in JavaScript`
  - We've talked about this a little bit on how constant lookup time is due to\
  JS `hashing` the keys. The project we'll be doing today is a `exercise`\
  implementation of what that might look like. When you get into practicing DSA\
  over these next few weeks it's totally okay to just use a POJO instead of creating\
  a Hash Table class (JavaScript already implements the hashing for you, since that's how objects work)

- Hash tables contain a few different properties:
  - data: The data it holds (an array), each index of an array is called a bucket
    - This array will be initialized with a specified capacity and can be filled with null to represent an unused bucket
  - count: The number of non-empty buckets (how much data has been inserted)
  - capacity: The length of the data property

- Sometimes when you get the hash of a string, it may collide with other string's hashes.
    - You can handle this by using a linked list to save data that would have otherwise collided/overidden the previous key that had the same hash output
