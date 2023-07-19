const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon",
  	four: "pizzaaeeee",
}


let keyArr = Object.keys(obj)
let returnArr = []
for (let i = 0; i < keyArr.length; i++) {
  	let key = keyArr[i]
	let val = obj[key]
    let combo = key+val
	let count = 0
    for (let j = 0; j < combo.length; j++) {
    	let letter = combo[j]
        if (letter === "e") count++
    }
    
	if (count > 2) returnArr.push(val)
}

console.log(returnArr.join(", "))


// Should print "hexagon, pizzaaeeee"
