import  {Project}  from "./projects";
import { Task } from "./task";
import { renderProjectList,renderTasks } from "./rendering";
import { getFromLocal,saveToLocal} from "./localStorage"
export let projectsArray = getFromLocal("Projects")
console.log(projectsArray)
export let projectId = 0 ? projectsArray[projectsArray.length]  : (projectsArray[projectsArray.length-1].id + 1)
console.log(projectId)
export let currentId = 0
console.log( "ME", projectsArray)
// console.log("lol",projectsArray[projectsArray.length-1].id)

const removeBtn = document.querySelectorAll(".remove-btn");


const projectName = document.getElementById("project-name")
export function storeProjects() {
    let projectname = projectName.value
    if(!projectsArray.find(storedProjects => storedProjects.name === projectname)){
    console.log(projectname + "LL")
    let newProject = new Project(projectname,projectId)
    projectsArray.push(newProject);
    console.log("Current Project Id = " + projectId);
    saveToLocal("Projects",projectsArray);
    saveToLocal("ID",currentId)
    renderProjectList(projectsArray)
    projectId++
    currentId = projectId
}
else {
    alert("already Have a project of that Name")
    return;
}
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
    saveToLocal("Projects",projectsArray);
    saveToLocal("ID",currentId)
    console.log(newT);
    renderTasks(currentId);
}

export const removeTask = (task) => {
console.log(task + " lalalal")
}