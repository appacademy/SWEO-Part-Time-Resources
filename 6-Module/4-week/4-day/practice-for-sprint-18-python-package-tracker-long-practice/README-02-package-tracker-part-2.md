# ADVANCED: Package Tracker Continued

Finish the previous step of the package tracker, if you haven't done so, yet.

Now, you're going to do some really cool algorithm work. This is some awesome
computer science stuff.

In the `map/map.py` file, examine the second map with the following code.

```python
map_dij = {
    "Seattle": {("San Francisco", 679), ("Washington D.C.", 1000000)},
    "San Francisco": {("Seattle", 679), ("Los Angeles", 381), ("Denver", 474)},
    "Los Angeles": {("San Francisco", 381), ("Phoenix", 357)},
    "Phoenix": {("Los Angeles", 357), ("Denver", 586)},
    "Denver": {("Phoenix", 586), ("San Francisco", 474), ("Houston", 878), ("Kansas City", 557)},
    "Kansas City": {("Denver", 557), ("Houston", 815), ("Chicago", 412), ("Nashville", 554)},
    "Houston": {("Kansas City", 815), ("Denver", 878)},
    "Chicago": {("Kansas City", 412), ("New York", 712)},
    "Nashville": {("Kansas City", 554), ("Houston", 665), ("Miami", 817)},
    "New York": {("Chicago", 712), ("Washington D.C.", 203)},
    "Washington D.C.": {("Chicago", 701), ("Nashville", 566), ("Miami", 926), ("Seattle", 1000000)},
    "Miami": {("Washington D.C.", 926), ("Houston", 483), ("Nashville", 817)}
}
```

That contains the distance between a city and another city. For example, the
distance between Denver and Phoenix is 586 miles. An extreme example connecting 
Seattle to Washington D.C. at 1000000 miles is also included. This will be very 
helpful when testing and comparing to the breadth-first search that is already 
implemented.

Now, add a `find_shortest_path_dij` function to use _Dijkstra's algorithm_. 
You're going to have to read about this algorithm, yourself. You could go look 
at the [Wikipedia article][1] about this, but that's pretty dense and not so 
helpful, only helpful if you read lots of math-related stuff. A better resource 
can be found at one of these links. Find the one that helps you, or use multiple 
to get an understanding of the algorithm.

* [GeeksForGeeks article][2]
* [Programiz][3]
* [101 Computing Interactive Example][4]

You will likely find many implementations of Dijkstra's algorithm in a variety 
of programming languages all over the Web. To make yourself a better programmer,
**don't use them**. It's cheating yourself from this experience of creating a
multi-contextual model of interpreting a non-trivial algorithm into code. This
is something that every software developer will eventually have to face. Start
now, friends.

Test out your algorithm and compare the results to the breadth-first search 
approach already implemented. Shipping from Seattle to Washington D.C., BFS 
should give a direct connection between the cities. You know from the `map_dij` 
that these cities are (very accurately!) 1000000 miles apart! Dijkstra's 
algorithm should tell you to take the shorter distance path: ['Seattle', 
'San Francisco', 'Denver', 'Kansas City', 'Chicago', 'New York', 
'Washington D.C.'].

A second test case exists which may be easier to follow along with. It includes 
six points, A through F, with a diagram showing their distances. Make sure that 
these test cases pass using the new `find_shortest_path_dij` function and the test 
cases provided in the `map.py` file.

Congrats you are now done with this project, hope you enjoyed it!

[1]: https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
[2]: https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
[3]: https://www.programiz.com/dsa/dijkstra-algorithm
[4]: https://www.101computing.net/dijkstras-shortest-path-algorithm/
