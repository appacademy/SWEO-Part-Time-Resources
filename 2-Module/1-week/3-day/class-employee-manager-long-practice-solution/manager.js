const Employee = require('./employee.js')

class Manager extends Employee {
    constructor(name, salary, title, manager){
        super(name, salary, title, manager)
        this.employees = []
    }

    addEmployee(employee){
        this.employees.push(employee)
    }

    calculateBonus(multipler){
        return (this.salary + this._totalSubSalary()) * multipler
    }

    _totalSubSalary(){
        let sum = 0
        this.employees.forEach(employee => {
           if(employee instanceof Manager){
            sum += employee.salary + employee._totalSubSalary()
           } else {
            sum += employee.salary
           }
        })
        return sum
    }
}


module.exports = Manager
