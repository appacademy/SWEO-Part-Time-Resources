const User = require('../class/user')

const { expect } = require('chai')

describe('User class', function () {
    let user

    beforeEach(() => {
        user = new User('billy', '123')
    })

    it('should create successfully', function () {

      expect(user).to.exist;
    });

    it('should be an instance of the User class', function () {

        expect(user).to.be.an.instanceOf(User)
    });

    it('should set username attribute on creation', function(){

        expect(user.username).to.equal('billy')
    })

    it('should set password attribute on creation', function(){

        expect(user.password).to.equal('123')
    })

    it('should set password attribute to "password" if no password provided', function(){
        let user2 = new User('billy')
        expect(user2.password).to.equal('password')
    })
});
