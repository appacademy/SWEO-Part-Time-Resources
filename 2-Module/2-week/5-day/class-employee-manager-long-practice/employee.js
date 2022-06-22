class Employee {
  constructor (name,salary,title,manager = null){
      this.name = name;
      this.salary = salary;
      this.title = title;
      this.manager = manager;

      if(this.manager){
          manager.addEmployee(this)
      }
      // why can you build if statement in constructor function?
      // how do you ensure that manager class will connect to correct instance. for example
      // if the corresponding instance is not named using manager name, then this funciton
      // will break right?
  }
  calculateBonus(multiplier){
      return this.salary * multiplier
  }
}
const leo = new Employee('Leonardo', 90000, 'Ninja');
console.log(leo)

module.exports = Employee
module.exports = Employee