import { renderTasks } from "./rendering";

 export class Project {
    constructor(name,id){
        this.name = name;
        this.tasks = []
        this.id = id
    }

    getId(id){
        return id
    }
    addTaskToProject(task){
        if(!this.tasks.find(tsk => tsk.name === task.name)){
            this.tasks.push(task)
        }
        else{
            console.log(`${task.name} is already a part of this project`)
        }
    }
    removeTask(task){
       let findTask = this.tasks.findIndex(tsk =>tsk.title === task)
        this.tasks.splice(findTask,1)

    }
}