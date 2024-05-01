const { expect } = require('chai');

const User = require("../class/user.js");

describe('User class', function () {
    let user;
    let user2;

    beforeEach(() => {
        user = new User('billy', 25)
        user2 = new User('jesse', 27)
    })

    it('should create successfully', function () {
        expect(user).to.exist;
    });

    it('should set the name attribute', function () {

        expect(user.name).to.equal('billy')
        expect(user2.name).to.equal('jesse')
    });

    it('should set name to anthony if no name is provided', function(){
        let user3 = new User(null, 25)
        expect(user3.name).to.equal('anthony')
    })

    it('should set the age attribute', function(){
        expect(user.age).to.equal(25)
    })

    it('should have instance method called printName that returns the instance name', function(){
        let userName = user.printName()
        expect(userName).to.equal('billy')
    })

});
