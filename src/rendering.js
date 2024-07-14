import { saveToLocal } from "./localStorage";
import {
	currentId,
	projectsArray,
	addTaskRemovalListeners,
	addProjectRemovalListeners,
	addTaskEditListeners
} from "./projectStorage";
import trash from './images/cil--trash.svg'
import edit from './images/mage--edit.svg'
import remove from './images/streamline--delete-1-solid.svg'
import { showTaskDialog,showProjectDialog } from "./forms";


export const renderProjectList = (projectsArray) => {
	console.log("BLEH,", currentId)
	const list = document.querySelector(".project-list-wrapper");
	list.innerHTML = "";
	for(let i=0; i<projectsArray.length; i++) {
		list.innerHTML += `<li id="${i}" class="project-tab"><span id="${i}" class="project-item">${projectsArray[i].name}</span>
		<div class="delete-project-wrapper"><button class="project-delete-button"><img id="${i}" src="${trash}"</button></div>
		</li>`;
	};
	const projectTab = document.querySelectorAll(".project-item");
	projectTab.forEach((item) => {
		item.addEventListener(
			"click",
			(e) => {
				removeActiveClassOnTabs()
				item.parentElement.classList.add("active-project-tab")
				currentId = e.target.id;
				console.log("Pwew",currentId);
				renderTasks(currentId);
				saveToLocal("ID", currentId);
			},
			{ capture: true },
		);
	});
	renderTasks(currentId)
	const tabWrapper = document.querySelectorAll(".project-tab")
	tabWrapper[currentId].classList.add("active-project-tab")
};

export const renderTasks = (currentId) => {
	const currentProject = projectsArray[currentId];
	const taskList = document.getElementById("tasklist");
	taskList.innerHTML = "";
	let count = 0
	currentProject.tasks.forEach((task) => {
		taskList.innerHTML += `<div id="${count}" class="task-div">
        <div class="task-header">
        <p class="task-title">${task.title}</p>
		<div class="button-wrapper">
        <button class="remove-task-btn"><img class="edit-img" src="${remove}"></button>
		<button id=${count} class="edit-task-btn"><img class="edit-img" src="${edit}"></button>
        </div>
        </div>
        <div class="task-body">
		<p class="task-duedate">Finish by: ${task.dueDate}</p>
        <p class="task-priority"> Priority: ${task.priority}</p>
        </div>
		<p class="task-status">Status: ${task.status}</p>
		<div class="description-wrapper">
		<p class="description-label">Description:</p>
        <p class="task-description">${task.description}</p>
		</div>
        </div>
		`;
		count++
	});
	const editingWrapper = document.getElementById("currently-editing")
	editingWrapper.textContent= currentProject.name
	

	// task button dialog 
	const newTaskBtn = document.getElementById("new-task")
	newTaskBtn.addEventListener("click",showTaskDialog)
	// new project dialog
	const newProjectBtn = document.getElementById("add-new-project")
	newProjectBtn.addEventListener("click", showProjectDialog)
	addTaskRemovalListeners();
	addTaskEditListeners()
	addProjectRemovalListeners()
};

 export function removeActiveClassOnTabs() {
	const projectLabels = document.querySelectorAll(".project-tab")
	for(let i = 0; i< projectLabels.length; i++ ){
		projectLabels[i].classList.remove("active-project-tab")
	}
}
