const employeeClass = require('./employee');
console.log(employeeClass)
class Manager extends employeeClass {
    constructor (name,salary,title,manager = null){
        super(name,salary,title,manager )
        // i feel this part is not very dry, but if I delete manager constructor name,
        // the super won't work
            this.employees = []
        }


        addEmployee(employee){
             this.employees.push(employee);

        }

        // the employees array is an array of instances;
        // add all subsalary together
        // we loop thru the employee array. if employee object is not manager, then we simple
        // add their salary to the sum. Otherwise, we call totalSubsalary method again.




        _totalSubSalary=()=>{
            console.log('hello0')
            // base case;
            let sum = 0;
            // using for loop
            console.log(this.employees.length)
            for(let i=0; i< this.employees.length; i++){
                console.log(i)
              let currentInstance = this.employees[i];
              if(currentInstance instanceof Manager){
                  console.log('hello1')
                  sum += currentInstance.salary + currentInstance._totalSubSalary()
              }
              else{
                  console.log('hello2')
                  sum += currentInstance.salary
              }
            }
            return sum
        }

        calculateBonus(multiplier){
            return (this.salary + this._totalSubSalary())*multiplier
        }

    }

module.exports = Manager;
