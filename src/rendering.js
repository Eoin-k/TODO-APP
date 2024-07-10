import { currentId, projectsArray } from "./projectStorage";
 export const renderProjectList = (projectsArray) => {
    const list = document.querySelector(".project-list-wrapper")
    const newItem = document.createElement("li");
    newItem.addEventListener("click", (e) => {
        currentId = e.target.id;
       console.log(currentId)
       renderTasks(currentId);
    },{capture: true})
    projectsArray.forEach(project => {
        newItem.innerHTML = `<span id="${project.id}" class="project-item">${project.name}</span>`
        })
        list.append(newItem)
        
    }

const renderTasks = (currentId) => {
    const currentProject = projectsArray[currentId]
    const taskList = document.getElementById("tasklist")
    taskList.innerHTML = ""
    const taskItem = document.createElement("div")
    console.log(currentProject.tasks)
    currentProject.tasks.forEach(task => {
        taskItem.innerHTML += `<div class="task-header">
        <p>${task.title}</p>
        </div>`
        taskList.append(taskItem)
    })
    
   
}

