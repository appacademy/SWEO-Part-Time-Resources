//Static assets
//Are certain types of data that never change no matter how many times the server asks
//for it

//When we serve static assets, the requests URL path usually includes the assets file extension
//at the end

//   assets/images/image.png

//Because we're using the http module, we'll use the fs library to serve static assets

//const fs = require('fs');

// const fileContents = fs.readFileSync('./beep.jpg');

//readFileSync takes in a filepath and returns the contents
//The file path is relative to the current file

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const catImage = fs.readFileSync('./beep.jpg');
  
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'image/png');
//     res.end(catImage);
// });

// const port = 3000;

// server.listen(port, () => console.log(`Server is running on port ${port}`));


//HTML Templating
//We just saw how to serve HTML, but what if we wanted to insert data into an html file
//we could use html templating

//Popular templating engines for JS include Pug and Handlebars

//Templating is going out of style in favor of the DOM

//Basic HTML templating
//example: 

/* <html>
    <p>Welcome, #{username} </p>
</html>

const template = fs.readFileSync('./template.html', 'utf-8')

let htmlPageUser1 = template.replace(/#{username}/g, 'Alex') */


//JSON
//

// Reg [1,2,3]    JSON "[1, 2, 3]"

//Reg true         JSON "true"

//reg    12.43      JSON "12.43"

//reg null        JSON "null"

// reg   'This is "text"'     JSON ''This is \"text\"''


//JSON.stringify(12.34)

//JSON.parse("12.34")

//Takes in a stringified value and parses into Javascript