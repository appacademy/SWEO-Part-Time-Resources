// const Manager = require("./manager")

class Employee{
    constructor(name, salary, title, manager = null){
        this.name = name
        this.salary = salary
        this.title = title
        this.manager = manager
        if(manager) manager.addEmployee(this)
    }

    calculateBonus(multiplier) {
        return this.salary * multiplier
    }
}
// let spinter = new Manager('spinter', 10000, 'something')
// let james = new Employee('james', 10000000, 'teach', spinter)
// console.log(james)
module.exports = Employee