# Practice: Use `jsonwebtoken` to Manage JWTs

When you use JWTs in your user authorization flow, it is best practice to use
Node packages to generate your secret token and take care of encoding and
decoding, and hashing and verification for you.

## Prepare

Begin by downloading the starter and running `npm install`.

## Generate a Secret Token with `crypto`

The first thing you will need when implementing JWTs is to generate a strong
secret, or private token. It is important that this secret token is not easily
guessable by a human or a computer running an algorithm trying to uncover
secrets by brute force.

Use the `crypto` cryptographic library to generate a random secret by executing
the following command in your **node** terminal:

```shell
require('crypto').randomBytes(64).toString('hex')

# Example output: "dc1783e61ab05a9fa1b64d892f4b8edab51c159c7091d57feb955ad5ae8ce9191dbe3a50f95086a018654e6f3c7dbffd6215d656d63a2da811843fc746a664b2"
```

Store this token in your __.env__ file with your environment variables. Make
sure this file is added to your __.gitignore__ file, and never pushed to a
public repository.

```bash
SECRET_KEY=dc1783e61ab05a9fa1b64d892f4b8edab51c159c7091d57feb955ad5ae8ce9191dbe3a50f95086a018654e6f3c7dbffd6215d656d63a2da811843fc746a664b2
```

## Use `jsonwebtoken` to Manage JWTs

The [`jsonwebtoken`] package helps you to manage JWTs by allowing you to easily
sign, decode, and verify JWTs.

First, install the package via the terminal:

```shell
npm install jsonwebtoken
```

And import the package into your file:

```javascript
const jwt = require('jsonwebtoken');
```

Next, use the notes below as well as the [`jsonwebtoken`] documentation to
sign, decode, and verify JWTs in your application.

### 1. Sign (create) a JWT

Use the `sign()` function to create a JWT with a required payload and the secret
you generated using `crypto`. This method can take an optional `options`
argument, which is an object with additional properties and values to define the
JWT. The header will be defined by default, but can also be customized by
defining the `header` property in the `options` object.

```javascript
const jwt = require('jsonwebtoken');
const token = jwt.sign(payload, secret, options);
```

For example, if you wanted to create a token for Johnny's invite for the party,
your implementation might look like this:

```javascript
const jwt = require('jsonwebtoken');

const token = jwt.sign( 
    { email: "johnny@gmail.com" }, // payload object
    process.env.SECRET_KEY,        // secret token from .env file
    { expiresIn: '1h' }            // options (example: Token expires in 1 hour)
);
```
Check out the [`jsonwebtoken`] documentation to learn more about how you can
customize your token using the `options` object.

### 2. Decode a JWT Payload

To decode a token, use the `decode()` function. This will decode the payload of
the JWT and return it.

Continuing the example from above, with `token` representing the signed
(created) JWT:

```javascript
const jwt = require('jsonwebtoken');

const payload = jwt.decode(token); 
// returns the decoded payload: {"email":"johnny@gmail.com"}
```

### 3. Verify a JWT

Finally, the `jsonwebtoken` package will allow you to verify that the payload
information has not been tampered with during transmission by verifying the
signature. Verification involves decrypting the signature, and checking to make
sure that the secret is correct. If the secret is valid, the payload will be
decoded and returned. If the secret is not valid, an error will be thrown.

To verify the signature, use the `verify()` function with two arguments. The
token is the JWT itself, and the secret is the secret key stored in the __.env__
file.

Continuing the example from above, with `token` representing the signed JWT:

```javascript
const jwt = require('jsonwebtoken');

const payload = jwt.verify(token, secret);
// if the secret is verified, the payload is decoded and returned
// if the secret is not valid, a JsonWebTokenError is thrown
// if the token is expired, a TokenExpiredError is thrown
```

When using the JWT for user authorization, you will need to determine how you
will handle successful and unsuccessful verification.

# Wrapping Up

Remember these best practices for working with JWTs in NodeJS:

* Use the `crypto` module to generate a secret token for your JWTs, and store it 
securely in your __.env__ file
* Use the `jsonwebtoken` package to manage signing and verifying JWTs in your
application
  * Use `jwt.encode()` for encoding
  * Use `jwt.verify()` for decoding because it will detect errors
    * If the secret doesn't match (meaning the JWT has been tampered with)
    * If the JWT has expired (meaning it should no longer be used)

When transmitting information with a JWT, always remember that the signature is
the only section that is hashed. The payload is only encoded, and can easily
be decoded by anyone if they have access to it. For that reason, sensitive
information should never be transmitted in a JWT.

[`jsonwebtoken`]: https://www.npmjs.com/package/jsonwebtoken