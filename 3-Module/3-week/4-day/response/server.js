let http = require('http')

http.createServer((req, res) => {

    if(req.method == "POST" && req.url === '/hey'){
        console.log('do stuff')
        res.end()
    }else{

        let body = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello World!</title>
        </head>
        <body>
          <h1>Hello there!</h1>
        </body>
        </html>
      `;
    
      res.setHeader('Content-type', 'text/html')
      res.statusCode = 200;
      res.write(body)
      res.end()
    }
}).listen(5000, () => console.log('Listening', 5000))