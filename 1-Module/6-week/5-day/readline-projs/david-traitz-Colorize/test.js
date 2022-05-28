//       reference: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
// further reading: https://www.samanthaming.com/tidbits/40-colorful-console-message/
//                  https://www.npmjs.com/package/chalk
//                  https://www.youtube.com/watch?v=L8CDt1J3DAw
//                  https://www.youtube.com/watch?v=_oHByo8tiEY


// made: TraitzCo.
// license: free-use

process.stdout.write("\rtype some stuff & hit enter...");
process.stdout.write("\n\r.\r");

let me = setInterval(() => {
  process.stdout.write("\r \r");
  setTimeout(()=>{
    process.stdout.write("\r.\r")
  }, 250);
}, 500);

setTimeout(function() {
  clearInterval(me);
  let readline = require('readline');
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  rl.on('line', function(line){ // \x1b[37m ${string} \x1b[0m  -- 30-37
    console.log(stringToColors(line))
    clearNewStringParts();
    return;
  })
}, 1500);

var roll = 0;

let func = () => {
  if(roll == 7){
    roll = 0;
  }else{
    roll++;
  }
  return roll;
}

let returnCode = (string) => {
  if(string === undefined){
    return `\x1b[3${func()}m`
  }else{
    return `\x1b[3${func()}m${string}`
  }
}
var newStringParts = [];
let stringToColors = (string) => {
  switch (string) {
    case "black":
      return `\x1b[30m${string}`
    break;
    case "red":
        return `\x1b[31m${string}`
      break;
    case "green":
        return `\x1b[32m${string}`
      break;
    case "yellow":
        return `\x1b[33m${string}`
      break;
    case "blue":
        return `\x1b[34m${string}`
      break;
    case "purple":
        return `\x1b[35m${string}`
      break;
    case "teal":
        return `\x1b[36m${string}`
      break;
    case "white":
        return `\x1b[37m${string}`
      break;
    default:
        for(let i = 0; i < string.length; i++){
          const yes = string[i];
          const thing = returnCode(yes);
          newStringParts.push(thing);
        }
        newStringParts.push('\x1b[0m');
        let tie = newStringParts.join("")
        return tie;
      break;
  }
}

let clearNewStringParts = () => {
  newStringParts = [];
}
