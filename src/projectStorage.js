import { Project } from "./projects";
import { Task } from "./task";
import { closeTaskDialog } from "./forms";
import { renderProjectList, renderTasks } from "./rendering";
import { getFromLocal, saveToLocal } from "./localStorage";
export let projectsArray = getFromLocal("Projects");
console.log(projectsArray);
export let currentId = 0;


export function addNewProject() {
	const projectName = document.getElementById("project-name");
	let projectname = projectName.value;
	if (
		!projectsArray.find((storedProjects) => storedProjects.name === projectname)
	) {
		console.log(projectname + "LL");
		let newProject = new Project(projectname);
		projectsArray.push(newProject);
		console.log("Current Project Id =" );
		saveToLocal("Projects", projectsArray);
		saveToLocal("ID", currentId);
		renderProjectList(projectsArray);
	
	} else {
		alert("already Have a project of that Name");
		return;
	}
}

export const addTaskToProject = () => {
	const taskForm = document.getElementById("task-form");
	let currentProject = projectsArray[currentId];
	let title = taskForm.title.value;
	let description = taskForm.description.value;
	let dueDate = taskForm.duedate.value;
	let priority = taskForm.taskpriority.value;
	let status = taskForm.status.value;

	if (
		!currentProject.tasks.find((storedTasks) => storedTasks.title === title)
	) {
		let newT = new Task(title, description, dueDate, priority, status);
		currentProject.tasks.push(newT);
		saveToLocal("Projects", projectsArray);
		saveToLocal("ID", currentId);
		console.log(newT);
		renderTasks(currentId);
		closeTaskDialog()
		return;
	} else {
		alert("Task with same name already exists");
		return;
	}
};

export const addTaskRemovalListeners = () => {
	const removeBtn = document.querySelectorAll(".remove-btn");
	removeBtn.forEach((button) => {
		button.addEventListener("click", (e) => {
			let target = button.closest(".task-div");
			let getTaskTitle = target.querySelector(".task-title");
			let taskText = getTaskTitle.textContent;
			e.stopPropagation();
			removeTask(taskText);
		}),
			{ capture: true };
	});
};

export const addProjectRemovalListeners = () => {
	const removeBtn = document.querySelectorAll(".delete-project");
	removeBtn.forEach((button) => {
		button.addEventListener("click", (e) => {
			let target = e.target.id
			console.log("MEOW ", target)
			currentId = 0
			e.stopPropagation();
			removeProject(target)
		}),
			{ capture: true };
	});
};

export const removeTask = (task) => {
	let thisProject = projectsArray[currentId];
	let findTask = thisProject.tasks.findIndex((tsk) => tsk.title === task);
	thisProject.tasks.splice(findTask, 1);
	saveToLocal("Projects", projectsArray);
	renderTasks(currentId);
};

export const removeProject = (buttonid) => {
	projectsArray.splice(buttonid,1)
	console.log(projectsArray.slice(buttonid,1))
	saveToLocal("Projects", projectsArray);
	renderProjectList(projectsArray)
	console.log(projectsArray)
}
