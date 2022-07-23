## Order of Specificity

![](https://i.imgur.com/XLF6TPF.png)


<!-- problem 1: fill out the remaining rules of priority -->
- Rule of Priority:
  - 1) `inline css`
  - 2) whichever has the most `ids`
  - 3) if above equal, whichever has the most `classes`, `pseudo-classes`, and `attributes` wins.
  - 4) if above equal, whichever has the most `tags`
  - 5) if above equal, whichever is `the most recently added / the last one added to our css file (closest to the bottom)`

<!-- problem 2: select best choice below -->
- which one has higher specificity?:
  - `body`
  - `div p a.selected`
  - `div.nav p.selected a.selected` (correct answer)
  - `*`
