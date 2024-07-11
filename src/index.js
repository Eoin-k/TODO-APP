import {Project} from "./projects";
import {storeProjects, projectsArray, addTaskToProject} from "./projectStorage"
import { Task } from "./task";
import { renderProjectList, renderTasks } from "./rendering";
import { initialRender } from "./initialrender";


const submitbtn = document.getElementById("submit-btn")
const taskBtn = document.getElementById("new-task-btn");

taskBtn.addEventListener("click", addTaskToProject )
submitbtn.addEventListener("click", storeProjects);
 
initialRender();


