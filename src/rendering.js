import { saveToLocal } from "./localStorage";
import {
	currentId,
	projectsArray,
	addTaskRemovalListeners,
	addProjectRemovalListeners
} from "./projectStorage";

export const renderProjectList = (projectsArray) => {
	const list = document.querySelector(".project-list-wrapper");
	list.innerHTML = "";
	for(let i=0; i<projectsArray.length; i++) {
		list.innerHTML += `<li class="project-tab"><span id="${i}" class="project-item">${projectsArray[i].name}</span>
		<div><button class="delete-project" id="${i}">Delete this project</button></div>
		</li>`;
	};
	const projectTab = document.querySelectorAll(".project-item");
	projectTab.forEach((item) => {
		item.addEventListener(
			"click",
			(e) => {
				currentId = e.target.id;
				console.log("Pwew",currentId);
				renderTasks(currentId);
				saveToLocal("ID", currentId);
			},
			{ capture: true },
		);
	});

	renderTasks(currentId);
};

export const renderTasks = (currentId) => {
	const currentProject = projectsArray[currentId];
	const taskList = document.getElementById("tasklist");
	taskList.innerHTML = "";
	currentProject.tasks.forEach((task) => {
		taskList.innerHTML += `<div class="task-div">
        <div class="task-header">
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
        </div>
        </div>`;
	});
	addTaskRemovalListeners();
	addProjectRemovalListeners()
};
