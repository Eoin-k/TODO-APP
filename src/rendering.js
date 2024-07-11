import { saveToLocal } from "./localStorage";
import {
	currentId,
	projectsArray,
	addRemovalListeners,
} from "./projectStorage";

export const renderProjectList = (projectsArray) => {
	const list = document.querySelector(".project-list-wrapper");
	list.innerHTML = "";
	projectsArray.forEach((project) => {
		list.innerHTML += `<li class="project-tab"><span id="${project.id}" class="project-item">${project.name}</span></li>`;
	});
	const projectTab = document.querySelectorAll(".project-tab");
	projectTab.forEach((item) => {
		item.addEventListener(
			"click",
			(e) => {
				currentId = e.target.id;
				console.log(currentId);
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
	addRemovalListeners();
};
