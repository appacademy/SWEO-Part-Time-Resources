/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `leastRainfall` Which cities have the least rainfall in a given month?

Write a function, `leastRainfall` that takes in the climate data and a month,
and returns an array of cities that have the least rainfall in that month. It
should include all cities that recieve less than 10 mm rainfall in that month.

For example, if there are three cities have less than 10 mm, the returned array
should look like:

[ "city1, country1: x mm", "city2, country2: x mm", "city3, country3: x mm" ]
(Each city's data is a formatted string data type).

Note: You can solve this in multiple ways. Try using a few advanced array
methods!

Hint: How can you identify and access the correct data for a month such as
"March"?
*/

//!!START
function leastRainfall(climateData, month) {
    // key for linking months to indices in the monthlyAvg array
    //Could also be done with an object (lookup dictionary)
    const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    // convert month argument to index
    const monthIndex = months.indexOf(month);

    // initialize variable to define least rainfall threshold
    const rainfallThreshold = 10

    let leastRainfallArray = [];

    // iterate through cities, checking for month's rainfall value
    climateData.forEach( (cityData) => {
        let rainfall = cityData.monthlyAvg[monthIndex].rainfall

        // compare rainfall to threshold
        if (rainfall < rainfallThreshold) {
            // format string and push into results array if it meets criteria
            cityData = cityData.city + ", " + cityData.country + ": " + parseInt(rainfall) + " mm"
            leastRainfallArray.push(cityData);
        }
    })

    return leastRainfallArray;
}

// console.log(leastRainfall(climateData, "August"));
//!!END


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ leastRainfall ];
