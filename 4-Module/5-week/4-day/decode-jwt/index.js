// Parsing a JWT

const sampleJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im15c2VsZkBhcHBhY2FkZW15LmlvIn0.EqRikwoGyAlfvblF_FdbnQlbAQGvWZlccFnmHOVdaLg";

// #1: Splitting the JWT into 3 parts: header, payload, signature

// Your code here 
const splitArr = sampleJwt.split('.')
let [header, payload, signature] = splitArr
console.log(header, payload, signature)

// #2: Decoding a JWT's header and payload
// Hint: Buffer.from(string, 'base64').toString();
header = Buffer.from(header, 'base64').toString()
payload = Buffer.from(payload, 'base64').toString()

console.log(header, payload)

// Your code here 

// #3: Finally, take note of the algorithm and email in the decoded header and
// payload when you run this file. You'll need these to complete the next quiz.
