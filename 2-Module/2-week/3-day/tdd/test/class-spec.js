const chai = require('chai');
const expect = chai.expect

const Person = require('../problems/person')

describe('Person Class', ()=> {

	// hooks --
	// keywords for hooks
	// 'beforeEach' -- itll trigger this function before every 'it'
	// 'before' -- will trigger before an 'it' and wont run again
	// 'afterEach' -- will trigger after every 'it'
	// 'after' -- will only trigger once after an 'it'

	let currentClass;

	beforeEach(()=> {
		currentClass = new Person('Alex', 'Betita', 31, 'Badminton')
	})

	describe('constructor function', ()=>{

		it('It should have a firstName property', ()=>{
			expect(currentClass).to.have.property('firstName')
		})

		it('It should have a lastName property', ()=>{
			expect(currentClass).to.have.property('lastName')
		})

		it('It should have a age property', ()=>{
			expect(currentClass).to.have.property('age')
		})

		it('It should have a hobby property', ()=>{
			expect(currentClass).to.have.property('hobby')
		})

	})

})
