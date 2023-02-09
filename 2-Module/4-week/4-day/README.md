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
a Hash Table class

## Project

- `SLACK JAMES WHEN DONE WITH EACH SECTION`
- Try not to use the reading as much as asking a TA

## Sets

- Sets are a collection of unique members
- Can't have multiples which is cool
- Constant lookup time, also cool

- Methods/Properties
- new Set(`/* something to create set from */`) - creates a set
- Set.add() - adds something to a set
- Set.delete() - deletes something from a set
- Set.size - gives you the 'length' of a set
- Set.has() - let's you know if it's in the set
- Set.clear() - removes everything from the set

```js
const isUnique = (arr) => {
let set = new Set(arr);
return set.size === arr.length;
};

console.log(isUnique([1, 2, 3]));
console.log(isUnique([1, 2, 3, 1]));
```