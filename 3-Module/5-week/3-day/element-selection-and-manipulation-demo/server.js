const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`)

  if (req.method === 'GET' && req.url === '/') {
    const resBody = fs.readFileSync('index.html', 'utf-8')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    return res.end(resBody)
  }

  if (req.method === 'GET' && req.url === '/main.css') {
    const resBody = fs.readFileSync('main.css')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/css')
    return res.end(resBody)
  }

  if (req.method === 'GET' && req.url === '/index.js') {
    const resBody = fs.readFileSync('index.js')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/javascript')
    return res.end(resBody)
  }

  if (req.method === 'GET' && req.url === '/seedData.js') {
    const resBody = fs.readFileSync('seedData.js')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/javascript')
    return res.end(resBody)
  }
})

const port = 5002

server.listen(port, () => console.log('Server is listening on port', port))
