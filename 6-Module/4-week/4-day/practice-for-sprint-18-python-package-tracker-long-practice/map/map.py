# A simple graph representing a series of cities and the connections between
# them.

map = {
    "Seattle": {"San Francisco", "Washington D.C."},
    "San Francisco": {"Seattle", "Los Angeles", "Denver"},
    "Los Angeles": {"San Francisco", "Phoenix"},
    "Phoenix": {"Los Angeles", "Denver"},
    "Denver": {"Phoenix", "San Francisco", "Houston", "Kansas City"},
    "Kansas City": {"Denver", "Houston", "Chicago", "Nashville"},
    "Houston": {"Kansas City", "Denver"},
    "Chicago": {"Kansas City", "New York"},
    "Nashville": {"Kansas City", "Houston", "Miami"},
    "New York": {"Chicago", "Washington D.C."},
    "Washington D.C.": {"Chicago", "Nashville", "Miami", "Seattle"},
    "Miami": {"Washington D.C.", "Houston", "Nashville"}
}

DELIVERED = "Delivered"


# Use BFS to find the shortest path
def find_shortest_path(start, end):
    # Question:  Why is a Python list acceptable to use for this queue?
    qq = []
    qq.append([start])
    visited = set()

    while len(qq) > 0:
        path = qq.pop()
        city = path[-1]

        if city == end:
            return path
        else:
            if city not in visited:
                visited.add(city)
                for connection in map[city]:
                    new_path = list(path)
                    new_path.append(connection)
                    qq.insert(0, new_path)

    return "Error: Path not found"


# Determine the next step via BFS.  Set location to delivered at end.
def advance_delivery(location, destination):
    print("advancing", location, destination)
    # shouldn't be called in this case
    if location == DELIVERED:
        return DELIVERED
    if location == destination:
        return DELIVERED

    path = find_shortest_path(location, destination)
    # Safe to say there is a next city if we get here
    return path[1]


# Testing
# print(find_shortest_path("Seattle", "Kansas City"))


## PHASE TWO

# A graph representing city connections and the distances between them.
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

# map is designated as a parameter instead of referencing map_dij directly from the higher scope
# This allows for the function to be dynamic. 
# It is used in the testing examples below on a simpler map.
def find_shortest_path_dij(map, start, end):
    pass
    # Your code here

# PHASE TWO Testing
# print("BFS:", find_shortest_path("Seattle", "Washington D.C."))  # BFS: ['Seattle', 'Washington D.C.']
# print("Dij:", find_shortest_path_dij(map_dij, "Seattle", "Washington D.C."))  # Dij: ['Seattle', 'San Francisco', 'Denver', 'Kansas City', 'Chicago', 'New York', 'Washington D.C.']


# Simpler example
simple_map_dij = {
    "A": {("B", 30), ("F", 75), ("E", 200)},
    "B": {("A", 30), ("C", 20)},
    "C": {("B", 20), ("D", 30)},
    "D": {("C", 30), ("E", 25)},
    "E": {("A", 200), ("D", 25), ("F", 26)},
    "F": {("E", 26), ("A", 75)},
}

'''
  A----(75)---F
  | \         |
  |  \        |
 (30) \       |
  |    \      |
  |   (200)   (26)
  B      \    |
  |       \   |
  |        \  |
 (20)       \ |
  |          \|
  C           E
   \         /
   (30)    (25)
      \    /
         D
'''

# PHASE TWO Testing with simpler map
# print("Dij:", find_shortest_path_dij(simple_map_dij, "A", "B"))  # Dij: ['A', 'B']
# print("Dij:", find_shortest_path_dij(simple_map_dij, "A", "E"))  # Dij: ['A', 'F', 'E']
# print("Dij:", find_shortest_path_dij(simple_map_dij, "C", "F"))  # Dij: ['C', 'D', 'E', 'F']