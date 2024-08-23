# JWTs

JWT === JSON Web Token

## Background

- **Encoding** - used to transmit information by changing characters that certain systems find hard to read into readable characters. Information can be easily encoded, and reversed, by anyone, without a private or secret key.
- **Encryption** - used to transmit information while making that information readable only to those who have the private key. A private key is required to convert the information before transmission, and then that key is needed to decode the transmitted information. With encryption, the process can be reversed to expose the original information.
- **Hashing** - is another way to transmit information, but with hashing, the process cannot be reversed to gain access to the original information. Because of this, this is the most secure way to transmit information, because it can never be reversed.

## JWT Components

A typical JWT has 3 parts, separated by a period.

```js
const myJWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5ueUBnbWFpbC5jb20ifQ.SkuHIxgU1sDTrNKTTUIu9yDohUu8h0_4mbHiOMaUKwA";
```

### Header

- The header describes the hashing algorithm that the JWT uses, as well as the type of token.
- This then gets base64 encoded -> meaning this is not secure, anyone can decode

```js
// pre-encoding
{
  "alg": "HS256", // the specific hashing algorithm used
  "typ": "JWT"    // the type of token
}

// post-encoding
const header = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
```

### Payload

- The payload is the actual data being stored in the token
- Like the header, this is base64 encoded

```js
// pre-encoding
{
"email": "greg@aa.io"
}

// post-encoding
const payload = "eyJlbWFpbCI6ImdyZWdAYWEuaW8ifQ"
```

### Signature

- The signature is a hash of the header + the payload + a secret key. It is usually hashed using the HS256 hashing algorithm.

```js
const signature = HMACSHA256(header + payload + "my_secret_key");
```

## JWTs in Practice

- It's important that your secret key/token is not easily guessable.
  - We can generate a random secret string using the `crypto` library
  - Once generated, we should store this in an `.env` file
    - **.env files should NEVER be pushed to github** - put in your `.gitignore` file
    - In your deployed (production) environment, you will have to remember to set a SECRET_KEY environmental variable via Render's dashboard

```js
const crypto = require("crypto");
const secret = crypto.randomBytes(64).toString("hex");
// "dc1783e61ab05a9fa1b64d892f4b8edab51c159c7091d57feb955ad5ae8ce9191dbe3a50f95086a018654e6f3c7dbffd6215d656d63a2da811843fc746a664b2"

// .env file
SECRET_KEY =
  dc1783e61ab05a9fa1b64d892f4b8edab51c159c7091d57feb955ad5ae8ce9191dbe3a50f95086a018654e6f3c7dbffd6215d656d63a2da811843fc746a664b2;
```

- The `jsonwebtoken` package will allow us to easily create and verify JWTs

```js
const jwt = require("jsonwebtoken");

// Creating a JWT
const token = jwt.sign(
  { email: "johnny@gmail.com" }, // payload object
  process.env.SECRET_KEY, // secret token from .env file
  { expiresIn: "1h" } // options (example: Token expires in 1 hour)
);

// Decoding a JWT's payload
const payload = jwt.decode(token);
// returns the decoded payload: {"email":"johnny@gmail.com"}

// Verifying a JWT
const payload = jwt.verify(token, secret);
// if the secret is verified, the payload is decoded and returned
// if the secret is not valid, a JsonWebTokenError is thrown
// if the token is expired, a TokenExpiredError is thrown
```
