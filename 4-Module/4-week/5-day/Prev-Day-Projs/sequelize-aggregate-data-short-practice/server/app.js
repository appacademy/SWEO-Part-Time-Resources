// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();
require('express-async-errors');


// Import the models used in these routes - DO NOT MODIFY
const { Cat, Toy, sequelize } = require('./db/models');
const { Op } = require("sequelize");


// Express using json - DO NOT MODIFY
app.use(express.json());




// STEP 1: Load the toys and find the count, min price, max price, and sum
app.get('/toys', async (req, res, next) => {

    // A. Create an `allToys` variable that returns all toys
    //!!START
    const allToys = await Toy.findAll();
    //!!END

    // B. Create a `toysCount` variable that returns the total number of toy
    // records
    //!!START
    const toysCount = await Toy.count();
    //!!END    
    
    // C. Create a `toysMinPrice` variable that returns the minimum price of all
    // the toys
    //!!START
    const toysMinPrice = await Toy.min('price');
    //!!END
    
    // D. Create a `toysMaxPrice` variable that returns the maximum price of all
    // the toys
    //!!START
    const toysMaxPrice = await Toy.max('price');
    //!!END   

    // E. Create a `toysSumPrice` variable that returns the sum of all of
    // the toy prices.
    //!!START
    const toysSumPrice = await Toy.sum('price');
    //!!END

    res.json({
        toysCount,
        toysMinPrice,
        toysMaxPrice,
        toysSumPrice,
        allToys
    });
});




// STEP 2a: Find a cat with their associated toys, and aggregate toy data
app.get('/cats/:id/toys', async (req, res, next) => {

    const catToysAggregateData = await Cat.findByPk(req.params.id, {
        include: {
            model: Toy,
            attributes: []
        },
        attributes: [
            // Count all of this cat's toys, and display the value with a
            // key of `toyCount`
            //!!START
            [sequelize.fn('COUNT', sequelize.col('price')), 
            'toyCount'],
            //!!END

            // Find the average price of this cat's toys, and display the
            // value with a key of `averageToyPrice`
            //!!START
            [sequelize.fn('AVG', sequelize.col('price')), 
            'averageToyPrice'],
            //!!END

            // Find the total price of this cat's toys, and display the
            // value with a key of `totalToyPrice`
            //!!START
            [sequelize.fn('TOTAL', sequelize.col('price')),
            'totalToyPrice'],
            //!!END
        ],
        raw: true
    });

    const cat = await Cat.findByPk(req.params.id, {
        include: { model: Toy }
    });
    

    // STEP 2b: Format the cat object to add the aggregate keys and values to it

    // Define a new variable, `catData`, and set it equal to the `cat` variable converted to JSON 
    //!!START
    const catData = cat.toJSON();
    //!!END

    // Add the `toyCount`, `averageToyPrice`, and `totalToyPrice` keys to the
    // catData object, with their aggregate values from `catToysAggregateData`
    //!!START
    catData.toyCount = catToysAggregateData.toyCount;
    catData.averageToyPrice = catToysAggregateData.averageToyPrice;
    catData.totalToyPrice = catToysAggregateData.totalToyPrice;
    //!!END


    // After the steps above are complete, refactor the line below to only
    // display `catData`
    //!!ADD
    // res.json({ catToysAggregateData, cat });
    //!!END_ADD
    //!!START SILENT
    res.json(catData);
    //!!END
})



// BONUS STEP: Create an endpoint for GET /data-summary that includes a summary
// of all the aggregate data according to spec
//!!START
app.get('/data-summary', async (req, res, next) => {

    const totalNumberOfCats = await Cat.count();

    const totalNumberOfToys = await Toy.count();

    const toySummary = await Toy.findAll({
        attributes: [
            [
                sequelize.fn('AVG', sequelize.col('price')), 
                'averagePriceOfAToy'
            ],

            [
                sequelize.fn('TOTAL', sequelize.col('price')), 
                'totalPriceOfAllToys'
            ],

            [
                sequelize.fn('MAX', sequelize.col('price')), 
                'maximumToyPrice'
            ],

            [
                sequelize.fn('MIN', sequelize.col('price')), 
                'minimumToyPrice'
            ],
        ]
    });

    const expensiveToySummary = await Toy.findAll({
        where: {
            price: { [Op.gt]: 55 }
        },
        attributes: [
            [
                sequelize.fn('AVG', sequelize.col('price')), 
                'averagePriceOfAnExpensiveToy'
            ],
        ]
    });

    res.json({
        totalNumberOfCats,
        totalNumberOfToys,
        toySummary,
        expensiveToySummary
    });
});
//!!END



// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
