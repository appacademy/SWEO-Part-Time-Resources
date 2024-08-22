## [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - Cross-Origin Resource Sharing

- Good quick YouTube Vid on CORS: https://www.youtube.com/watch?v=4KHiSt0oLJ0

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
- [XSS Attack Protection Reference Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

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
