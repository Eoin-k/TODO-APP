import  {Project}  from "./projects";
import { Task } from "./task";
import { renderProjectList,renderTasks } from "./rendering";
export let projectsArray = [];
export let projectId = 1
export let currentId = 0
const projectvalue = document.getElementById("project-name")
export function storeProjects() {
    let projectname = projectvalue.value
    console.log(projectname)
    let newProject = new Project(projectname,projectId)
    projectsArray.push(newProject);
    console.log(projectsArray)
    console.log("Current Project Id = " + projectId)
    renderProjectList(projectsArray)
    projectId++
    currentId = projectId
}

export const addTaskToProject = () => {
    const taskForm = document.getElementById("task-form");
    let currentProject = projectsArray[currentId]
    let title = taskForm.title.value
    let description = taskForm.description.value
    let dueDate = taskForm.duedate.value
    let priority = taskForm.taskpriority.value
    let status = taskForm.status.value
    let newT = new Task(title,description,dueDate,priority,status)
    currentProject.tasks.push(newT);
    renderTasks();
    console.log(currentProject)
}
