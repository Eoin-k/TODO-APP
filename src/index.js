import {Project} from "./projects";
import {storeProjects, projectsArray,currentId,projectId, addTaskToProject} from "./projectStorage"
import { Task } from "./task";
import { renderProjectList,renderTasks } from "./rendering";


const submitbtn = document.getElementById("submit-btn")
const taskBtn = document.getElementById("new-task-btn");

taskBtn.addEventListener("click", addTaskToProject )
submitbtn.addEventListener("click", storeProjects);
 let nt = new Task("First Task","Super Important Task",new Date(2025,9,12),"high","not done",new Date())
 console.log(nt);
 console.log(nt.getDescription());
let pro = new Project("Tittties",0);
pro.addTaskToProject(nt);
projectsArray.push(pro)
console.log(pro)
console.log(pro.tasks)
console.log(pro.tasks[0].title)
console.log(pro.tasks[0].description)
console.log(pro.tasks[0].priority)
console.log(pro.tasks[0].created)
console.log(projectsArray)
renderProjectList(projectsArray);


