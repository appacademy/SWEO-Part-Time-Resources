const { expect } = require('chai');

const [
    listAllCitiesWithCountries,
    listAllUsCities,
    findDuplicates,
    returnDuplicate,
    correctDuplicate
] = require('../problems/01-clean-climate-data');

const climateData = require('../climate-data');

describe('listAllCitiesWithCountries()', function () {

    const climateDataCopy1 =  [...climateData].map( (i) => ({...i}) );

    const updated1 = listAllCitiesWithCountries(climateDataCopy1);

    const result1 = [
        'Amsterdam, Netherlands',
        'Athens, Greece',
        'Atlanta GA, United States',
        'Auckland, New Zealand',
        'Austin TX, United States',
        'Bangkok, Thailand',
        'Barcelona, Spain',
        'Beijing, China',
        'Berlin, Germany',
        'Bologna, Italy',
        'Boston MA, United States',
        'Boulder CO, United States',
        'Brasilia, Brazil',
        'Brisbane, Australia',
        'Brussels, Belgium',
        'Budapest, Hungary',
        'Buenos Aires, Argentina',
        'Calgary, Canada',
        'Canberra, Australia',
        'Cape Town, South Africa',
        'Chiang Mai, Thailand',
        'Chicago IL, United States',
        'Christchurch, New Zealand',
        'Copenhagen, Denmark',
        'Dallas TX, United States',
        'Denver CO, United States',
        'Detroit MI, United States',
        'Dubai, United Arab Emirates',
        'Dublin, Ireland',
        'Granada, Spain',
        'Halifax, Canada',
        'Hanoi, Vietnam',
        'Ho Chi Minh City, Vietnam',
        'Hong Kong, Hong Kong',
        'Honolulu, Hawaii',
        'Istanbul, Turkey',
        'Jakarta, Indonesia',
        'Jerusalem, Israel',
        'Johannesburg, South Africa',
        'Kansas City MO, United States',
        'Kolkata, India',
        'Kuala Lumpur, Malaysia',
        'Las Vegas NV, United States',
        'Lisbon, Portugal',
        'London, United Kingdom',
        'Los Angeles CA, United States',
        'Madrid, Spain',
        'Marseille, France',
        'Melbourne, Australia',
        'Mexico City, Mexico',
        'Miami FL, United States',
        'Montreal, Canada',
        'Moscow, Russia',
        'Mumbai, India',
        'New Delhi, India',
        'New Orleans LA, United States',
        'New York City NY, United States',
        'Oakland CA, United States',
        'Orlando FL, United States',
        'Osaka, Japan',
        'Oslo, Norway',
        'Ottawa, Canada',
        'Paris, France',
        'Philadelphia PA, United States',
        'Phoenix AZ, United States',
        'Phuket, Thailand',
        'Portland OR, United States',
        'Porto, Portugal',
        'Prague, Czech Republic',
        'Quebec City, Canada',
        'Reykjavik, Iceland',
        'Rio de Janeiro, Brazil',
        'Rome, Italy',
        'Saint Petersburg, Russia',
        'Salt Lake City UT, United States',
        'San Francisco CA, United States',
        'Santiago, Chile',
        'Sao Paulo, Brazil',
        'Seattle WA, United States',
        'Seoul, South Korea',
        'Sevilla, Spain',
        'Shanghai, China',
        'Singapore, Singapore',
        'Sofia, Bulgaria',
        'Stockholm, Sweden',
        'Sydney, Australia',
        'Taghazout, Morocco',
        'Tel Aviv, Israel',
        'Tokyo, Japan',
        'Toronto, Canada',
        'Tucson AZ, United States',
        'Ubud Bali, Indonesia',
        'Valencia, Spain',
        'Vancouver, Canada',
        'Venice, Italy',
        'Vienna, Austria',
        'Warsaw, Poland',
        'Washington DC, United States',
        'Wellington, New Zealand',
        'Zurich, Switzerland',
        'Albuquerque NM, United States',
        'Chicago IL, United States',
        'Nashville TN, United States',
        'St. Louis MO, United States',
        'Minneapolis MN, United States'
    ];


    it("returns an array with an element for each city in the data set", function () {
        expect(updated1).to.have.length(105);
    });


    it("each element is a string formatted in 'city, country' format",
    function () {
        expect(updated1[0]).to.be.a("string");
        expect(updated1[7]).to.include(", ");
        expect(updated1[7]).to.deep.equal("Beijing, China");
    });

    it("returns the correct output for all cities in the data set",
    function () {
        expect(updated1).to.deep.equal(result1)
    });
});



