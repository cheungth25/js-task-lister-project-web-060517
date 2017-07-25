// Task Model
function createTask () {
return class {
  constructor(description, priority, list){
    this.description = description;
    this.priority = priority;
    this.id = list.tasks.length + 1 ;
    this.list = list;
  } //constructor

}; //class Task
}; //createTask

let Task = createTask();
