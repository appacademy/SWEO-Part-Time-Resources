var expect = require('chai').expect;
const chai = require('chai');
const spies = require('chai-spies');
const proxyquire = require('proxyquire');

chai.use(spies);

describe('LetterBin', function() {
    it('"addLetter" creates a letter with a given message and adds it to the top of the stack', function() {
        const Letter = chai.spy();
        const LetterBin = proxyquire('../problems/02-letter-bin', { './letter': Letter });

        const letterBin = new LetterBin();
        letterBin.addLetter('hello world!');
        expect(Letter).to.have.been.called();
    });

    it('"removeLetter" removes the last letter that has been added to the stack', function() {
        const LetterBin = require('../problems/02-letter-bin');
        const messages = [
            'Hello World!', 'App Academy',
            'Computer Science', 'She sells seashells by the seashore.'
        ];
        const letterBin = new LetterBin();

        for (let i = 0; i < messages.length; i++) {
            letterBin.addLetter(messages[i]);
        }

        for (let i = messages.length - 1; i >= 0; i--) {
            const letter = letterBin.removeLetter();
            expect(letter.message).to.equal(messages[i]);
        }
    });

    it('"numLetters" returns the number of letters in the stack', function() {
        const LetterBin = require('../problems/02-letter-bin');
        const messages = [
            'Hello World!', 'App Academy',
            'Computer Science', 'She sells seashells by the seashore.'
        ];
        const letterBin = new LetterBin();

        for (let i = 0; i < messages.length; i++) {
            letterBin.addLetter(messages[i]);
        }
        
        expect(letterBin.numLetters()).to.equal(messages.length);

        for (let i = messages.length - 1; i >= 0; i--) {
            const letter = letterBin.removeLetter();
            expect(letterBin.numLetters()).to.equal(i);
        }

        expect(letterBin.numLetters()).to.equal(0);
    });
});
