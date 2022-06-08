class Task { //class is the base blueprint / template (like a factory)  that we can instantiate objects from
    static taskList = []; //static variables they belong to the Class (Task) itself, NOT the instances.

    static printTaskList() {
        console.log(this.taskList);
    }

    static addTask(task) { //static method
        this.taskList.push(task);
    }

    constructor(taskDetail) { //constructor
        this.taskDetail = taskDetail;
        Task.addTask(this);
        // console.log(Task.taskList)
    }

    printData(){ //instance method
        console.log("data"); 
    }
}

//instatiating an instance using the Task class:
const laundry = new Task('laundry'); //instance (instance is just an object) of the Task class.

console.log("what is laundry?:", laundry); //laundry is an instance
console.log(laundry.taskList); //laundry instance does not have access to the Class Task's static methods or variables.
console.log("taskList" in laundry);


// const laundryObj = {}

// console.log(laundryObj.taskList) //does a property, called `taskList` exists inside the laundryObj? // Therefore when we try landryObj.taskList it will yield us the value of `undefined`

// console.log("taskList" in laundryObj)