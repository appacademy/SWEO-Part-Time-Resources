const http = require('http');

// console.log(http);

const sendRes = (reqObj, res) => {
  console.log(reqObj);
  res.setHeader('Content-Type', 'text/html');

  res.write(`<h1>This is my request Info</h1>`);

  Object.values(reqObj).forEach(val => {
    res.write(`<p>${val}</p>`)
  });

  res.statusCode = 200;
  res.end(`<h1>This is the END</h1>`)
}

const server = http.createServer((req, res) => {
  // console.log(req);
  /*
  1. method: GET, POST
  2. url: /, /puppies
  3. headers: {}
  4. on: parse the req body
  */

  // console.log({
  //   method: req.method,
  //   url: req.url
  // });

  // console.log(res);

  /*
  1. statusCode
  2. setHeader: method to set header props
  3. write: method to add to res body
  4. end: method to add to res body and send the res
  */

  let reqData = '';

  req.on('data', (data) => {
    reqData += data;
  });

  req.on('end', () => {
    console.log(reqData);

    //1. seperate our args at '&';

    let removeAmp = reqData.split('&');
    console.log(removeAmp);

    // firstName=John -> [firstName, John]
    //2. remove the '=' and have key:val as subArrs

    let keyValSubArrs = removeAmp.map(str => str.split('='));
    console.log(keyValSubArrs);

    //3. decode the percent encoded strings
    let decodedSubArrs = keyValSubArrs.map(subArr => {
      return subArr.map(str => decodeURIComponent(str));
    });

    console.log(decodedSubArrs);

    //4. replace '+' with ' '
    let replacePlusSigns = decodedSubArrs.map(subArr => {
      return subArr.map(str => str.replace(/\+/g, ' '));
    });
    console.log(replacePlusSigns);

    //5. turn subArrs into an obj with key:val

    let reqObj = replacePlusSigns.reduce((result, subArr) => {
      result[subArr[0]] = subArr[1];
      return result
    }, {})

    console.log(reqObj);

    sendRes(reqObj, res);
  })
});

const port = 5000;
server.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
