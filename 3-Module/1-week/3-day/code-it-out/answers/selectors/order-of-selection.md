## Order of Specificity

- Given the chart below, which 3 will have it's styling applied and prioritized?
  
  ![](https://i.imgur.com/XLF6TPF.png)




- Rule of Priority:
  - 1) inline writes over everything... but we rarely want this. Avoid this.
  - 2) whichever has the most `IDs`, wins.
  - 3) if above equal, whichever has the most `classes`, `pseudo-classes`, and `attributes` wins.
  - 4) if above equal, whichever has the most `tags` (a, div, h1, etc.) wins.
  - 5) if above equal, whichever is `added last in the file` wins.


