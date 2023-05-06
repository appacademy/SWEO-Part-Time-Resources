//* JWT - JSON Web Token
/*
  Encoding: Changes the data into unreadable characters, can be decoded by anyone.
  Encrypting: Changes the data into characters only readable with a Private Key.
  Hashing: One way encryption that cannot be decoded.

  Header : Describes the hashing algorithm as well as the type of token.
  {
    "alg": "HS256", // HMAC + SHA256
    "typ": "JWT"
  }
  Payload : The contents of the token
  {
    "email":"teaspoon@cashmoney.com",
    "message":"You're invited!"
  }

  ** Header and Payload are only base64 encoded, so don't store private info here
  Signature : A hash of the header + payload + secret_key
*/

let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlYVNwb29uQGNhc2gtbW9uZXkuY29tIn0.GyR3AiayAfE1edGEoRqiDzwKOa32cgxwra-9Zpn68Nw";
let jwtArr = jwt.split('.');
const [header, payload, signature] = jwtArr;

const decodeHeader = Buffer.from(header, 'base64').toString();
const decodePayload = Buffer.from(payload, 'base64').toString();
console.log(decodeHeader);
console.log(decodePayload);
// const decodeSignature = Buffer.from(signature, 'base64').toString();
// console.log(decodeSignature);

const encodeHeader = Buffer.from(decodeHeader).toString('base64');
const encodePayload = Buffer.from(decodePayload).toString('base64');

const newSignature = require('crypto')
  .createHmac("sha256", "iL0v3ca75")
  .update(encodeHeader + '.' + encodePayload.slice(0, encodePayload.length - 2))
  .digest('base64');
console.log(encodeHeader, encodePayload)
console.log(newSignature);
console.log(`${encodeHeader}.${encodePayload}.${newSignature}`)
//* Roles and Permissions
/*
Permissions : Authorization for a specific user to execute a specific action on the server
  - Photographers can create photos, view any photos, edit any photo, delete any photo
  - Customers can view a photo they have purchased
Roles : A set of Permissions granted to a set of Users
  - Admins can create photos, view any photos, edit any photo, delete any photo
  - Customers can view a photo they have purchased
  - Guest can view sample photos in the gallery
*/
if (user.isAdmin) {
  // modifies a photo
} else {
  // throw error
}
/*
class Book extends Model {}
Book.init({ 
    // Define attributes here
    }, {
    defaultScope: { // Default scope: Books that are not checked out
        where: {
            isCheckedOut: false 
        }, 
        attributes: { // included attributes, all others are excluded
            include: [ "title", "author", "isCheckedOut", "location" ] 
        }
    },
    scopes: {
        atLibrary(libraryId) { // Scope: Books in specified library
            const { Library } = require('../models');
            return {
                where: { // filter results to be only from the specified library
                    libraryId
                }, 
                include: [ // include associated library details in query results
                    { model: Library } 
                ]
            }
        },
        atOtherLibrary(libraryId) { // Scope: Books NOT in specified library
            const { Library } = require('../models');
            return {
                where: { // filter results to NOT be from the specified library
                    libraryId: {
                        [Op.ne]: libraryId
                    }
                }, 
                include: [ // include associated library details in query results
                    { model: Library } 
                ]
            }
        },
        checkedOut: { // Scope: Books that are checked out
            where: {
                isCheckedOut: true  
            }
        }
    }
  }
});
*/
let books;
books = await Book.scope("checkedOut").findAll(); //get named scope
books = await Book.scope({ method: ["atLibrary", req.params.libraryId] }).findAll(); //get function scope
books = await Book.scope(["defaultScope", { method: ["atLibrary", req.params.libraryId] }]).findAll(); //get multiple scopes
//* Transactions
/*
To determin if a Transaction was successful we use ACID
Atomicity   : All operations within a transaction have succeeded
Consistency : The database successfully changes state upon commiting the transaction.
Isolation : A transaction is independent of other transactions, only dependant on it's own operations.
Durability: The result of a commited transaction persists in the case of a failure.

year | color
1980 | red
2000 | red
2010 | black
1970 | black
1975 | white
1965 | white

SQL TRANSACTIONS
BEGIN TRANSACTION transaction_name;
  SET TRANSACTION READ ONLY;
  SET TRANSACTION WRITE ONLY;
  DELETE FROM Cars
    WHERE year >= 1980;
  SAVEPOINT classics;
  DELETE FROM Cars
    WHERE color != "red";
  SAVEPOINT red;
  ROLLBACK TO classics;
  DELETE FROM Cars
    WHERE color != 'black';
  RELEASE SAVEPOINT red;
COMMIT;
  
Sequelize
*/
// UnManaged
const trans = sequelize.transaction();
try {
  // const car = await Car.create({}, {transaction: trans});
  const car = await Car.create({color: 'blue', year: '1969'}, {transaction: trans});
  await trans.commit();
} catch (e) {
  await trans.rollback();
}
// Managed
try {
  const result = await sequelize.transaction(async(trans) => {
    const car = await Car.create({}, {transaction: trans});
    return car;
  })
} catch (e) {
  console.log('Transaction Failed')
}
