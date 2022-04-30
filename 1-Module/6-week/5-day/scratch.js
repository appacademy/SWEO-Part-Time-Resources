const myObj = {
  name: 'Zaviar',
};

console.log(myObj);
const myArr = ["name", "favGame"]

const favGame = "Mario Party"

// myObj.favGame = 'Elden Ring';
myObj["favGame"] = "Elden Ring";
// myObj[favGame] = "Hello"

console.log(myObj);

for (let i = 0; i < myArr.length; i++) {
	let curr = myArr[i]
	// console.log(myObj[curr])
	console.log(myObj.curr)
}
