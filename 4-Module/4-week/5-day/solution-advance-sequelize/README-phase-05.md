# Basic Phase 5: Aggregation

In the `GET /classrooms/:id` endpoint, you want to concisely display the data
for a single classroom.

## Discussion: Two Common Approaches

Users like applications that let them know how many items are associated with
other items. For example, when looking at a list of classrooms, users are
probably wondering how many students are assigned to each one.

There are two common approaches:

1. Send the **full list** of students in each classroom with the list of
   classrooms
2. Send the **count** of the number of students in each classroom with the list
   of classrooms

To help determine which is better for a given application, consider the size of
the associated data and how the UI will display it.

If there's only one associated item and some of its data needs to show in the
UI, then it's best to include the item.

> Tip: By limiting the fields returned, the response will be smaller and,
> therefore, transfer faster over the Internet.

For example, if the associated data is relatively small (items have 10 or fewer
short text, number of boolean attributes), and there are a small number of items
(e.g. up to a 10-20 or so) and the lists needs to show in the UI with each item,
then it may be best to include the list of associated item(s). (Again, limiting
the fields can improve performance.)

If, however, there are many associated items (100+) and/or the UI only needs to
show the count of associated items, then using aggregation to return the count
of associated items is the favorable approach.

Aggregates are helpful for calculating useful and concise information to the
display to the user. It's usually the preferred way to calculate this
information because of how efficient it is.

In the `GET /classrooms/:id` endpoint, you want to concisely display the data
for a single classroom.

## Phase 5A: Classroom's supply count

Find the total number of supplies that a classroom specified by the `id` route
parameter has.

The response data is currently the classroom returned from the query in the
route handler.

Set a property on the response data of `supplyCount` that represents the total
number of supplies for that classroom returned. You can accomplish this by using
**ONE** of the two options below.

### Two options to display the `supplyCount`

You will not be able to see the `supplyCount` in the data returned from the
response if you tried to set the `supplyCount` directly on the `Classroom`
object and returned the `Classroom` object. Here are **TWO OPTIONS** you can
use to display the `supplyCount` on the `Classroom` object:

1) Convert the query result object to POJO:

   - Convert the `Classroom` object into a POJO using the `.toJSON()` method
   - Set the `supplyCount` property onto the POJO 
   - Return the POJO.

**OR**

2) Return a POJO directly

   - Set the query options of `raw: true` on the query to skip the conversion and
   return a POJO directly from the query. 
      - *Note: if you add associations to include in this query, this option
        will **NOT** display the associations properly.* 
   - Set the `supplyCount` directly on the query result.

### Result

Test the endpoint to make sure that the `supplyCount` key is set correctly for
a classroom specified by the `id` route parameter.

- The first classroom (`id` of `1`) should have `16` supplies.
- The second classroom (`id` of `2`) should have `14` supplies.

## Phase 5B: Classroom's student count

Find the total actual number of students that a classroom specified by the `id`
route parameter has.

> Note: A `Classroom` record's `studentLimit` attribute is the limit that a
> classroom should have on its student numbers, but a classroom's actual number
> of students can be greater or less than the `studentLimit`. The actual number
> of students of a classroom should be calculated by examining how many
> `StudentClassroom` records are connecting that classroom to its students.

Set a property on the response data of `studentCount`. This will represent the
total number of students for that classroom.

### Result

Test the endpoint to make sure that the `studentCount` key is set correctly and
is displayed for a classroom specified by the `id` route parameter.

> You may have similar display issues as `supplyCount` that you may have to
solve in a similar way.

- The first classroom (`id` of `1`) has `27` students  
- The second classroom (`id` of `2`) has `22` students

## Phase 5C: Is classroom overloaded?

Compare the classroom's `studentLimit` with the classroom's total student count.

If the total student count is *greater than* the `studentLimit`, return a
property of `overloaded` to `true` in the body of the response. 

If the total student count is *less than* the `studentLimit`, set `overloaded`
to `false`.

### Result

Test the endpoint to make sure that the `overloaded` key is set correctly, and
is displayed for a classroom specified by the `id` route parameter.

> You may have similar display issues as `supplyCount` that you may have to
solve in a similar way.

- The first classroom (`id` of `1`) has `27` students but has a student limit of
`24`, so it is overloaded.
- The second classroom (`id` of `2`) has `22` students but has a student limit
of `24`, so it is NOT overloaded.

## OPTIONAL Phase 5D: Average Grade for Classroom

Find the average student grade of the classroom. 

The grade of each student in the classroom is stored as an attribute of `grade`
on the `StudentClassroom` that connects the `Classroom` and the `Student` (See
the database diagram for an overview of their relationships). The average
student grade of the classroom is the average of the `grade` attribute on all
`StudentClassroom`s that have a `classroomId` attribute matching the `id` of the
`Classroom`.

Find the average student grade of the classroom:  

- Make an aggregate query on the `StudentClassroom` and narrow down the query
results to a specific `classroomId`.   
  
- Set the value of the average grade for the specified classroom
as a property of `avgGrade` to the classroom returned as the response.

### Result

The response for a classroom with an `id` of `1` should look like this:

```json
{
   "id": 1,
   "name": "Mr. Tio",
   "studentLimit": 24,
   "supplyCount": 19,
   "studentCount": 27,
   "overloaded": true,
   "avgGrade": 2.814814814814815
}
```

[Sequelize Virtual Fields]: https://sequelize.org/master/manual/getters-setters-virtuals.html#virtual-fields
