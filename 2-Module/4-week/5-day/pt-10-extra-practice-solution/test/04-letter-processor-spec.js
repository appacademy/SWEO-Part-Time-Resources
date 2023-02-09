var expect = require('chai').expect;
const chai = require('chai');
const spies = require('chai-spies');

const LetterProcessor = require('../problems/04-letter-processor');
const LetterRoom = require('../problems/03-letter-room');

chai.use(spies);

describe('LetterProcessor', function() {
    it('"addLetter" creates a letter and adds to to the last bin added to the room if that bin is not full', function() {
        const letterProcessor = new LetterProcessor();

        letterProcessor.addLetter('hello world!');
        const letterRoom = letterProcessor.letterRoom;
        const bin = letterRoom.getFirstBin();
        expect(bin).to.not.be.undefined;
        expect(letterRoom.numBins()).to.equal(1);
        expect(bin.numLetters()).to.equal(1);
    });

    it('"addLetter" creates a letter, if the last bin added to the room is full, then a new bin is added and the letter is added to the new bin', function() {
        const letterProcessor = new LetterProcessor(5);

        const numBins = 10;
      
        const letterRoom = new LetterRoom();

        for (let i = 0; i < numBins; i++) {
            letterRoom.addBin();
        }

        letterProcessor.letterRoom = letterRoom;

        for (let i = 0; i < 6; i++) {
            letterProcessor.addLetter('Hello World!');
        }

        expect(letterRoom.numBins()).to.equal(11);
    });

    it('"removeLetter" removes the last letter that has been added to the first bin', function() {
        const maxLettersPerBin = 4;

        const letterProcessor = new LetterProcessor(maxLettersPerBin);
      
        const letterRoom = new LetterRoom();

        const bin = letterRoom.addBin();
        for (let j = 0; j < maxLettersPerBin - 1; j++) {
            bin.addLetter('Other letters');
        }

        bin.addLetter('Last Letter!');

        letterProcessor.letterRoom = letterRoom;

        expect(letterProcessor.removeLetter().message).to.equal('Last Letter!');
        expect(letterRoom.getFirstBin().numLetters()).to.equal(3);
    });

    it('"removeLetter" removes the last letter that has been added to the first bin', function() {
        const numBins = 3;
        const maxLettersPerBin = 4;

        const letterProcessor = new LetterProcessor(maxLettersPerBin);

        const binLetters = [
            ['bin 1 letter 1', 'bin 1 letter 2', 'bin 1 letter 3', 'bin 1 letter 4'],
            ['bin 2 letter 1', 'bin 2 letter 2', 'bin 2 letter 3', 'bin 2 letter 4'],
            ['bin 3 letter 1', 'bin 3 letter 2', 'bin 3 letter 3', 'bin 3 letter 4'],
        ];
      
        const letterRoom = new LetterRoom();

        for (let i = 0; i < numBins; i++) {
            const bin = letterRoom.addBin();
            for (let j = 0; j < maxLettersPerBin; j++) {
                bin.addLetter(binLetters[i][j]);
            }
        }

        letterProcessor.letterRoom = letterRoom;

        for (let i = 0; i < numBins; i++) {
            for (let j = maxLettersPerBin - 1; j >= 0; j--) {
                expect(letterProcessor.removeLetter().message).to.equal(binLetters[i][j]);
            }
        }
    });

    it('"removeLetter" console.log\'s \'No more letters to process!\' when there are no more letters to process', function() {
        const numBins = 3;
        const maxLettersPerBin = 4;

        const consoleSpy = chai.spy.on(console, 'log');

        const letterProcessor = new LetterProcessor(maxLettersPerBin);

        const binLetters = [
            ['bin 1 letter 1', 'bin 1 letter 2', 'bin 1 letter 3', 'bin 1 letter 4'],
            ['bin 2 letter 1', 'bin 2 letter 2', 'bin 2 letter 3', 'bin 2 letter 4'],
            ['bin 3 letter 1', 'bin 3 letter 2', 'bin 3 letter 3', 'bin 3 letter 4'],
        ];
      
        const letterRoom = new LetterRoom();

        for (let i = 0; i < numBins; i++) {
            const bin = letterRoom.addBin();
            for (let j = 0; j < maxLettersPerBin; j++) {
                bin.addLetter(binLetters[i][j]);
            }
        }

        letterProcessor.letterRoom = letterRoom;

        for (let i = 0; i < numBins; i++) {
            for (let j = maxLettersPerBin - 1; j >= 0; j--) {
                letterProcessor.removeLetter();
                expect(consoleSpy).to.not.have.been.called.with('No more letters to process!');
            }
        }

        letterProcessor.removeLetter();
        expect(consoleSpy).to.have.been.called.with('No more letters to process!');
    });
});
