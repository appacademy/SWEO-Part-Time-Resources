const Employee = require("./employee")

class Manager extends Employee {
	constructor(name, salary, title, manager, employees = []) {
		super(name, salary, title, manager)
		this.employees = employees
	}

	addEmployee = (employee) => {
		this.employees.push(employee)
	}

	calculateBonus(mult) {
		let bonus = (this.salary + this._totalSubSalary(this)) * mult
		return bonus
	}

	_totalSubSalary() {
		let sal = 0
		this.employees.forEach(e => {
			if (e instanceof Manager) sal += e.salary + e._totalSubSalary();
			else sal += e.salary;
		});
		return sal
	}
}

let manage1 = new Manager()
console.log(manage1)
module.exports = Manager

