# M4-W5-D3

## Intro to Web Application Security

### Why is Security Important for Web Applications?

1. User privacy protection
2. You don't want to get sued.

Most web security is handled by dedicated cyber security professional. As
junior web developers it is important that you understand what the threats
are and the best practices for protecting against them, even if it will not be
your primary role in the work force.

### Common Threats

1. SQL Injections
2. Cross-site Scripting (XSS)
3. Remote File Inclusion
4. Cross-site Request Forgery (CSRF)

---

## CORS

A HTTP header option which allows a server to allow only a specified list of
origins (domains, schemes, ports) aside from itself that are allowed to make
requests.

This works by the browser sending a 'pre-flight' request to the server where it
checks to see if the server will allow it to send the request. If it receives
approval from the server it will then send the full request.

CORS failures result in errors but for security reasons, specifics about the
error are not available to JavaScript. All the code knows is that an error
occurred. The only way to determine what specifically went wrong is to look at
the browser's console for details. This can prevent bad actors from being able
to pinpoint how best to continue their attack on the system by not giving them
any extra information.

Remember, if the browser is not CORS compliant, the CORS policies you defined
won't be enforced. ([browser compatibility list](https://caniuse.com/?search=CORS))

TLDR: CORS exists to make sure that requests to your server are coming from
valid sources and preventing any other requests with a security error.
