const Employee = require("./employee")

class Manager extends Employee {
	constructor(name, salary, title, manager, employees = []) {
		super(name, salary, title, manager)
		this.employees = employees
	}

	addEmployee = (employee) => {
		this.employees.push(employee)
	}

	calculateBonus(mult) { // overrides Employee version with polymorphism
		let bonus = (this.salary + this._totalSubSalary(this)) * mult // we know when this version of calcBonus is being used, it's on a Manager, so we use _totalSS to get all the employee salaries
		return bonus
	}

	_totalSubSalary() {
		let sal = 0
		this.employees.forEach(e => { // this is the manager object instance employee array
			if (e instanceof Manager) sal += e.salary + e._totalSubSalary(); // if there's sub managers with sub employees, recurse and "this" changes to the sub manager in the next call stack
			else sal += e.salary; // normal employee just needs to add salary
		});
		return sal
	}
}

let manage1 = new Manager()
console.log(manage1)
module.exports = Manager

