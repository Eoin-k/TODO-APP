import {storeProjects, addTaskToProject} from "./projectStorage"



const submitbtn = document.getElementById("submit-btn")
const taskBtn = document.getElementById("new-task-btn");

taskBtn.addEventListener("click", addTaskToProject )
submitbtn.addEventListener("click", storeProjects);


