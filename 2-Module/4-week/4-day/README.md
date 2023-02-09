# M2W4D4

## Let's hash out hashing

- What is hashing?
  - Hashing is basically just running some input through a formula\
  and getting back a different, but consistent result.
  - Hashing is ONE WAY, we don't care about the original data, just\
  that we get something more 'unique'.

  - Here's a super simple hashing function

  ```js
  const hashIt = (word) => {
  return word
    .split('')
    .reduce((res, char) => Number(char.charCodeAt().toString(2)) + res, 0);
  }; 
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

- `SLACK MYLO WHEN DONE WITH EACH SECTION`
- Try not to use the reading as much as asking a TA
