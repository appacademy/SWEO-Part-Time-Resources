// HASHING PASSWORDS
  // As a user, we shouldn't use the same password for multiple account
  // As a developer, we shouldn't store passwords as plain-text

  // RAINBOW TABLE - a table of plain-text passwords and thier associated hashes based on a specific algorithm
  // Can be used to compromise any users with the found passwords

  /*
  let salt = generateRandomString();
  let salted = salt+plainText
  let hashed = hashingFunction(salted);
  */

  // salt - a random string of characters added to the plain-text password before hashing
    // can be added to the beginning, middle, or end
// BCRYPT
  // - Only time we should get the hash from the db is when a user is logging in. Use a non-default scope that will only return the hash.
  // - Default Scope that doesn't return the hash from the db.

  /*
    npm install bcryptjs
  */
  const bcrypt = require('bcryptjs');

  // sign up route
  const hashedPassword = bcrypt.hashSync(plainText, 32);
  // second argument is default 10 character random salt
    // Or you can provide a length or salt

  // log in route
  const pullHash = await User.scope('passwordOnly').findByPk(req.params.id);
  if ( bcrypt.compareSync(plainText, pullHash) ) {
    // user logs in
  } else {
    // prompt second attempt
  }
// KANBAN