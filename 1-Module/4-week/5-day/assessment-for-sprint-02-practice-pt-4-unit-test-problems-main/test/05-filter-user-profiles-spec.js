const assert = require('assert').strict;

const filterUserProfiles = require('../problems/05-filter-user-profiles.js');

describe('filterUserProfiles()', function() {
	it('should return the names of users that return true after being passed into the callback function', function() {
		const facebookUsers = [
			{ name: "John", age: "21", state: "Florida" },
			{ name: "Mary", age: "57", state: "California" },
			{ name: "Judy", age: "47", state: "Texas" },
			{ name: "Mike", age: "32", state: "New York" }
		];

		assert.deepStrictEqual(
			filterUserProfiles(facebookUsers, (user) => user.age > 30),
			["Mary", "Judy", "Mike"]
		);
		assert.deepStrictEqual(
			filterUserProfiles(facebookUsers, (user) => user.state === "New York"),
			["Mike"]
		);

		const instagramUsers = [
			{ name: "Brady", numFollowers: 2, numPhotos: 65 },
			{ name: "Brian", numFollowers: 3, numPhotos: 49 },
			{ name: "Carolyn", numFollowers: 1, numPhotos: 101 },
		];

		assert.deepStrictEqual(
			filterUserProfiles(instagramUsers, (user) => user.numFollowers > 2),
			["Brian"]
		);
		assert.deepStrictEqual(
			filterUserProfiles(instagramUsers, (user) => user.numPhotos > 50),
			["Brady", "Carolyn"]
		);
	});
});
