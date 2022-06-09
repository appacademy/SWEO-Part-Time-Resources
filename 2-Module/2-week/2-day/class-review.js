class Task {
    static taskList = []; //tasklist belongs to the class Task, not the instance (object of laundry)
  
    static printTaskList() {
      console.log(this.taskList);
    }
  
    static addTask(task) {
      this.taskList.push(task);
    }
  
    constructor(taskDetail) {
      this.taskDetail = taskDetail;
      Task.addTask(this);
      this.taskList = Task.taskList; //created a property on the class instance .taskList to then ask `Task` class for its static taskList variable.
    }
  }
  
  const laundry = new Task('laundry');
  console.log(laundry) //this instance is just an  object. Objects have properties

  console.log(laundry.taskList); //this property does not exist inside our laundry object.