 export class Project {
    constructor(name){
        this.name = name;
        this.tasks = []
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