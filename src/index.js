import {
	addNewProject,
	addTaskToProject,
} from "./projectStorage";
import { initialRender } from "./initialrender";
import  './style.css';
const submitbtn = document.getElementById("submit-btn");
const taskBtn = document.getElementById("new-task-btn");

taskBtn.addEventListener("click", addTaskToProject);
submitbtn.addEventListener("click", addNewProject);

initialRender();
