# M3-W3-D1

## Assessment

Time: 1h

- MC: 6 points
- Coding: 4 problems, 8 points
- Total: 14 point
- Passing: 11

---

## Week 15 Overview

- Servers using builtin http library with Node
- HTTP (HyperText Transfer Protocol)
- THe Request-Response Cycle
- REST Convention
- Working with Form Submissions
- Serving Static Assets
- JSON

I will be giving extra time for the reading today due to there being a lot of
technical jargon thrown into the mix. Take your time to read them slowly,
internalize the vocabulary, and think of any questions you might have!



### What is a Server?

A server is a program that runs on a computer somewhere.

It's purpose is to run continously and to listen to a location on the network
for client requests.

Once it recieves and processes a request it sends back data as a response.

Examples:

- Navigating to google.com
- Liking a post on twitter
- Adding an item to an amazon shopping cart
- Viewing an amazon shopping cart



### Quiz Walkthrough

### HTTP

**HyperText:** Content with references to other content.

(HT)ML, HyperText Markup Language allows us to send content over the internet
and allow that content to reference everything else. CSS pages, JS pages,
images, ect are all included by reference in our HTML. Content that references
other content.

**Transfer Protocol:** The specifications for sending the hypertext from point a
to point b.

The transfer protocol defines the rules of what format a client request and
server response should
take, what should and should not be included, how it could fail, ect.

### Properties of HTTP

**Reliability:**: There are two main protocols that allow for data transmission
TCP and UDP, what they are doesn't matter much at the moment. Just know that TCP
is slower but lossless because it allows retratransmission of lost packets.
Wheras UDP is faster, simpler, and more efficient, but it isn't lossless. There
are advantages and disadvantages to both protocols. UDP is great for streaming,
VoIP, video conferencing, and other applications that prioritize transmission
speed over fidelity. For now all you need to know is that HTTP is a reliable protocol because it uses TCP connections, you know that all of your data is guaranteed to get to the other end of the connection.

**Stateless Transfer**: Each request/response cycle is fully independent,
meaning all you need to deal with a request is fully contained in that request,
however it also means that you cannot use the request/reponse cycle to manage
persistency. Information like user information, whether someone is logged in,
and saved settings, all need to be managed seperately from the request/response cycle.

### Intermediaries

### Request Response Cycle

---

## Get Started on Tonights Homework