import { saveToLocal } from "./localStorage";
import { currentId, projectsArray } from "./projectStorage";

 export const renderProjectList = (projectsArray) => {
    console.log(projectsArray)
    const list = document.querySelector(".project-list-wrapper")
    console.log("Banana", projectsArray)
    list.innerHTML = ""
    projectsArray.forEach(project => {
        list.innerHTML += `<li class="project-tab"><span id="${project.id}" class="project-item">${project.name}</span></li>`
        })
        const newItem = document.querySelectorAll(".project-tab");
        newItem.forEach(item => { item.addEventListener("click", (e) => {
            currentId = e.target.id;
            console.log(currentId)
           renderTasks(currentId);
           saveToLocal("ID",currentId)
        },{capture: true})})
        
        renderTasks(currentId);
    }

 export const renderTasks = (currentId) => {
    const currentProject = projectsArray[currentId]
    const taskList = document.getElementById("tasklist")
    taskList.innerHTML = ""
    const taskItem = document.createElement("div")
    // console.log(currentProject.tasks)
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

