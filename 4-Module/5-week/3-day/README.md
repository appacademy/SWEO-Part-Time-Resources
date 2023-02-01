# Mod 4 Week 5 Day 3

## What Is CORS?
- CORS stands for Cross-Origin Resource Sharing. It allows servers to indicate valid sources (origins) from which resources may be loaded on the browser. In other words, only specific domains may make requests from the browser to the server.

### [CORS MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## How Does CORS Work?
- A preflight request is made to the server BEFORE the actual request to determine whether or not the actual request is safe to send or not. This request will include the Origin header.

- The server sends back a response to the preflight request which includes a Access-Control-Allow-Origin header. If the response's Access-Control-Allow-Origin header's pattern matches the value of the preflight request's Origin header, the browser will make the actual request.

- If it does not match, the browser will block the request and thus NOT send the actual request. Keep in mind this only happens if the browser supports CORS.



# Short Solo Practice 40 min [CORS Practice](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-23---project-planning--security--authentication/cors-practice)
- Short practice Q/A

# [Week 23 Day 2 Roadmap](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-23---project-planning--security--authentication/roadmap)

- Choose a project from the given list of available projects
- Project Advisor will approve the chosen - project
- Create a GitHub repository for your project
- Create a GitHub KanBan project board on the GitHub repository for the backend
- Add your Project Advisor as an admin to the backend repository
- Create a folder called backend at the root directory of the GitHub repository
- Copy API Documentation for chosen project in the README.md file in the backend folder, commit, then push to GitHub

# EOD