describe('listAllUsCities()', function () {

    const climateDataCopy2 =  [...climateData].map( (i) => ({...i}) );

    const updated2 = listAllUsCities(climateDataCopy2);

    const result2 = [
        'Atlanta GA, United States',
        'Austin TX, United States',
        'Boston MA, United States',
        'Boulder CO, United States',
        'Chicago IL, United States',
        'Dallas TX, United States',
        'Denver CO, United States',
        'Detroit MI, United States',
        'Kansas City MO, United States',
        'Las Vegas NV, United States',
        'Los Angeles CA, United States',
        'Miami FL, United States',
        'New Orleans LA, United States',
        'New York City NY, United States',
        'Oakland CA, United States',
        'Orlando FL, United States',
        'Philadelphia PA, United States',
        'Phoenix AZ, United States',
        'Portland OR, United States',
        'Salt Lake City UT, United States',
        'San Francisco CA, United States',
        'Seattle WA, United States',
        'Tucson AZ, United States',
        'Washington DC, United States',
        'Albuquerque NM, United States',
        'Chicago IL, United States',
        'Nashville TN, United States',
        'St. Louis MO, United States',
        'Minneapolis MN, United States'
    ];

    it("returns an array", function () {
        expect(updated2).to.be.an("array");
    });

    it("each element in the array is a string", function () {
        expect(updated2[0]).to.be.a("string");
        expect(updated2[17]).to.be.a("string");
    });

    it("each string is formatted in 'city, country' format", function () {
        expect(updated2[0]).to.include(", ");
        expect(updated2[17]).to.deep.equal("Phoenix AZ, United States")
    });

    it("returns all of the United States cities in the data set", function () {
        expect(updated2).to.have.length(29);
        expect(updated2).to.deep.equal(result2)
    });
});



