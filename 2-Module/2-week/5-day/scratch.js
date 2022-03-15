
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
        if(date.getHours() > this.obligationStart && date.getHours() < this.obligationEnd){
            throw new Error("Sorry Im Busy Then") // if the passed in date is within that time, we say we are busy by throwing an error
        }
        // check if the passed in date in is in our new obligations array
        if(this.newObligations.includes(date)){
            throw new Error("Sorry Im Busy Then") // if the passed in date is already in my obligations I will throw an error
        }
        // we are going to check if the passed in date is before my birthday
        if(date.getDate() < this.birthday.getDate()){
            throw new Error("Sorry, that is before my birthday") // if it is then we are gong to throw an error because we only want things on my birthday
        }
        // We are going to check if the passed in date is in the future 
        if(date.getDate() > this.birthday.getDate()){
            throw new Error("Sorry, that is after my birthday") // if it is in the future we cannot schedule it
        }
        this.newObligations.push(date) // if this date passes all of my if checks, we will schedule it.
    }
    
}

module.exports = Birthday



