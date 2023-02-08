/*

Fix the function `adequateWaterTracker`. `adequateWaterTracker` should return
true if you drank water 4 or more days in each calendar week.

For example, in this week, [0, 0, 3, 1, 0, 4, 0], each day represents how many
cups of water you drank that day. In this example, there were only 3 days where
you drank at least one cup of water.

A calendar is represented by multiple weeks, 
[[0, 0, 3, 1, 0, 4, 0], [1, 2, 1, 2, 1, 3, 1]].

If you drank water for at least 4 days for every week in the calendar,
then return true. Otherwise, return false.


*/

function adequateWaterTracker(calendar) {
  let noWater = 0;
  let water = 0;
  for (let i = 0; i < calendar.length; i++) {
    const week = calendar[i];
    for (let j = 0; j < week.length - 1; j++) {
      const date = calendar[j]
      if (day === 0) {
        noWater++;
      } else {
        water++;
      }
    }
  }
  return noWater < water;
}

const calendar1 = [
  [0, 0, 3, 1, 0, 4, 0],
  [1, 2, 1, 2, 1, 3, 1],
];

console.log(adequateWaterTracker(calendar1)); // false

const calendar2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1],
];

console.log(adequateWaterTracker(calendar2)); // false

const calendar3 = [
  [1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
];

console.log(adequateWaterTracker(calendar3)); // true