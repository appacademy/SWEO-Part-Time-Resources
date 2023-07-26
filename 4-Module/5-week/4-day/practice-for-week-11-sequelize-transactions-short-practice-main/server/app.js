// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();

// Import the models used in these routes - DO NOT MODIFY
const { Account, sequelize } = require('./db/models');

// Express using json - DO NOT MODIFY
app.use(express.json());

// STEP 1: Unmanaged Transaction
app.get('/unmanaged', async (req, res, next) => {
    // Unmanaged transactions are first saved to a variable
    // Your code here
	// begin transaction -> BEGIN TRANSACTION;
	const t = await sequelize.transaction();
    try {
        // Queries to be performed in the transaction:
        // Find Rose's account, add 200 to her balance, then save
		const transaction_obj = {
			transaction: t
		}

        let rose = await Account.findOne({
            where: {
                firstName: 'Rose',
                lastName: 'Tyler'
            }
        }, transaction_obj);

        await rose.update({
            balance: rose.balance + 200
        },transaction_obj);

        await rose.save();

        // Find Martha's account, subtract 200 from her balance, then save
        let martha = await Account.findOne({
            where: {
                firstName: 'Martha',
                lastName: 'Jones'
            }
        }, transaction_obj);

        await martha.update({
            balance: martha.balance - 200
        },transaction_obj);

        await martha.save();

		await t.commit()
        // After the transaction, formulate the response
        // Find all accounts, ordered by firstName, returned as a JSON response
        let allAccounts = await Account.findAll({ order: [ ['firstName', 'ASC'] ] });
        res.json(allAccounts);

    } catch (error) {
        // If an error occurred, the transaction must be rolled back
        // Your code here
		await t.rollback()
        // The error is then passed to the error handler
        next(error);
    }

});


// BONUS: Managed Transaction

app.get('/managed', async (req, res, next) => {
    try {
        // Create a transaction with a callback function
        // If the function executes successfully, the transaction is committed

        const result = await sequelize.transaction(async (t) => {
			// Queries to be performed in the transaction:
			const transaction_obj = {
				transaction: t
			}

			// Find Rose's account, add 200 to her balance, then save
			let rose = await Account.findOne({
				where: {
					firstName: 'Rose',
					lastName: 'Tyler'
				}
			}, transaction_obj);
			await rose.update({
				balance: rose.balance + 200
			}, transaction_obj);
			await rose.save();

			// Find Amy's account, subtract 200 from her balance, then save
			let amy = await Account.findOne({
				where: {
					firstName: 'Amy',
					lastName: 'Pond'
				}
			}, transaction_obj);
			await amy.update({
				balance: amy.balance - 200
			}, transaction_obj);
			await amy.save();
		})
        // After the transaction, formulate the response
        // Find all accounts, ordered by firstName, returned as a JSON response
        let allAccounts = await Account.findAll({ order: [ ['firstName', 'ASC'] ] });
        res.json(allAccounts);
    } catch (error) {
        // If an error was thrown in the transaction, it will be rolled back
        // automatically
		
        // Pass any errors that occurred to an error handler
        next(error);
     }
});


// Current status of all accounts - DO NOT MODIFY
app.get('/accounts', async (req, res) => {
    // Find all accounts, ordered by firstName, as a JSON response
    let allAccounts = await Account.findAll({ order: [ ['firstName', 'ASC'] ] });
    res.json(allAccounts);
});


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Catch-all error-handling middleware - DO NOT MODIFY
app.use((err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode);
  res.json({
    message: err.message || 'Something went wrong',
    statusCode
  });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
