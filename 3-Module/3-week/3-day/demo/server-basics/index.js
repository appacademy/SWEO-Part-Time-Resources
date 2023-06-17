const http = require('http');
const PORT = 5000;

const COLORS = ['red', 'blue', 'green', 'yellow', 'purple']

const sendRes = (reqObj, resObj) => {
  resObj.setHeader('Content-Type', 'text/html');
  resObj.statusCode = 200;

  resObj.write('<h1 style="background-color: blue; color: white">Hello World</h1>')
  resObj.write('<p>colors</p>')
  resObj.write('<ul>');

  COLORS.forEach((color) => {
    resObj.write(`<li>${color}</li>`)
  })

  resObj.write('</ul>')
  resObj.end("<img alt='cute puppy' src='https://www.gannett-cdn.com/presto/2020/03/17/USAT/c0eff9ec-e0e4-42db-b308-f748933229ee-XXX_ThinkstockPhotos-200460053-001.jpg?crop=1170%2C658%2Cx292%2Cy120&width=1200'>");
}

const server = http.createServer((req, res) => {
  sendRes(req, res);
  res.end();
})

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}!`)
})
