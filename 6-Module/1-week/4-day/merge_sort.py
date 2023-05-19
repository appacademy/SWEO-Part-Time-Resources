#Both of these methods use an algorithm called Timsort, which is a hybrid sorting algorithm,
#derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data.
#It has a worst-case time complexity of O(n log n).
def simple_sort(list):
    return sorted(list)

def simple_sort_inplace(list):
    list.sort()


#Merge Sort
#Visualization tool: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

#Merge Sort is a 'divide-and-conquer' algorithm, which breaks down a problem into smaller manageable parts,
# solves them individually, and combines them to form the final solution.

#merge_sort keeps calling itself on smaller portions
# of the list until it reaches the smallest possible list (1 element), which is inherently sorted.

def merge_sort(list):
    #If the length of the list is greater than 1 (if it's 0 or 1, it's already sorted),
    # it proceeds with the sorting.
    if len(list) > 1:
        #This calculates the midpoint of the list.
        mid = len(list)//2
        #this is a recursive call to merge_sort, passing the first half of the list.
        # The output (a sorted list) is stored in lower_half.
        lower_half = merge_sort(list[:mid])
        print("Lower Half", lower_half)
        #This is a second recursive call to merge_sort, this time passing the second half of the list.
        # The output (another sorted list) is stored in upper_half.
        upper_half = merge_sort(list[mid:])
        print("Upper Half", upper_half)
        #This calls the function merge (explained below) with lower_half and upper_half,
        # which merges these two sorted lists into one sorted list and returns it.
        return merge(lower_half, upper_half)
    #If the input list is of length 1 or less, it just returns the original list, because it's already sorted.
    return list


#This defines a function merge that takes two lists, lower and upper, as input.
# These lists are assumed to be sorted.
def merge(lower, upper):
    print("IN MERGE")
    #This initializes two pointers, i and j, to 0.
    # These pointers keep track of the current index in the lower and upper lists, respectively.
    i = j = 0
    #This initializes an empty list, temp, that will be used to store the merged list.
    temp = []
    #This is a loop that continues as long as there are still elements left in either lower or upper.
    while i < len(lower) or j < len(upper):
        #If we've exhausted all the elements in lower, then...
        if i == len(lower):
            #...we append the current element from upper to temp.
            temp.append(upper[j])
            #We increment the pointer j to move to the next element in upper.
            j+=1
        #If we've exhausted all the elements in upper, then...
        elif j == len(upper):
            #...we append the current element from lower to temp.
            temp.append(lower[i])
            #We increment the pointer i to move to the next element in lower.
            i+=1
        #If the current element in lower is less than the current element in upper, then...
        elif lower[i] < upper[j]:
            #...we append the current element from lower to temp.
            temp.append(lower[i])
            #We increment the pointer i to move to the next element in lower.
            i+=1
        #If none of the previous conditions are true
        # (which means the current element in upper is less than or equal to the current element in lower), then...
        else:
            #...we append the current element from upper to temp
            temp.append(upper[j])
            #We increment the pointer j to move to the next element in upper.
            j+=1
    #Finally, we return the merged and sorted list temp.
    return temp

#This implementation of merge sort has a time complexity of O(n log n), which means it scales well as the size of the input list grows.


lst = [5, 2, 38, 91, 16, 427]

#sorted_lst = merge_sort(lst)        # Out of place solution [2, 5, 16, 38, 91, 427]
#print(sorted_lst)

merge_sort(lst)                     # In place solution [5, 2, 38, 91, 16, 427]
print(lst)
