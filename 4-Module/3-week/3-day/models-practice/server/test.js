const { removeTestDB, runMigrations } = require('./testUtils');
const { Color } = require('./db/models');


(async () => {
  // Delete database if it exists and recreate by running migrations
  await removeTestDB();
  await runMigrations();


  // Expected validation output:
  // Color.name cannot be null
  console.log('First Test - null value for name:')
  try {
    await Color.create({})
    console.log('Result: Invalid Data Allowed in DB (check your validations)\n')
  } catch (err) {
    err.errors.forEach(err => {
      console.error(err.message)
    })
    console.log('Result: Successfully Blocked Invalid Data\n')
  }
  
  
  // Expected output:
  // name cannot be an array or an object
  console.log('Second Test - non-string value for name:')
  try {
    await Color.create({name: []})
    console.log('Result: Invalid Data Allowed in DB (check your validations)\n')
  } catch (err) {
    err.errors.forEach(err => {
      console.error(err.message)
    })
    console.log('Result: Successfully Blocked Invalid Data\n')
  }


  // Expected output:
  // Test: successfully added
  console.log('Third Test - valid name:')
  try {
    await Color.create({name: 'orange'})
    console.log('Result: Successfully Allowed Valid Data\n')
  } catch (err) {
    err.errors.forEach(err => {
      console.error(err.message)
    })
    console.log('Result: Blocked Valid Data (check your validations)\n')
  }


  // Clean up by removing test database
  await removeTestDB();
})();