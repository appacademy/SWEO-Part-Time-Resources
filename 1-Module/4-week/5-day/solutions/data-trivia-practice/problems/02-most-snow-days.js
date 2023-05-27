/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `citiesWithMostSnowDays` Which cities have the most snow days?

Write a function, `citiesWithMostSnowDays` that returns an array of objects,
that includes data on the cities that have the highest number of snow days
across all months.

For example, if the maximum number of snow days across all months is 10, and two
cities have 10 snow days each, the returned array would look like:

[
    { "city": "City Name 1, Country Name", "totalSnowDays": 10 },
    { "city": "City Name 2, Country Name", "totalSnowDays": 10 },
]

Note: You can solve this in multiple ways. Try using a few advanced array
methods!
*/

//!!START
function citiesWithMostSnowDays(climateData) {
    let allCities = [];
    let maxSnowDays = 0;

    // iterate through each city
    for (let cityData of climateData) {
        // use reduce to add up the total snow days for each month of the year
        let totalSnowDays = cityData.monthlyAvg.reduce( ( previousValue, currentValue ) => {
            return previousValue + currentValue.snowDays
        }, 0);
        // add each city name with total number of snow days to all cities array
        allCities.push({"city": cityData.city + ", " + cityData.country, "totalSnowDays": totalSnowDays });

        // update maxSnowDays counter
        if (totalSnowDays > maxSnowDays) {
            maxSnowDays = totalSnowDays;
        }
    }

    // filter and return all cities array by cities with max snow days
    return allCities.filter ( (city) => city.totalSnowDays === maxSnowDays);
}

// console.log(citiesWithMostSnowDays(climateData));
//!!END

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ citiesWithMostSnowDays ];
