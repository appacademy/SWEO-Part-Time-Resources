// 4 ways to create a date object
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

// by default utc + 8
const currentDate = new Date();
// console.log(currentDate)
// 24 hour clock
// const birthday = new Date(1992, 1, 17);
// console.log(birthday)

const getTimeNow = Date.now()
// console.log(getTimeNow)

const getTomorrow = 1650130619215 + ( 24 * 3600 * 1000)
// console.log(getTomorrow)
// console.log(new Date())
// console.log(new Date(getTomorrow))

const dateString = new Date('02 Feb 1992 08:00:00 UTC')

// console.log(dateString)

class Birthday {
    constructor(year, month, day){
        this.birthday = new Date(year, month -1, day)
        this.obligationStart = 8
        this.obligationEnd = 10
        this.newObligations = []
    }
    // Want to make a method that will check our current obligations
    // if the new obligation time does not conflict we will add to the
    // this.obligation array
    addObligation(date){
        // console.log(this)
        // console.log(date)
        // checking if the passed in time is withing our hard coded obligation time

		// console.log(date.getHours(), ' date hours')
		// console.log(date.getHours(), ' date hours')

        if(date.getHours() >= this.obligationStart && date.getHours() <= this.obligationEnd){
            throw new Error("Sorry Im Busy Then") // if the passed in date is within that time, we say we are busy by throwing an error
        }
        // check if the passed in date in is in our new obligations array
        if(this.newObligations.includes(date)){
            throw new Error("Sorry Im Busy Then") // if the passed in date is already in my obligations I will throw an error
        }
        // we are going to check if the passed in date is before my birthday

		// console.log(date.getMonth() - 1)
		// console.log(this.birthday.getMonth())

        if(date.getDate() < this.birthday.getDate() || (date.getMonth() - 1) < this.birthday.getMonth()){
            throw new Error("Sorry, that is before my birthday") // if it is then we are gong to throw an error because we only want things on my birthday
        }
        // We are going to check if the passed in date is in the future
        if(date.getDate() > this.birthday.getDate() || (date.getMonth() - 1) > this.birthday.getMonth()){
            throw new Error("Sorry, that is after my birthday") // if it is in the future we cannot schedule it
        }

		// console.log(date, 'date')
        this.newObligations.push(date) // if this date passes all of my if checks, we will schedule it.
    }

}

const date = new Date(1992, 3, 17, 7)

const birthday = new Birthday(1992, 2, 17)

// console.log(birthday)


// UTC: +8 hours
// console.log('date ===', date)
// birthday.addObligation(date)
// console.log(birthday)
// birthday.addObligation(date)

// console.log(birthday)

// console.log(Date.now())

// console.log(Date.parse('02 Feb 1992 08:00:00 UTC'))


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters
console.log(new Intl.DateTimeFormat('en-GB', {
	dateStyle: 'full', timeStyle: 'long', timeZone: 'Asia/Qatar',
}).format(date))
