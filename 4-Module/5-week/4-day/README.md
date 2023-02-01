# Mod 4 Week 5 Day 4

## What Is XSS?
### XSS stands for Cross Site Scripting, which refers to the injection and execution of JavaScript into the HTML of an application. These scripts can perform anything available within browser JavaScript, which can include manipulating HTML, or making HTTP requests to leak sensitive information to another server. Anything you can do as a frontend developer with JavaScript, these scripts can do too.

- Some ways XSS can be abused for malicious cases include:

- Injecting an HTML form to coax users for credit card or social security numbers
- Injecting a script to send all localStorage information to a malicious party's application
- Injecting a hyperlink to direct users to a malicious website

## How do XSS attacks happen?
- XSS attacks may occur when any type of untrusted data gets rendered in the HTML.

- For example, AirBnB will post information about user-written titles and descriptions about locations for rent. If a malicious party writes a script to inject HTML into those descriptions or titles, an unsuspecting user can end up viewing the manipulated content that the malicious party set.

- Depending on what the malicious party does to the title and description, the severity of the damage done to AirBnB or the user can vary.

## Preventing XSS attacks
- The source of XSS attacks comes from untrusted data. However, encoding and/or validating all points where untrusted data may find its way into your application is complicated.

- Here at App Academy, you won't be asked to implement any security measures against XSS attacks from scratch. Down the line, you will use third-party libraries to perform security checks for you, but until then you should be aware that your applications will be vulnerable to XSS attacks.

# Short Solo Practice 30 min [XSS Attack](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-23---project-planning--security--authentication/xss-practice)
- Short practice Q/A

## CSRF Attack
- One of the most common and dangerous cyber attacks is a Cross-Site Request Forgery (CSRF). A CSRF is an attack that tricks the logged-in user into performing malicious actions or exposing personal information to the attacker. It inherits the identity of the user to perform functions on the user's behalf. These attacks target stage changes on the server. This allows the attacker to obtain private data and force a non-authenticated user to log into an account the attacker controls. Once this account is compromised, personal data can be viewed along with the user's activity history on the web application. This breach in security can cause irreparable damage to an application causing a major loss to its users.

### [CSRF Docs](https://owasp.org/www-community/attacks/csrf)

## Securing your Application Against CSRF Attacks

### You will only focus on securing your application against the first example of a CSRF attack, not the second.

### Steps to prevent CSRF attacks:

- Create two CSRF tokens - one encrypted and one decrypted.
- Add the decrypted CSRF token to a cookie.
- Add the encrypted CSRF token in a cookie that is HTTP-only (cannot be used by JavaScript) and Same-Site only (cannot be used by another web application)
- Frontend can read the decrypted CSRF token cookie and add it into the headers of any request made to the backend
- Backend reads the headers of the request and matches the decrypted CSRF token in the headers to the encrypted CSRF token in the cookies

# Short Solo Practice 30 min [CSRF Practice](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-23---project-planning--security--authentication/csrf-practice)
- Short practice Q/A

# [Week 23 Day 4 Roadmap](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-23---project-planning--security--authentication/roadmap)


- Add image of your proposed database schema in the README.md file, commit, then push to GitHub
- Add all tasks to your GitHub KanBan project board
- API Documentation should be reviewed by your Project Advisor
- Database Schema should be reviewed by your Project Advisor

# EOD
