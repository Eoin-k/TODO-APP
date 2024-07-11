import { currentId, projectsArray } from "./projectStorage";
import { saveToLocal, getFromLocal} from "./localStorage";

console.log(projectsArray)
 export const renderProjectList = (projectsArray) => {
    const list = document.querySelector(".project-list-wrapper")
    const newItem = document.createElement("li");
    newItem.addEventListener("click", (e) => {
         currentId = e.target.id;
           renderTasks(currentId);
       saveToLocal("ID",currentId)
    },{capture: true})
    projectsArray.forEach(project => {
        newItem.innerHTML = `<span id="${project.id}" class="project-item">${project.name}</span>`
        })
        list.append(newItem)
        // console.log(currentId)
        renderTasks(currentId);
    }

 export function renderTasks(currentId) {
    const currentProject = projectsArray[currentId]
    const taskList = document.getElementById("tasklist")
    taskList.innerHTML = ""
    const taskItem = document.createElement("div")
    console.log(currentProject.tasks)
    currentProject.tasks.forEach(task => {
        taskItem.innerHTML += `<div class="task-header">
        <p class="task-title">${task.title}</p>
        </div>
        <div class="task-body">
        <p>${task.description}</p>
        <p>${task.dueDate}</p>
        <select> 
        <option selected>${task.priority}</option>
        </select>
        </div>
        <div class="button-wrapper">
        <button class="btn-primary remove-btn">Remove</button>
        </div>`
        taskList.append(taskItem)
    })
}
 renderTasks(currentId)