const nestedObj = {
    a: "aloe",
    b: {
        c: "cello",
        d: "dello"
    },
    e: {
        f: "fellow",
        g: {
            h: "hello",
            i: "io"
        },
        j: "jello"
    }
}

const printDepthOfTwo = obj => {
  	let ra = []
  
    for (let key in obj) {
    	let val = obj[key];
      	if (typeof val === 'object') {
        	for (let subkey in val) {
            	let subval = val[subkey]
				ra.push(subval)
            }
        }
    }
	console.log(ra)
}

// Really hard to console log all in 1 line because of the obj and trying to keep those curly brackets

printDepthOfTwo(nestedObj);
// cello 
// dello 
// fellow 
// { h: "hello", i: "io" } 
// jello
