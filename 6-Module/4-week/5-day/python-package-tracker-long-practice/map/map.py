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
    #!!ADD
    pass
    #!!END_ADD
    #!!START
    # Track list of cities that we need to visit next
    next_cities = [start]
    # Cities that we have fully explored
    visited = set()
    
    # Track each city we encounter, the total distance to get there, and the previous city in the route
    # We're tracking both of these values in one dict for each city
    distances = {start: {"distance_from_start": 0, "previous": None}}

    # While we have cities to explore and we have previously made it to our end location
    while next_cities and end not in visited:
        # Take the first city from the list
        current = next_cities.pop(0)

        # Logging for the city currently being explored in the graph
        # print("CURRENTLY EXPLORING:", current)

        # Get reference to the total distance it took to get here
        current_distance = distances.get(current).get("distance_from_start")

        # For each connected city, get a reference to the city name and distance of that leg of the route
        for city, next_distance in map[current]:
            # IF we haven't fully explored that city 
            # AND we either haven't been to that city before
            #     OR getting there from this route is shorter than our previous route
            if city not in visited and (city not in distances or distances.get(city).get("distance_from_start") > (current_distance + next_distance)):
                # Assign the updated total distance and pointer to the previous city 
                distances[city] = {"distance_from_start": current_distance + next_distance, "previous": current}
                # Add the city to the list that we need to explore if it's not already there
                if city not in next_cities:
                    next_cities.append(city)

        # After we explored all connected cities, add this one in to our visited set
        # This helps us make sure that we don't loop continuously and allows us to exit early after finding our end
        visited.add(current)

        # Find the city in the next_cities list that is closest to our start that we know of
        if next_cities:
            closest_next = min(next_cities, key=lambda city: distances.get(city).get("distance_from_start"))
            # Put it at the beginning of the list so that on our next iteration we can take out the first element
            next_cities.insert(0, next_cities.pop(next_cities.index(closest_next)))
    
    # Logging our final calculated distances
    # print(f"\nFinal distances:\n{distances}\n")
    
    # Call the helper function that traces back the path taken to give in-order steps
    return trace_back(distances, start, end)


def trace_back(distances, start, end):
    if end not in distances:
        return 'Path not viable' 
    path = [end]
    # Build our path from our end point, referencing the previous node at each step
    while path[0] != start:
        current = distances.get(path[0])
        previous = current.get("previous")
        path.insert(0, previous)
    return path

#!!END

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
