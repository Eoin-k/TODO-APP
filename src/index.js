import {Project} from "./projects";
import {storeProjects, projectsArray} from "./projectStorage"
import { formatDate } from "date-fns";
import { Task } from "./task";

const taskForm = document.getElementById("task-form");
const submitbtn = document.getElementById("submit-btn")
const taskBtn = document.getElementById("new-task-btn");

taskBtn.addEventListener("click", (e) => {
    let currentProject = projectsArray[0]
    let title = taskForm.title.value
    let description = taskForm.description.value
    let dueDate = taskForm.duedate.value
    let priority = taskForm.taskpriority.value
    let status = taskForm.status.value
    let newT = new Task(title,description,dueDate,priority,status)
    currentProject.tasks.push(newT)
    console.log(currentProject)
})
submitbtn.addEventListener("click", storeProjects);
 let nt = new Task("First Task","Super Important Task",new Date(2025,9,12),"high","not done",new Date())
 console.log(nt);
 console.log(nt.getDescription());
let pro = new Project("Tittties");
pro.addTaskToProject(nt);
projectsArray.push(pro)
console.log(pro)
console.log(pro.tasks)
console.log(pro.tasks[0].title)
console.log(pro.tasks[0].description)
console.log(pro.tasks[0].priority)
console.log(pro.tasks[0].created)
pro.removeTask("First Task")
console.log(projectsArray)


