# `M6W1D5`

## List Comprehensions

```py
[expression (optional if -> else) for element in iterable (optional if expression)]

nums = [1,2,3,4,5]
doubled = [x*2 for x in nums]
even_doubled = [x*2 for x in nums if x % 2 == 0]
even_double_odd_zero = [x*2 if x % 2 == 0 else 0 for x in nums if x != 1]

print(doubled)
print(even_doubled)
print(even_double_odd_zero)

def is_prime(num):
  for i in range(2, num):
    if num%i == 0:
      return False
  return True

res = [x for x in range(25) if x > 1 and is_prime(x)]

print(res)
```
