const { expect } = require("chai");

const Animal = require('../class/animal.js');
const AnimalShelter = require('../class/animal-shelter.js');
const User = require('../class/user.js');


describe("User", function () {
	it("should set name and age on creation", function () {
	  let user = new User("Alex", 30);

	  expect(user.name).to.equal("Alex");
	  expect(user.age).to.equal(30);
	});

	it("should have currentPets attribute", function () {
	  let user = new User("Alex", 30);

	  expect(user.currentPets).to.deep.equal([]);
	});

	it("should allow customers to adopt a pet", function () {
	  let user = new User("Alex", 30);

	  let animal = new Animal("Maxie", 4);
	  let animalShelter = new AnimalShelter([animal])

	  expect(user.currentPets.length).to.equal(0);
	  expect(animalShelter.animals.length).to.equal(1);

	  user.adoptPet("Maxie", animalShelter);
	  expect(user.currentPets[0]).to.deep.equal(animal);
	  expect(user.currentPets.length).to.equal(1);
	  expect(animalShelter.animals.length).to.equal(0);

	});
});


describe("Animal", function () {
	it("should set name and age on creation", function () {
	  let animal = new Animal("Maxie", 3);

	  expect(animal.name).to.equal("Maxie");
	  expect(animal.age).to.equal(3);
	});

	it("should be able to check pets age and throw error if not a number", function () {
		let animal = new Animal("Maxie", 'hello');

		expect(() => animal.checkAge().to.throw(Error))

		let animal2 = new Animal("Kimchi", 1);

		expect(animal2.checkAge()).to.equal(1)
	});

	it("pet should be able to speak", function () {
		let animal = new Animal("Maxie", 3);

		expect(animal.speak()).to.equal("Hi my name is Maxie!")
	});

});


describe("Animal Shelter", function () {
	it("should set animals as an attribute and default to an array", function () {
	  let animalShelter = new AnimalShelter();

	  expect(animalShelter.animals).to.deep.equal([])


	  let animal = new Animal("Zed", 5);
	  let animalShelter2 = new AnimalShelter([animal]);

	  expect(animalShelter2.animals).to.deep.equal([animal])
	});
});
