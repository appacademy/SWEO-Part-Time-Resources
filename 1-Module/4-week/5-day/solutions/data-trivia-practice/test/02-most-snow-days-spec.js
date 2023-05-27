const { expect } = require('chai');

const [ citiesWithMostSnowDays ] = require('../problems/02-most-snow-days');

const climateData = require('../climate-data');

describe('citiesWithMostSnowDays()', function () {

    const updated = citiesWithMostSnowDays(climateData);

    const result = [ { city: 'Saint Petersburg, Russia', totalSnowDays: 111 } ];

    it("returns an array", function () {
        expect(updated).to.be.an('array');
    });

    it("returns an array containing objects with keys of 'city' and 'totalSnowDays'",
    function () {
        expect(updated).to.have.length.gte(1);
        expect(updated[0]).to.haveOwnProperty("city");
        expect(updated[0]).to.haveOwnProperty("totalSnowDays");
    });

    it("returns properly formatted values for 'city' and 'totalSnowDays`",
    function () {
        expect(updated).to.have.length.gte(1);
        expect(updated[0].city).to.be.a("string");
        expect(updated[0].city).to.include(", ");
        expect(updated[0].totalSnowDays).to.be.a("number");
    });

    it("correctly calculates 'totalSnowDays' by adding up 'snowDays' across all 12 months",
    function () {
        expect(updated[0].totalSnowDays).to.deep.equal(111);
    });

    it("returns accurate data on the cities with the most snow days all year",
    function () {
        expect(updated).to.deep.equal(result);
    });
});
