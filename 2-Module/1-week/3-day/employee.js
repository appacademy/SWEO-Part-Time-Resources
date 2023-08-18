class Employee {
	constructor(name, salary, title, manager = null){
		this.name = name;
		this.salary = salary;
		this.title = title;
		this.manager = manager;

		if (manager) {
			manager.addEmployee(this)
		}
	}

	calculateBonus(mult) {
		let bonus = this.salary * mult
		return bonus
	}
}

module.exports = Employee;
