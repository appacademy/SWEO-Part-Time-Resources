/*
All the marbles:

    Write a function that takes in any number of marble objects and returns the total weight of all marbles.
    Marble objects are structured as the following:

    const marble1 = { color: 'red', weight: 20 };
    const marble2 = { color: 'purple', weight: 100 };
    const marble3 = { color: 'blue', weight: 40 };

    console.log(allTheMarbles(marble1, marble2)) // prints 120;
    console.log(allTheMarbles(marble1, marble2, marble3)) // prints 160;
    console.log(allTheMarbles()) // prints 0;
*/

// const allTheMarbles = (...marbles) => marbles.reduce((acc, cur) => acc + cur.weight, 0)

const allTheMarbles = (...objs) => {
	let res = 0;

	for (let i in objs) {
	  let obj = objs[i];
	  if (obj.weight !== NaN) {
		res += obj.weight;
	  }
	}
	return res;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = allTheMarbles;
} catch (e) {
    module.exports = null;
}
