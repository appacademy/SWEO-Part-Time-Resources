## Phase 6: Climate Stats

- Connect the `ClimateStats` component
  (`src/components/Greenhouse/ClimateStats.js`) to the `ClimateContext`.
- Display the temperature and humidity values here.

Congratulations! You've connected multiple components to context, created your
own context, created a provider for context with a dynamic value object, and a
custom React hook to return the value object from your context.

## Bonus Phase 1: Thermostat

In this bonus phase, whenever a user changes the desired temperature on the
thermostat, slowly change the value of the actual temperature on a timer at a
rate of 1 degree per second.

_Hint:_ Create a component state variable that tracks the desired temperature
displayed on the thermostat. Also create a `useEffect` with that state variable
as a dependency and a `setTimeout` function that changes the actual temperature
by 1 degree. The actual temperature should stop changing on the display when the
actual temperature equals the desired temperature. Make sure to include a
cleanup function in the `useEffect` that clears the timeout.

## Bonus Phase 2: Hygrometer

Like the previous phase, whenever a user changes the desired humidity on the
hygrometer, change the value of the actual humidity on a timer at a rate of 2
percent per second until it reaches the actual value.

[React Slider]: https://www.npmjs.com/package/react-slider