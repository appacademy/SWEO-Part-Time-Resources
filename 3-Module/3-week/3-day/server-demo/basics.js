const http = require('http');

// console.log(http);

const sendRes = (reqObj, res) => {
  // console.log(res);

  res.setHeader('Content-Type', 'text/html');
  res.write(`<h1>This is my Request Info</h1>`);

  Object.values(reqObj).forEach(val => {
    res.write(`<p>${val}</p>`);
  });

  res.statusCode = 200;
  res.end(`<h1>This is the END</h1>`);
}


let server = http.createServer((req, res) => {
  // console.log(req);

  /*
  1. method: GET, POST, PATCH
  2. url: path /, /puppies
  3. headers: {}
  4. on: method
  */

  // console.log({ method: req.method, url: req.url});

  // console.log(res);

  /*
  1. statusCode: set the status code
  2. setHeader: set header props
  3. write: add content to the body
  4. end: add content to the body and send the res
  */

  let reqData = '';

  req.on('data', (data) => {
    reqData += data;
  });

  req.on('end', () => {
    console.log(reqData);

    //1. seperate our args on '&'
    let removeAmp = reqData.split('&');
    console.log(removeAmp);

    //2. remove the '=' [[key, val], [key, val], [key, val]]
    let keyValSubArrs = removeAmp.map(str => str.split('='));
    console.log(keyValSubArrs);

    //3. decode the percent encoded chars
    let decodeSubArrs = keyValSubArrs.map(subArr => {
      return subArr.map(str => decodeURIComponent(str));
    });
    console.log(decodeSubArrs);

    //4. replace '+' with ' ';
    let replacePlusSigns = decodeSubArrs.map(subArr => {
      return subArr.map(str => str.replace(/\+/g, ' '));
    })
    console.log(replacePlusSigns);

    //5. turn the subArrs into an Obj[key]: val;
    let reqObj = replacePlusSigns.reduce((result, subArr) => {
      result[subArr[0]] = subArr[1];
      return result;
    }, {});
    console.log(reqObj);

    sendRes(reqObj, res);
  });
});

let port = 5000;
server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
