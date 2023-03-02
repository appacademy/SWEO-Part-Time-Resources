const chai = require('chai')
const expect = chai.expect

const Person = require('../problems/person')

describe('Person Class', ()=>{

	// hooks
	// keywords
	// 'beforeEach' --> runs this code block before every 'it'
	// 'before' --> runs only once before an 'it'
	// 'afterEach' --> runs after every 'it'
	// 'after' --> runs only once after 'it'

	// 'it' --> our tests, test
	let currentClass;

	beforeEach(()=>{
		currentClass = new Person('Kate', 'Cizewski', 23, 'Writing')
	})


	describe('constructor function/properties', ()=> {

		it('should have a firstName property', ()=>{
			expect(currentClass).to.have.property('firstName')
		})

		it('should have a lastName property', ()=> {
			expect(currentClass).to.have.property('lastName')
		})

		it('should have a age property', ()=> {
			expect(currentClass).to.have.property('age')
		})

		it('should have a hobby property', ()=> {
			expect(currentClass).to.have.property('hobby')
		})

	})
})
