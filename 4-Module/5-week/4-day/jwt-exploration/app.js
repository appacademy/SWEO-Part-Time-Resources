// configure environment - DO NOT MODIFY
require('dotenv').config();
const jwt = require('jsonwebtoken')

// Import package

// Your code here 

// Define variables - DO NOT MODIFY

// 1. Sign (create) a JWT containing your email address
let token; // DO NOT MODIFY! Re-assign the token variable below.
let secret = process.env.SECRET_KEY
// Your code here 
token = jwt.sign(
    { email: "johnny@gmail.com" }, // payload object
    secret,        // secret token from .env file
    { expiresIn: '1h' }            // options (example: Token expires in 1 hour)
);
// See the JWT in the console - DO NOT MODIFY
console.log('JWT:', token);

// 2. Decode a JWT Payload

let payload; // DO NOT MODIFY! Re-assign the payload variable below.

// Your code here
payload = jwt.decode(token)

// See the decoded payload in the console - DO NOT MODIFY
console.log('Payload:', payload);
console.log('first')
// 3. Verify a JWT

let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.

// Your code here 
verifiedPayload = jwt.verify(token, secret)

// See the verified payload in the console - DO NOT MODIFY
console.log('Verified Payload:', verifiedPayload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

// Your code here 

// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

// Your code here 
