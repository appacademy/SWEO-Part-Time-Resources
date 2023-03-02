# Week 23 Assessment Prep

12 questions, 9 to pass

46 min

## CORS - Cross-Origin Resource Sharing

Prevents requests from other domains (URLs). We only want specific domains to
have access to our database.

- Only the domains you explicitly allow can request data from your website
- Does not stop XSS or CSRF attacks by itself
- Must be enforced by the client being used
  - Some browsers support CORS, others do not
    - Chrome is a client that supports CORS
    - Postman is a client that does not support CORS

## XSS - Cross-Site Scripting

Injecting HTML or JavaScript to manipulate an application. This can include
creating malicious links on your site, or even sending requests from your site
to another server.

- XSS attacks opens up your site to CSRF attacks
- Turning user inputs into plain text is one small way to prevent XSS

## CSRF - Cross-Site Request Forgery

Tricking a user of your site into giving up private information. There are two
main examples of CSRF attacks, both using a fake malicious site.

1. Your site does not have CORS implemented. The fake site requests for the
   user's email and password, then makes a request to your site with that info. Now
   the bad guy has access to the user's account.

2. The fake site asks for information, but does NOT make a request to your site.
   Instead, the info is stored for the bad guy to use later. This cannot be stopped
   through CORS.

We won't focus on stopping the second example. The first example has already
been addressed by CORS. However, CORS can be easy to bypass, and some clients
don't even support CORS, so CSRF Tokens help ensure our site is still secure.

1. Create two CSRF tokens - one encrypted and one decrypted.
2. Add the decrypted CSRF token to a cookie.
3. Add the encrypted CSRF token in a cookie that is HTTP-only (cannot be used by
   JavaScript) and Same-Site only (cannot be used by another web application)
4. Frontend can read the decrypted CSRF token cookie and add it into the headers
   of any request made to the backend
5. Backend reads the headers of the request and matches the decrypted CSRF token
   in the headers to the encrypted CSRF token in the cookies

## JWT - JSON Web Tokens

A way to send information and verify it's integrity. JWTs have three parts, the
header, the payload, and the signature. A secret key is also required for a JWT
to work properly.

- Header describes the hashing algo the JWT is using
  - Header is encoded
- Payload holds the information we want to send
  - Payload is encoded
- Signature is the hash of the Header, Payload, and Secret Key
  - Signature is hashed

It's important to recognize the difference between encoding, encrypting, and
hashing

- Encoding: changing hard to read characters into readable characters

  - Anyone can easily encode and decode without a secret key

- Encryption: change information using a secret key to send data more securely

  - Anyone can decrypt a message if they have the secret key

- Hashing: a one way transformation of information using a secret key
  - A hash is irreversible, you will NEVER be able to retrieve the original
    information once hashed.
  - Hashing with the same input and secret key will **_always_** return the same
    output

JWTs are NOT meant to send secure information. The information is encoded, and
can be easily decoded back to it's original state. So passwords should NEVER be
transmitted using JWTs.

Instead, we use JWTs to verify the validity of a request. If it's been tampered
with, as in the body or header have changed, then the signature will not match.
If the source is a trusted resource (like your own site), then the signature
will match and be valid.
