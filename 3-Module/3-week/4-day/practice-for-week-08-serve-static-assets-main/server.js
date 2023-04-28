const http = require('http');
const fs = require("fs");


function getContentType(fileName) {
	const ext = fileName.split(".")[1];
	switch (ext) {
	  case "jpg":
	  case "jpeg":
		return "image/jpeg";
	  case "png":
		return "image/png";
	  case "css":
		return "text/css";
	  default:
		return "text/plain";
	}
}



const server = http.createServer((req, res) => {
  // Your code here
	// phase 2
	if (req.method === 'GET' && req.url.startsWith('/static')) {
		const assetPath = req.url.split("/static")[1]
		// console.log(assetPath)
		try {
			const resBody = fs.readFileSync('./assets' + assetPath)
			res.statusCode = 200;
			res.setHeader("Content-Type", getContentType(assetPath))
			return res.end(resBody)
		} catch {
			res.statusCode = 404
			return res.end()
		}

	}
  // phase 1
  const fileContents = fs.readFileSync('index.html', 'utf-8');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(fileContents);




});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
