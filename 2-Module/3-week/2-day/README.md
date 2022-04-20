## Big-O Notation: Rest of Class

- Some questions to start us off...
  - Why can't we effectively use 'time' to test the efficiency of our code?
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

## Simplifying Big-O

- We can remove coefficients
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
  - n^2 => O(n^2)
  - n^2  => O(n^2)
  - 1 => O(1);
