//Static Assets
//Static assets are pieces of data that never change no matter how many times we ask for them
//Example: img, static htmls, text

//When we serve static assets the request URL path usually includes the file extension at the end

//File : beep.jpg            URL path  /assets/images/beep.jpg

//const fs = require('fs');

//ReadFileSync takes in a file path that is relative to the current file

//Let's send a static asset!

// const http = require('http');

// const server = http.createServer((req, res) => {
//     let beep = fs.readFileSync('./beep.jpg')
  
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'image/jpg');
//     res.end(beep);
// });

//   let port = 3000;

//   server.listen(port, () => console.log(`Server asfhsakfhakj`))

//HTML Templating

//Example template
//Im in index.html
/* <html> 
    <h1>Welcome #{username}, how are you?</h1>
</html>

const fs = require('fs');

const template = fs.readFileSync('./index.html');

const htmlPageUser1 = template.replace(/#{username}/g, 'Alex'); */


//JSON 
//Javascript Object Notation

//REG   true           JSON "true"
//REG   12.34          JSON "12.34"
//REG   [1, 2, 3]      JSON "[1, 2, 3]"

//REG  'This is "text"'     JSON  "This is \"text\""

//We have two awesome methods to turn Javascript into JSON and vice versa

JSON.stringify(12.34) //Javascript to JSON

JSON.parse("12.34") //JSON to Javascript
