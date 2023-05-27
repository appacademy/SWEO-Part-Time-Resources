const { expect } = require('chai');

const [ temperatureRange ] = require('../problems/04-temperature-range.js');

const climateData = require('../climate-data');

describe('temperatureRange()', function () {

    const updated = temperatureRange(climateData);

    const result1 = {  // object at index 37
        id: 38,
        city: 'Jerusalem',
        country: 'Israel',
        monthlyTemperatureRange: [
            { month: 'January', high: 12, low: 5, range: 7 },
            { month: 'February', high: 13, low: 5, range: 8 },
            { month: 'March', high: 16, low: 7, range: 9 },
            { month: 'April', high: 22, low: 10, range: 12 },
            { month: 'May', high: 26, low: 14, range: 12 },
            { month: 'June', high: 28, low: 17, range: 11 },
            { month: 'July', high: 30, low: 19, range: 11 },
            { month: 'August', high: 30, low: 19, range: 11 },
            { month: 'September', high: 28, low: 17, range: 11 },
            { month: 'October', high: 26, low: 15, range: 11 },
            { month: 'November', high: 20, low: 11, range: 9 },
            { month: 'December', high: 15, low: 7, range: 8 }
        ]
    };

    const result2 = {  // object at index 12
        id: 13,
        city: 'Brasilia',
        country: 'Brazil',
        monthlyTemperatureRange: [
            { month: 'January', high: 31, low: 21, range: 10 },
            { month: 'February', high: 31, low: 21, range: 10 },
            { month: 'March', high: 31, low: 21, range: 10 },
            { month: 'April', high: 31, low: 20, range: 11 },
            { month: 'May', high: 30, low: 17, range: 13 },
            { month: 'June', high: 30, low: 15, range: 15 },
            { month: 'July', high: 30, low: 15, range: 15 },
            { month: 'August', high: 32, low: 17, range: 15 },
            { month: 'September', high: 33, low: 19, range: 14 },
            { month: 'October', high: 33, low: 21, range: 12 },
            { month: 'November', high: 31, low: 21, range: 10 },
            { month: 'December', high: 30, low: 21, range: 9 }
        ]
    };

    it("returns an array", function () {
        expect(updated).to.be.an('array')
    });

    it("returns an array containing objects", function () {
        expect(updated).to.have.length.gte(1);
        expect(updated[0]).to.be.an("object");
    });

    it("returns objects with keys of 'id', 'city', 'country', and 'monthlyTemperatureRange'",
    function () {
        expect(updated[0]).to.haveOwnProperty("id");
        expect(updated[0]).to.haveOwnProperty("city");
        expect(updated[0]).to.haveOwnProperty("country");
        expect(updated[0]).to.haveOwnProperty("monthlyTemperatureRange");
    });

    it("'monthlyTemperatureRange' is an array with 12 objects", function () {
        expect(updated[0].monthlyTemperatureRange).to.be.an("array");
        expect(updated[0].monthlyTemperatureRange).to.have.length(12);
    });

    it("each object in 'monthlyTemperatureRange' has 'month', 'high', 'low', and 'range' keys",
    function () {
        expect(updated[0].monthlyTemperatureRange[0]).to.be.an("object");
        expect(updated[0].monthlyTemperatureRange[0]).to.haveOwnProperty("month");
        expect(updated[0].monthlyTemperatureRange[0]).to.haveOwnProperty("high");
        expect(updated[0].monthlyTemperatureRange[0]).to.haveOwnProperty("low");
        expect(updated[0].monthlyTemperatureRange[0]).to.haveOwnProperty("range");
    });

    it("correctly calculates range from 'high' and 'low' temperature data",
    function () {
        const originalRange1 = climateData[37].monthlyAvg[11].high - climateData[37].monthlyAvg[11].low;
        const calculatedRange1 = updated[37].monthlyTemperatureRange[11].range
        expect(calculatedRange1).to.deep.equal(originalRange1);

        const originalRange2 = climateData[12].monthlyAvg[0].high - climateData[12].monthlyAvg[0].low;
        const calculatedRange2 = updated[12].monthlyTemperatureRange[0].range
        expect(calculatedRange2).to.deep.equal(originalRange2);
    });


    it("returns the correct array of objects with accurate 'monthlyTemperatureRange' data",
    function () {
        expect(updated[37]).to.deep.equal(result1);
        expect(updated[12]).to.deep.equal(result2);
    });
})
