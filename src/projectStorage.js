import  {Project}  from "./projects";
import { Task } from "./task";
import { getFromLocal, saveToLocal} from "./localStorage"
import { renderProjectList,renderTasks } from "./rendering";
let projectId = 0
let currentId = 0
let projectsArray = []
console.log(currentId + " MEG");

const removeBtn = document.querySelectorAll(".remove-btn");
const projectName = document.getElementById("project-name")
export function storeProjects() {
    let projectname = projectName.value
    console.log(projectname)
    console.log(projectsArray)
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

export {projectId, currentId}