# BONUS Practice: Aggregate Data in Sequelize

In this short practice, you will create a route handler that returns aggregate
data.

In this step, you will create your own route handler that will find all of the
aggregate values from the cat and toy data, so that it could eventually be used
to display the data on a dashboard.

Create the route handler following these specifications:

- The endpoint should be `GET /data-summary`

- When you visit the endpoint, you should see the following data displayed:

```json
{
    "totalNumberOfCats": 10003,
    "totalNumberOfToys": 10056,
    "toySummary": [  // includes ALL toys
        {
            "averagePriceOfAToy": 54.02366746221161,
            "totalPriceOfAllToys": 543262,
            "maximumToyPrice": 100,
            "minimumToyPrice": 1
        }
    ],
    "expensiveToySummary": [ // ONLY includes toys with a price greater than 55
        {
            "averagePriceOfAnExpensiveToy": 76.71381914676465
        }
    ]
}
```

Under "BONUS STEP" in the __app.js__ file, create the endpoint's route handler
and implement the queries needed to meet this spec.

There may be multiple ways to define each query! Consider using Sequelize's
built-in aggregation methods and SQL aggregate functions.

For the `expensiveToySummary`, make sure your aggregate value only includes toys
that have a price greater than `55`.

If you are having trouble formatting the results of each query to match
the JSON object in the spec, refer to the formatting of the `res.json()` in the
previous two steps.