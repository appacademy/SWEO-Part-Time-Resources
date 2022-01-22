const http = require('http')
const fs = require('fs')

const users = ['mgoldberg@appacademy.io']

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`)

  if (req.method === 'GET' && req.url === '/') {
    let resBody = fs.readFileSync('index.html', 'utf-8')
    const emails = users.map((user) => `<li>${user}</li>`)
    resBody = resBody.replace('#{users}', emails.join(''))
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

  let reqBody = ''
  req.on('data', (data) => {
    reqBody += data
  })

  req.on('end', () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split('&')
        .map((keyValuePair) => keyValuePair.split('='))
        .map(([key, value]) => [key, value.replace(/\+/g, ' ')])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value
          return acc
        }, {})
      console.log(req.body)
    }
    if (req.method === 'POST' && req.url === '/users') {
      console.log('here')
      users.push(req.body.email)
      res.statusCode = 302
      res.setHeader('Location', '/')
      return res.end()
    }
  })
})

const port = 5000

server.listen(port, () => console.log('Server is listening on port', port))
