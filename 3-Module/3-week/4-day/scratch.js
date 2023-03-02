const http = require('http');
const {formatComments, parseBody} = require('./parseInput');

const comments = [{'id': 1, 'content':'Nice'}, {'id': 2, 'content': 'Not Nice'}];
const server = http.createServer((req, res) => {
  
});
const port = 8080;
server.listen(port, () => console.log(`Server is listening on port ${port}...`));