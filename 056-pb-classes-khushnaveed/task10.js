/* ask 10: Create a TaskManager Class
Create a class called TaskManager.
Add a property:
tasks (an array of task names, starts empty)
Add methods:
addTask(task) - This method should add a task to the tasks array.
removeTask(task) - This method should remove a task from the tasks array if it exists.
getTasks() - This method should return all tasks in the tasks array as a string. */

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    this.tasks = this.tasks.filter((item) => item !== task);
  }

  getTasks() {
    return this.tasks;
  }
}

const taskManage = new TaskManager();

taskManage.addTask("do cooking");
taskManage.addTask("do cleaning");
console.log(taskManage.getTasks());

taskManage.removeTask("do cleaning");
console.log(taskManage.getTasks());
