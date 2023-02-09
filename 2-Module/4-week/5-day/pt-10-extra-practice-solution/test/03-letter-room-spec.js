var expect = require('chai').expect;
const chai = require('chai');
const spies = require('chai-spies');
const proxyquire = require('proxyquire');

const LetterRoom = require('../problems/03-letter-room');

chai.use(spies);

describe('LetterRoom', function() {
    it('"addBin" creates a bin and adds it to the end of the queue and returns the newly added bin', function() {
        const LetterBin = chai.spy();
        const LetterRoom = proxyquire('../problems/03-letter-room', { './02-letter-bin': LetterBin });

        const letterRoom = new LetterRoom();
        const bin = letterRoom.addBin();
        expect(bin instanceof LetterBin);
        expect(LetterBin).to.have.been.called();
    });

    it('"removeBin" removes the first bin that has been added to the queue', function() {
        const numBins = 10;
        const letterRoom = new LetterRoom();

        const bins = [];

        for (let i = 0; i < numBins; i++) {
            const bin = letterRoom.addBin();
            bins.push(bin);
        }

        for (let i = numBins - 1; i >= 0; i--) {
            const bin = letterRoom.removeBin();
            expect(bin).to.eql(bins.pop());
        }
    });

    it('"numBins" returns the number of bins in the queue', function() {
        const numBins = 10;
        const letterRoom = new LetterRoom();

        
        expect(letterRoom.numBins()).to.equal(0);

        for (let i = 0; i < numBins; i++) {
            letterRoom.addBin();
            expect(letterRoom.numBins()).to.equal(i + 1);
        }

        expect(letterRoom.numBins()).to.equal(numBins);

        for (let i = numBins - 1; i >= 0; i--) {
            letterRoom.removeBin();
            expect(letterRoom.numBins()).to.equal(i);
        }

        expect(letterRoom.numBins()).to.equal(0);
    });

    it('"getLastBin" returns the last bin added to the queue', function() {
        const numBins = 10;
        const letterRoom = new LetterRoom();

        for (let i = 0; i < numBins; i++) {
            const bin = letterRoom.addBin();
            expect(letterRoom.getLastBin()).to.equal(bin);
        }
    });

    it('"getLastBin" returns null if there are no bins in the queue', function() {
        const letterRoom = new LetterRoom();

        expect(letterRoom.getLastBin()).to.be.null;
    });

    it('"getFirstBin" returns null if there are no bins in the queue', function() {
        const letterRoom = new LetterRoom();

        expect(letterRoom.getFirstBin()).to.be.null;
    })
});