describe('findDuplicates()', function () {

    const climateDataCopy3 =  [...climateData].map( (i) => ({...i}) );

    const updated3 = findDuplicates(climateDataCopy3);

    const result3 = {
        'Amsterdam': [ 1 ],
        'Athens': [ 2 ],
        'Atlanta GA': [ 3 ],
        'Auckland': [ 4 ],
        'Austin TX': [ 5 ],
        'Bangkok': [ 6 ],
        'Barcelona': [ 7 ],
        'Beijing': [ 8 ],
        'Berlin': [ 9 ],
        'Bologna': [ 10 ],
        'Boston MA': [ 11 ],
        'Boulder CO': [ 12 ],
        'Brasilia': [ 13 ],
        'Brisbane': [ 14 ],
        'Brussels': [ 15 ],
        'Budapest': [ 16 ],
        'Buenos Aires': [ 17 ],
        'Calgary': [ 18 ],
        'Canberra': [ 19 ],
        'Cape Town': [ 20 ],
        'Chiang Mai': [ 21 ],
        'Chicago IL': [ 22, 102 ],
        'Christchurch': [ 23 ],
        'Copenhagen': [ 24 ],
        'Dallas TX': [ 25 ],
        'Denver CO': [ 26 ],
        'Detroit MI': [ 27 ],
        'Dubai': [ 28 ],
        'Dublin': [ 29 ],
        'Granada': [ 30 ],
        'Halifax': [ 31 ],
        'Hanoi': [ 32 ],
        'Ho Chi Minh City': [ 33 ],
        'Hong Kong': [ 34 ],
        'Honolulu': [ 35 ],
        'Istanbul': [ 36 ],
        'Jakarta': [ 37 ],
        'Jerusalem': [ 38 ],
        'Johannesburg': [ 39 ],
        'Kansas City MO': [ 40 ],
        'Kolkata': [ 41 ],
        'Kuala Lumpur': [ 42 ],
        'Las Vegas NV': [ 43 ],
        'Lisbon': [ 44 ],
        'London': [ 45 ],
        'Los Angeles CA': [ 46 ],
        'Madrid': [ 47 ],
        'Marseille': [ 48 ],
        'Melbourne': [ 49 ],
        'Mexico City': [ 50 ],
        'Miami FL': [ 51 ],
        'Montreal': [ 52 ],
        'Moscow': [ 53 ],
        'Mumbai': [ 54 ],
        'New Delhi': [ 55 ],
        'New Orleans LA': [ 56 ],
        'New York City NY': [ 57 ],
        'Oakland CA': [ 58 ],
        'Orlando FL': [ 59 ],
        'Osaka': [ 60 ],
        'Oslo': [ 61 ],
        'Ottawa': [ 62 ],
        'Paris': [ 63 ],
        'Philadelphia PA': [ 64 ],
        'Phoenix AZ': [ 65 ],
        'Phuket': [ 66 ],
        'Portland OR': [ 67 ],
        'Porto': [ 68 ],
        'Prague': [ 69 ],
        'Quebec City': [ 70 ],
        'Reykjavik': [ 71 ],
        'Rio de Janeiro': [ 72 ],
        'Rome': [ 73 ],
        'Saint Petersburg': [ 74 ],
        'Salt Lake City UT': [ 75 ],
        'San Francisco CA': [ 76 ],
        'Santiago': [ 77 ],
        'Sao Paulo': [ 78 ],
        'Seattle WA': [ 79 ],
        'Seoul': [ 80 ],
        'Sevilla': [ 81 ],
        'Shanghai': [ 82 ],
        'Singapore': [ 83 ],
        'Sofia': [ 84 ],
        'Stockholm': [ 85 ],
        'Sydney': [ 86 ],
        'Taghazout': [ 87 ],
        'Tel Aviv': [ 88 ],
        'Tokyo': [ 89 ],
        'Toronto': [ 90 ],
        'Tucson AZ': [ 91 ],
        'Ubud Bali': [ 92 ],
        'Valencia': [ 93 ],
        'Vancouver': [ 94 ],
        'Venice': [ 95 ],
        'Vienna': [ 96 ],
        'Warsaw': [ 97 ],
        'Washington DC': [ 98 ],
        'Wellington': [ 99 ],
        'Zurich': [ 100 ],
        'Albuquerque NM': [ 101 ],
        'Nashville TN': [ 103 ],
        'St. Louis MO': [ 104 ],
        'Minneapolis MN': [ 105 ]
    };

    it("returns an object", function () {
        expect(updated3).to.be.an("object");
        expect(updated3).to.deep.equal(result3);
    });

    it("object includes a key for every city name", function () {
        expect(Object.keys(updated3)).to.have.length(104);
        expect(Object.keys(updated3)).to.include("Vancouver");
    });

    it("each key points to an array of IDs for that city", function () {
        expect(updated3["Chicago IL"]).to.be.an("array");
        expect(updated3["Chicago IL"]).to.have.length(2);
        expect(updated3["Chicago IL"][0]).to.be.a("number");
    });

    it("returns the correct output for each city in the data set", function () {
        expect(updated3).to.deep.equal(result3);
    });
});



