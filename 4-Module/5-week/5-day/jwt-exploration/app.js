// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package
const jwt = require('jsonwebtoken')
// Your code here

// Define variables - DO NOT MODIFY
let token;
let payload;

// 1. Sign (create) a JWT containing your email address

// Your code here
token = jwt.sign(
    {email: 'myemail@appacademy.io'},
    process.env.SECRET_KEY,
    {expiresIn: '1s'}
)
// See the JWT in the console
console.log('JWT:', token);

// 2. Decode a JWT Payload
payload = jwt.decode(token)
// Your code here

// See the decoded payload in the console
console.log('Payload:', payload);

// 3. Verify a JWT
payload = jwt.verify(token, process.env.SECRET_KEY)
// Your code here

// See the verified payload in the console
console.log('Verified Payload:', payload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

// Your code here
const altKey = require('crypto').randomBytes(64).toString('hex')
try{
    jwt.verify(token, altKey)
} catch (e) {
    console.log(e.message)
}

// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

// Your code here
setTimeout(()=> {
    try{
        console.log(jwt.decode(token))
    } catch (e) {
        console.log(e)
    }
}, 1001)