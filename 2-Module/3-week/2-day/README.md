# M2W3D2

<<<<<<< HEAD
=======
## `aa_update` update

```bash
mv ~/appacademy ~/appacademy-2021-Sept-E && curl -s https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/main/utilities/scripts/folder_structure.sh | bash
```

```text
Your Cohort's Code
2021-Sept-E
```

>>>>>>> 068e39f9864dacf5a348aadb94b67acf4110ead6
## Practice Pt. 1: 20 mins

- If your `should run in O(n) time` test fails, call in a TA

## Practice Pt. 1 Discussion : 5 mins

- Two volunteers to drive me through your code.

## Practice Pt. 2: 20 mins

## Practice Pt. 2 Discussion: 5 mins

- Two more volunteers drive me through your code.
  - We won't use DRY for now!

## Practice Pt. 3: 40 mins

- You will ACTUALLY copy/paste your code from pt.2 then add timings
- [Class Google Sheet]
- You'll each present your findings and tell me, based on your graph, what time\
<<<<<<< HEAD
  complexity you think we see here.
=======
complexity you think we see here.
>>>>>>> 068e39f9864dacf5a348aadb94b67acf4110ead6
  - If you need help Google sheet instructions are in the homework/Google

## Big-O Notation: Rest of Class

- Some questions to start us off...
  - Why can't we effectively use 'time' to test the efficiency of our code?
<<<<<<< HEAD
    - too many factors to play, ie machine speed, weather, different conditions
  - What is Big-O notation concerned with?
    - Best, average or worst case?
      - we are usually concerned with the worst case of big-O
    - Specific tests run or general trend of many tests run?
      - general tests run, not just specific instances of a test being run
    - Tests with similar sizes, or tests with different sizes?
      - different sizes because we want to think about all different applications when running a program
    - What are the three complexities we read about?
      - constant
      - linear
      - quadratic
    - So... what is Big-O?
      - You can measure the speed of code using timing benchmarks but there's a faster, more descriptive way of evaluating code performance at scale. Instead of running the code under various conditions and recording the results, you will instead learn to read code and determine the rate of growth through analysis. This is called complexity analysis and expressed using big-O notation.
      - standard mathematical notation that shows how efficient an algorithm is in the worst-case scenario relative to its input size


=======
    - Too small, you can't see the efficiency
    - This will change between computers and also with the same computer
  - What is Big-O notation concerned with?
    - Best, average or worst case?
      - Worst
    - Specific tests run or general trend of many tests run?
      - Many tests (general trend)
    - Tests with similar sizes, or tests with different sizes?
      - different sizes
  - What are the three complexities we read about?
    - Constant - O(1)
      - Key into an object
      - arithmetic
    - Linear - O(n)
      - looping over an array once from beginning to end
    - Quad - O(n^2)
      - nested loops
    - So... what is Big-O?
      - BigO is a way for us to analyze our code to find its time complexity \
      just by looking at it, and not running it.
>>>>>>> 068e39f9864dacf5a348aadb94b67acf4110ead6

## Simplifying Big-O

- We can remove coefficients
<<<<<<< HEAD

=======
>>>>>>> 068e39f9864dacf5a348aadb94b67acf4110ead6
  - n is going to affect the trend MUCH more than a constant number.

    ```text
      5n => On
      2n^2 => On^2
      5 => O1
    ```

- We can remove the smaller complexity when using addition

  ```text
    n^2 + n => On^2
    5 + n => On
  ```

- Let's simply!
<<<<<<< HEAD
  - 5n^2 + 2n + 5 => On^2
  - n \* 5n + n => On^2
  - 2 + 3 => O(1)
=======
  - n^2 => O(n^2)
  - n^2  => O(n^2)
  - 1 => O(1);
>>>>>>> 068e39f9864dacf5a348aadb94b67acf4110ead6

## If time is left

- Look through some past weeks functions, can you define their time complexity?
  - If not, ask a TA

<<<<<<< HEAD
[class google sheet]: https://docs.google.com/spreadsheets/d/1EcieWUaYYBa7MHq7ekGHW8_AO80VPC3n1JeI9FMAbV0/edit?usp=sharing
=======
[Class Google Sheet]: https://docs.google.com/spreadsheets/d/1EcieWUaYYBa7MHq7ekGHW8_AO80VPC3n1JeI9FMAbV0/edit?usp=sharing
>>>>>>> 068e39f9864dacf5a348aadb94b67acf4110ead6