describe('returnDuplicate()', function () {

    const climateDataCopy4 =  [...climateData].map( (i) => ({...i}) );

    const updated4 = returnDuplicate(climateDataCopy4);

    const result4 = {
        id: 102,
        city: 'Chicago IL',
        country: 'United States',
        monthlyAvg: [
            { high: 3, low: -8, dryDays: 18, snowDays: 11, rainfall: 52.1 },
            { high: 5, low: -6, dryDays: 17, snowDays: 8, rainfall: 47.1 },
            { high: 11, low: -1, dryDays: 17, snowDays: 5, rainfall: 62.5 },
            { high: 19, low: 5, dryDays: 14, snowDays: 1, rainfall: 90.4 },
            { high: 24, low: 10, dryDays: 14, snowDays: 0, rainfall: 106.4 },
            { high: 29, low: 16, dryDays: 15, snowDays: 0, rainfall: 80.1 },
            { high: 30, low: 18, dryDays: 18, snowDays: 0, rainfall: 98.7 },
            { high: 30, low: 17, dryDays: 18, snowDays: 0, rainfall: 87.7 },
            { high: 26, low: 12, dryDays: 19, snowDays: 0, rainfall: 81.7 },
            { high: 20, low: 6, dryDays: 18, snowDays: 0, rainfall: 70 },
            { high: 11, low: 0, dryDays: 17, snowDays: 5, rainfall: 71.6 },
            { high: 4, low: -6, dryDays: 18, snowDays: 10, rainfall: 50.7 }
        ]
    };

    it("returns an object", function () {
        expect(updated4).to.be.an("object");
    });

    it("the object contains the 'city', 'country', and 'monthlyAvg' keys",
    function () {
        expect(updated4).to.haveOwnProperty("city");
        expect(updated4).to.haveOwnProperty("country");
        expect(updated4).to.haveOwnProperty("monthlyAvg");
        expect(updated4.monthlyAvg).to.have.length(12);
    });


    it("returns the correct object for the second instance of the duplicated city",
    function () {
        expect(updated4.id).to.deep.equal(102);
        expect(updated4).to.deep.equal(result4);
    });
});



describe('correctDuplicate()', function () {

    const climateDataCopy5 =  [...climateData].map( (i) => ({...i}) );

    const updated5 = correctDuplicate(climateDataCopy5, "Peoria IL");

    const result5 = {
        id: 102,
        city: 'Peoria IL',
        country: 'United States',
        monthlyAvg: [
            { high: 3, low: -8, dryDays: 18, snowDays: 11, rainfall: 52.1 },
            { high: 5, low: -6, dryDays: 17, snowDays: 8, rainfall: 47.1 },
            { high: 11, low: -1, dryDays: 17, snowDays: 5, rainfall: 62.5 },
            { high: 19, low: 5, dryDays: 14, snowDays: 1, rainfall: 90.4 },
            { high: 24, low: 10, dryDays: 14, snowDays: 0, rainfall: 106.4 },
            { high: 29, low: 16, dryDays: 15, snowDays: 0, rainfall: 80.1 },
            { high: 30, low: 18, dryDays: 18, snowDays: 0, rainfall: 98.7 },
            { high: 30, low: 17, dryDays: 18, snowDays: 0, rainfall: 87.7 },
            { high: 26, low: 12, dryDays: 19, snowDays: 0, rainfall: 81.7 },
            { high: 20, low: 6, dryDays: 18, snowDays: 0, rainfall: 70 },
            { high: 11, low: 0, dryDays: 17, snowDays: 5, rainfall: 71.6 },
            { high: 4, low: -6, dryDays: 18, snowDays: 10, rainfall: 50.7 }
        ]
    };

    it("finds the second instance of the ONE duplicated city", function () {
        expect(updated5.id).to.deep.equal(102);
    });


    it("changes the name of the city to the name provided as a second argument",
    function () {
        expect(updated5).to.haveOwnProperty("city");
        expect(updated5.city).to.deep.equal("Peoria IL");
    });

    it("returns the correctly-formatted output with the new city name",
    function () {
        expect(updated5).to.haveOwnProperty("monthlyAvg");
        expect(updated5.monthlyAvg).to.have.length(12);
        expect(updated5).to.deep.equal(result5);
    });
});
