## Cross-Origin Resource Sharing (CORS)

### What is CORS?

CORS is a security feature implemented by browsers to prevent malicious websites from making unauthorized requests to different domains. It is a mechanism that allows a web page to request resources from a different domain, outside the domain from which the first resource was served.

### Why is CORS needed?

Without CORS, a web page hosted on domain A cannot request resources (like images, scripts, or data) from domain B due to the Same-Origin Policy (SOP). SOP is a security measure that restricts how a document or script loaded from one origin can interact with resources from another origin.

### How does CORS work?

CORS adds HTTP headers to responses to indicate whether the requesting domain is allowed to access the resources. Here's a basic flow:

1. **Preflight Request**: For certain types of requests (like those with custom headers or methods other than GET, POST, or HEAD), the browser sends an HTTP OPTIONS request to the server hosting the resource. This is called a preflight request.
2. **Server Response**: The server responds with headers indicating whether the actual request is allowed.
3. **Actual Request**: If the preflight request is approved, the browser sends the actual request.

### CORS Headers

This is more for traditional http servers where we aren't using a framework which good knews for you we are, but a good tidbit to know 😊

- **Access-Control-Allow-Origin**: Specifies which origins can access the resource.
- **Access-Control-Allow-Methods**: Indicates the allowed HTTP methods (e.g., GET, POST).
- **Access-Control-Allow-Headers**: Specifies which headers can be used in the actual request.
- **Access-Control-Allow-Credentials**: Indicates whether credentials (cookies, HTTP authentication) can be included in the request.


## Cross-Site Scripting (XSS)

### What is XSS?

XSS is a type of security vulnerability found in web applications where an attacker injects malicious scripts into content from otherwise trusted websites. These scripts can be used to steal cookies, session tokens, or other sensitive information, manipulate the content displayed to the user, or perform actions on behalf of the user.

### Types of XSS

- **Stored XSS**: The malicious script is permanently stored on the target server, such as in a database, comment field, or forum post. When the victim views the stored content, the script is executed.
- **Reflected XSS**: The malicious script is reflected off a web server, such as in an error message or search result. It is delivered to users via a link, often tricking them into clicking on it.
- **DOM-based XSS**: The vulnerability exists in the client-side code rather than server-side. The malicious script is executed as a result of modifying the DOM environment in the victim's browser.

### How XSS Works

1. **Injection**: The attacker injects malicious code into a web application. This could be through input fields, URL parameters, or other entry points.
2. **Execution**: The injected script is executed in the context of the user's browser, often without their knowledge.
3. **Exploitation**: The script can steal data, manipulate the DOM, or perform actions on behalf of the user.

### Preventing XSS

1. **Input Validation**: Ensure that all user input is validated and sanitized before processing.
2. **Output Encoding**: Encode output data to prevent the browser from interpreting it as executable code.
3. **Use Security Headers**: Implement HTTP security headers such as ???
4. **Use Frameworks**: Use web development frameworks that provide built-in protection against XSS.