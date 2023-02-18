# Intermediate Phase 6: Dynamic Seeding

In this phase, you will generate seed data for the insects seen at each tree.

The scientists say that the __Western Pygmy Blue Butterfly__ was seen at the 
biggest trees EXCEPT __President__, and the __Patu Digua Spider__ was only found 
near __Stagg__, so far.

For additional practice, you can pretend to be a scientist and decide 
which other insects were found near which trees.

## Create seeder

Run the **Sequelize CLI** command to create a new seeder named
`starter-insect-tree`.

Open the seeder file for editing.

## Build seed data

Since you want to make sure you are referencing the correct records by content
(NOT hard-coded `ids`), you will need to dynamically seed the `InsectTree`
JOIN table by first querying references to the `Insects` and `Trees` tables.

Follow the standard steps for dynamic seed data:

* Create a constant to hold the provided seed data:

```js
[
  {
    insect: { name: "Western Pygmy Blue Butterfly" },
    trees: [
      { tree: "General Sherman" },
      { tree: "General Grant" },
      { tree: "Lincoln" },
      { tree: "Stagg" },
    ],
  },
  {
    insect: { name: "Patu Digua Spider" },
    trees: [
      { tree: "Stagg" },
    ],
  },
]
```

* Modify the `up` function to insert the seed data.
* Modify the `down` function to remove the seed data.
* Use the **Sequelize CLI** to run the seeder.
* Verify the `InsectTrees` records exist using the **Sqlite CLI**.

> Tip: Code and verify incrementally:
> * Start with a subset of the seed data in the constant, run the seeder,
    > and verify it worked.
> * Then undo the seed, add more data, and rerun the seeder. Verify again.
> * Repeat until all seed data is working. :)
>
> Fewer lines of code leaves less room for typos or errors, and speeds up
> debugging since you can focus just a few changes since it the last working
> version.

If you get stuck on a particular item, comment it out and move on. You can come
back to it later in this practice, or during assessment prep.

If you have an error you can't solve after reasonable debugging and research,
formulate a good question, and reach out to your instructors.
