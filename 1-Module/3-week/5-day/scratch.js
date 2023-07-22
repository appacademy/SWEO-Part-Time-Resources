const friends = [
	{
		name: "Albert",
		yearsOfFriendship: 3
	},
	{
		name: "Angela",
		yearsOfFriendship: 2
	},
	{
		name: "Freddy",
		yearsOfFriendship: 8
	},
	{
		name: "Agatha",
		yearsOfFriendship: 6
	}
];

// Notice, not saved to a variable, no return value from a forEach loop
friends.forEach(friend => {
	let name = friend.name
	let years = friend.yearsOfFriendship
	console.log(name + ': ' + years + ' years')
})

friends.forEach(friend => console.log(`${friend.name}: ${friend.yearsOfFriendship} years`))

// Maps return a new array
const goodFriendsOrNot = friends.map(friend => {
	let years = friend.yearsOfFriendship
	if (years >= 5) return true
	else return false
})

const goodFriendsOrNot2 = friends.map(friend => friend.yearsOfFriendship >= 5);
console.log(goodFriendsOrNot);

// Stops and returns first index that returned truthy
const filteredResult = friends.filter(friend => friend.name[0] === 'A' && friend.yearsOfFriendship > 5)
const filteredResult2 = friends.filter(friend => {
	if (friend.name[0] === 'A' && friend.yearsOfFriendship > 5) {
		return true
	}
})
console.log(filteredResult);


// Hint: create an array of vowels to use in your solution.
const threeVowelFriend = friends.find(friend => {
	let name = friend.name
	let vowels = 'AEIOUaeiou'
	// let vowels = ['a','e','i','o','u','A','E','I','O','U']
	let count = 0
	for (let char of name) {
		if (vowels.includes(char)) count++
	}
	if (count >= 3) return true
	// if count isn't returning true, default is return undefined which find treats as falsey	
});

console.log(threeVowelFriend.name);


// Reduce is often the trickiest for most
// Biggest thing is, do you want to start acc at arr[0], or give it an initial value
const totalYears = friends.reduce((acc, friend) => {
	console.log(acc)
	return acc + friend.yearsOfFriendship
}, 0); // 0 is InitialValue here for the acc variable, so it can start off as a number
console.log(totalYears);     // 19
