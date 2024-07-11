import { Project } from "./projects";
import { Task } from "./task";
import { renderProjectList, renderTasks } from "./rendering";
import { getFromLocal, saveToLocal } from "./localStorage";
export let projectsArray = getFromLocal("Projects");
console.log(projectsArray);
export let projectId = 0
	? projectsArray[projectsArray.length]
	: projectsArray[projectsArray.length - 1].id + 1;
export let currentId = 0;

export const addRemovalListeners = () => {
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

const projectName = document.getElementById("project-name");
export function addNewProject() {
	let projectname = projectName.value;
	if (
		!projectsArray.find((storedProjects) => storedProjects.name === projectname)
	) {
		console.log(projectname + "LL");
		let newProject = new Project(projectname, projectId);
		projectsArray.push(newProject);
		console.log("Current Project Id = " + projectId);
		saveToLocal("Projects", projectsArray);
		saveToLocal("ID", currentId);
		renderProjectList(projectsArray);
		projectId++;
		currentId = projectId;
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
		return;
	} else {
		alert("Task with same name already exists");
		return;
	}
};

export const removeTask = (task) => {
	let thisProject = projectsArray[currentId];
	let findTask = thisProject.tasks.findIndex((tsk) => tsk.title === task);
	thisProject.tasks.splice(findTask, 1);
	saveToLocal("Projects", projectsArray);
	renderTasks(currentId);
};
