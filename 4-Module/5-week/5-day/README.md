# JSON Web Tokens aka JWT aka "jots"

- Primarily used to validate information as "authentic"
- Contain 3 different parts, a header, a payload and a signature.
- NEVER NEVER NEVER put sensitive data inside of a JWT, the data being transmited is ENCODED, which means a simple google search for a decoder or going to jwt.io is all somebody needs to do to gain access to the information stored inside of the token.
- We will be using JWTs to maintain a user session, this way the user won't have to login each time to our web app as long as they have a valid JWT.


## Headers (ENCODED!!)

- Contains information about the JWT, such as the hashing algorithim used in the signature and the type of token you are using (there are a couple of other tokens JWTs use but these are not covered or necessary for our purposes).

## Payload (ENCODED!!)

- Contains the data that you are submitting to the server.
- Remember, never store sensitive data like user credentials, this information is not secure.

## Signature (HASHED)

- You generate a signature by putting your header, payload and a secret key into a hashing algorithm. The returned value of your hashing algorithm will be the signature.
- Because of how hashing works, the signature can only be reproduced with the exact same input into the hashing function, if you provide the header and payload, but an incorrect secret key, then the returned hash will be COMPLETELY different and this is how we can validate legitmate JWT signatures.
