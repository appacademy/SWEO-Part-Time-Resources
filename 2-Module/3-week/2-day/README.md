
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
  complexity you think we see here.
  - If you need help Google sheet instructions are in the homework/Google

## Big-O Notation: Rest of Class

- Some questions to start us off...
  - Why can't we effectively use 'time' to test the efficiency of our code?
    - too many variables, ie machine, weather, other factors.
  - What is Big-O notation concerned with?
    - Best, average or worst case?
      - more concerned with worst case scenarios, but an average is definitely notable. 
    - Specific tests run or general trend of many tests run?
      - general trend. 
    - Tests with similar sizes, or tests with different sizes?
      - different sizes for sure, because we want to see how our code reacts with different inputs. 
    - What are the three complexities we read about?
      - linear
      - constant
      - quadrratic
    - So... what is Big-O?
      - how code slows as data grows. 
      - The "O" in big-O stands for "order" which means that it is not concerned with exact values: instead, it is used to describe the general shape of the growth curve.


## Simplifying Big-O

- We can remove coefficients

  - n is going to affect the trend MUCH more than a constant number.

    ```text
      5n => On
      2n^2 => On^2
      5 => O(1)
    ```

- We can remove the smaller complexity when using addition

  ```text
    n^2 + n => On^2
    5 + n => On
  ```

- Let's simply!
  - 5n^2 + 2n + 5 => O(n^2)
  - n \* 5n + n => O(n^2)
  - 2 + 3 => O(1)

## If time is left

- Look through some past weeks functions, can you define their time complexity?
  - If not, ask a TA

[class google sheet]: https://docs.google.com/spreadsheets/d/1EcieWUaYYBa7MHq7ekGHW8_AO80VPC3n1JeI9FMAbV0/edit?usp=sharing
