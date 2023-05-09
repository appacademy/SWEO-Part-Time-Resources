// HASHING PASSWORDS
  // As a developer, we should never store passwords as plain text.
  // As a user, we should never use the same password for different accounts.
  // RAINBOW TABLES - a table that store password/hash pairs under a specific algorithm
  // Salt - a random string of characters added to a plaintext password before hashing
  // salt2+password
  // salt3+password
    // 32+ characters long
    // can be added to the beginning, middle or end of the plaintext
    // added BEFORE the hashing
// PREVENT HASHED PASSWORD LEAKS
  // The only time we want to get a hashedPassword from the db is when logging a person in
    // non-default scope that only retrieves the hashedPassword
    // even though we use the password, it shouldn't be returned to the CLIENT
  // The other scopes and defaultScope should exclude the hashedPassword
// BCRYPT
  // sign up user
  // npm install bcryptjs
  const bcrypt = require('bcryptjs');
  const hashed = bcrypt.hashSync(plainTextPassword, 32)
  // default salt length of ten

  // log in user
  let hashedPassword = '';
  if (bcrypt.compareSync(plainTextPassword, hashedPassword)) {
    // log in user in
  } else {
    // prompt user to try again
  }
// KANBAN