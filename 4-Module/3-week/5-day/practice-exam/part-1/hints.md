- for `npm test test/00-flightNumber-spec.js`
  - you can use the javascript Number method `isNaN` to check if the data is NOT a number
    - i.e. 
      - `isNaN("h")` --> true
      - `isNaN(1)` --> false

- for `npm test test/02-inService-spec.js`
  - our column rejects the data if it's not a boolean, but if we add a record, it will populate all the columns for that record (including this one). So the default value will be "null", but null is not allowed... so we need to change the default value to what?