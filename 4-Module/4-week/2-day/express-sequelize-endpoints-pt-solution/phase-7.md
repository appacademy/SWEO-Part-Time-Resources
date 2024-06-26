# Intermediate Phase 7: Fetching Related Records (Eager & Lazy Loading)

In this phase, you'll update a couple routes to return data containing both
`Trees` and `Insects`.

You can check your work as you work through this phase by running `npm test test/phase-07-spec.js` from the __server__ directory.

## Setup

Run the **Express** application:

```sh
npm run dev
```

Open the routes file where you'll need to make changes:
__server/routes/joined.js__.

Look at your notes or the [Sequelize Documentation][ref-docs] if you need a
refresher on Eager vs. Lazy Loading.

Make sure you are passing the specs for Phase 6 before attempting to do this
phase by running `npm test test/phase-06-spec.js`.

## Eager loading

Find the route for the path `/trees-insects`. Implement the eager loading
approach, to include the `insects` near each of the trees. Please return only
the `id` and `name` for each `Insect`, and order them alphabetically.

### Challenge 1: Only return trees that have insects near them

That means, the trees with `insects: []` would be omitted.

You can find information on the solution by going to the [Eager Loading
Documentation][eager-loading-docs].

> Hint: You may need to look through the first 4-5 sections, or so.

### Challenge 2: Prevent the relationship data from showing up in the output

You can find information on the solution by going to the documentation for
[Eager loading with Many-to-Many relationships][eager-many-to-many-docs].

### Result

If you complete both challenges, the response will look something like

```json
[{
    "id": 1,
    "tree": "General Sherman",
    "location": "Sequoia National Park",
    "heightFt": 274.9,
    "Insects": [{
        "id": 1,
        "name": "Western Pygmy Blue Butterfly"
    }]
}, {
    "id": 2,
    "tree": "General Grant",
    "location": "Kings Canyon National Park",
    "heightFt": 268.1,
    "Insects": [{
        "id": 1,
        "name": "Western Pygmy Blue Butterfly"
    }]
}, {
    "id": 4,
    "tree": "Lincoln",
    "location": "Sequoia National Park",
    "heightFt": 255.8,
    "Insects": [{
        "id": 1,
        "name": "Western Pygmy Blue Butterfly"
    }]
}, {
    "id": 5,
    "tree": "Stagg",
    "location": "Private Land",
    "heightFt": 243,
    "Insects": [{
        "id": 2,
        "name": "Patu Digua Spider"
    }, {
        "id": 1,
        "name": "Western Pygmy Blue Butterfly"
    }]
}]
```

## Lazy loading

Find the route for the path `/insects-trees`. Implement the lazy loading
approach, to include the `insects` near each of the trees. Please return only
the `id` and `tree` for each `Tree`, and order them alphabetically.

### Result

The response will look something like:

```json
[{
    "id": 2,
    "name": "Patu Digua Spider",
    "description": "Smaller than even the head of a pin",
    "trees": [{
        "id": 5,
        "tree": "Stagg"
    }]
}, {
    "id": 1,
    "name": "Western Pygmy Blue Butterfly",
    "description": "Copper brown and dull blue pattern at the bases of both wings",
    "trees": [{
        "id": 2,
        "tree": "General Grant"
    }, {
        "id": 1,
        "tree": "General Sherman"
    }, {
        "id": 4,
        "tree": "Lincoln"
    }, {
        "id": 5,
        "tree": "Stagg"
    }]
}]
```

Run  `npm test test/phase-07-spec.js` from the __server__ directory to check
that all mocha tests for this phase are passing.

_Run `npm test` from the __server__ directory to run all tests. Note that the
tests may not run in the same order as the project phases._

## Congratulations!

You have completed the core phases of this practice!

Several bonus phases have been provided for you to continue to deepen your
knowledge, and prepare for the project week. If you don't complete all the
bonus phases, now you can revisit them during assessment prep, or when you
are preparing your project work.

## Submission

Submit your work.

1. Delete the `node_modules` folder in the __server__ directory
2. Zip up the project folder
3. Submit the zip file

[ref-docs]: https://sequelize.org/master/manual/assocs.html#fetching-associations---eager-loading-vs-lazy-loading
[eager-loading-docs]: https://sequelize.org/master/manual/eager-loading.html
[eager-many-to-many-docs]: https://sequelize.org/master/manual/eager-loading.html#eager-loading-with-many-to-many-relationships
