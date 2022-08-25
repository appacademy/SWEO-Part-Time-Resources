# Intermediate Bonus Phase 1 - Select WHERE Like

In this bonus phase, you'll implement a WHERE clause to allow users to search
by the `tree` names.

## Congratulations

Finishing all 6 phases means you've successfully completed the core elements of
this project. Congratulations! Now, you may continue with this bonus phase, as
you have time. Or you can revisit this phase during the assessment prep.

## Step A: Import `Op`

Near the top of the file (before the route handlers), you will want to require
the `Op` package, to perform comparison operations in `WHERE` clauses.

## Step B: Search query

In __server/routes/trees.js__, find the route with the path `/search/:value`.

Add some **Sequelize** code to find all trees which are `like` the request
parameter `value`. This value can be anywhere in the `tree` property.

Return 3 attributes: `heightFt`, `tree`, `id`

Order alphabetically by the `tree` property.

## Verify your work

Using your browser or **Postman**, search for "General":
[http://localhost:5000/trees/search/General][tree-search].

Try other searches as well, include letters that are at the end of the `tree`
property or somewhere in the middle.

Also remember to try a combination that is not found in the database.


[tree-search]: http://localhost:5000/trees/search/General
