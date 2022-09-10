# The JavaScript Date Object

JavaScript's built-in `Date` object is an object that represents a single moment
in time. Specifically, it represents the number of milliseconds that have
elapsed since January 1, 1970, Coordinated Universal Time (UTC).

Using the `Date` object to represent dates and times is useful because it
provides methods for calculating time differences, managing date and time
formats, and conversion across time zones. While there are other packages that
provide this type of functionality, the built-in `Date` object can accomplish
the most common tasks without installing any additional dependencies.

## Components of the `Date` Class

The JavaScript `Date` object is just another example of Object-Oriented
Programming! Each `Date` object is an instance of the `Date` class. The class
has a constructor, and many static and instance methods that allow you to
interact with the date and time data represented by the object. Review the
pseudocode below before exploring the constructor and methods in more detail in
the next sections.

```javascript
// THIS IS NOT RUNNABLE CODE: Pseudocode to help visualize the Date class

class Date {
    // 1. Constructor:
    constructor() { // accepts 0, or 2-7 arguments
        // ...
        // returns a new Date object instance
    }

    // 2. Many static methods, including:
    static now() {
        // returns an instance of the current date and time
    }


    // 3a. Many instance getter and setter methods, such as:
    getFullYear() {
        // returns the 4-digit year of the specified date
    }

    setFullYear() {
        // sets the 4-digit year of the specified date
    }

        // **Similar getter and setter methods also exist for hours, minutes, etc.

    // 3b. Many instance methods to format date and times, such as:
    toString() {
        // returns a string representing the date instance
    }

    toDateString() {
        // returns the date portion of the date object as a string
    }

    toTimeString() {
        // returns the time portion of the date object as a string
    }

    // ...and many more!
}
```

## 1. The Constructor

You can create a an instance of the `Date` object in two ways.

1. Use the `new` keyword to create a new instance of the `Date` object:

When invoked with no arguments, this returns an object with the current date and
time (at your current location):

```javascript
const date = new Date();

console.log(date);
// Thu Jul 07 2022 14:04:19 GMT-0400 (Eastern Daylight Time)
    // **object data type, NOT string
```

More frequently, the constructor is invoked with arguments to create an instance
of a specific date and time. There are various options for the number of
arguments that can be passed in, as well as the format of the arguments passed
in.

For the most straightforward implementation, you can pass in integer arguments
representing individual date and time components, in the following order:

- year (REQUIRED)
- monthIndex (REQUIRED, and zero-indexed)
- day (optional)
- hours (optional)
- minutes (optional)
- seconds (optional)
- milliseconds (optional)

Examine the examples below:

```javascript
// with year, monthIndex, day, hours, minutes, seconds, and milliseconds arguments
    const fullDateAndTime = new Date(1999, 11, 25, 20, 35, 37, 12)
    // Sat Dec 25 1999 20:35:37 GMT-0500 (Eastern Standard Time)

// with only year and monthIndex arguments
    const partialDate = new Date(2000, 00)
    // Sat Jan 01 2000 00:00:00 GMT-0500 (Eastern Standard Time)
```

2. Call `Date()` as a function with no arguments, to return a string of the
   current date and time (at your current location):

```javascript
const date = Date();
// "Thu Jul 07 2022 10:26:39 GMT-0400 (Eastern Daylight Time)"
// **string data type
```
_Note: Since this method returns a string and not the `Date` object, it is not
very flexible. The first method above is more flexible, and therefore, is the
recommended approach when using arguments or when invoking the constructor with
no arguments to get the current date and time._

Learn more about the [constructor] in the MDN docs.

## 2. Static Method (`Date.now()`)

The `Date.now()` method is the most commonly used static method in the `Date`
class. Use this method to get the current date and time when you do not need a
human-readable format, or when you are planning to do a lot of calculations or
manipulation of the date and time. This method returns a large integer
representing the number of milliseconds since Janury 1, 1970, UTC. Although it
is difficult for us to decipher, this format is easy for computers to work with.

```javascript
const now = Date.now()
// 1657218635104    // the number of milliseconds since Janury 1, 1970, UTC
```

Since there are multiple ways to create an instance of the current data and
time, think carefully about your goals and preferred output before choosing to
use `new Date()`, `Date.now()`, or `Date()`.

## 3. Instance Methods

There are far too many `Date` class instance methods to explore in this article,
but they can generally be sorted into two categories: methods that help you get
or set dates and times, and methods that help you format dates and times.

See the documentation for [instance methods] for the full list and description
of each method, and read below for some general information about the two
varieties of instance methods.

### 3a. Getters and Setters

Getter and setter methods are provided for all of the components of the date
object: year, month, day, hour, minute, second, and millisecond components.

It is important to note that these methods, such as `getHours()`, return the
desired information for the local time zone. There are other methods, such as
`getUTCHours()`, which will return the desired information in universal time.

```javascript
const date = new Date(1999, 11, 25, 20, 35, 37, 12)
// Sat Dec 25 1999 20:35:37 GMT-0500 (Eastern Standard Time)

const hours = date.getHours()           // 20
const hoursUTC = date.getUTCHours()     // 1    (5 hours offset from local time)
```

### 3b. Formatting Dates and Times

When working with dates and times, sometimes you need human-readable formats to
render for users, and sometimes you need formats that support manipulation. The
formatting methods make it easy to convert dates and times across formats.

Some commonly-used methods include `toString()`, `toDateString()`, and
`toTimeString()`. These methods format a date object (or specific portion of a
date string) into a human-readable string.

```javascript
const date = new Date(1999, 11, 25, 20, 35, 37, 12)
// Sat Dec 25 1999 20:35:37 GMT-0500 (Eastern Standard Time)

const fullDateTimeString = date.toString()
// "Sat Dec 25 1999 20:35:37 GMT-0500 (Eastern Standard Time)"
const dateString = date.toDateString()
// "Sat Dec 25 1999"
const timeString = date.toTimeString()
// "20:35:37 GMT-0500 (Eastern Standard Time)"
```

Check out the [instance methods] documentation for more information about the
differences between these methods and their outputs.

## Learn More

There are many other specific use cases and additional methods related to the
`Date` object. Check out the [MDN Documentation for Date] to learn more.

[MDN Documentation for Date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[constructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
[instance methods]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#instance_methods