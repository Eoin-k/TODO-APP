import { Project } from "./projects";
import { Task } from "./task";
import { initialRender } from "./initialrender";
import { closeTaskDialog, closeProjectDialog, closeTaskEditDialog, showTaskEditDialog} from "./forms";
import { renderProjectList, renderTasks } from "./rendering";
import { getFromLocal, saveToLocal } from "./localStorage";
import { format } from "date-fns";
export let projectsArray = getFromLocal("Projects");
console.log(projectsArray);
export let currentId = getFromLocal("ID") 


export function addNewProject() {
	const projectName = document.getElementById("project-name");
	let projectname = projectName.value;
	if (
		!projectsArray.find((storedProjects) => storedProjects.name === projectname)
	) {
		console.log(projectname + "LL");
		let newProject = new Project(projectname);
		projectsArray.push(newProject);
		saveToLocal("Projects", projectsArray);
		saveToLocal("ID", currentId);
		renderProjectList(projectsArray);
		closeProjectDialog();
	
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
		renderTasks(currentId);
		closeTaskDialog()
		return;
	} else {
		alert("Task with same name already exists");
		return;
	}
};

export const addTaskRemovalListeners = () => {
	const removeBtn = document.querySelectorAll(".remove-task-btn");
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

export const addTaskEditListeners = () => {
	const editBtn = document.querySelectorAll(".edit-task-btn");
	editBtn.forEach((button) => {
		button.addEventListener("click", (e) => {
			let target = button.closest(".task-div");
			let taskid = target.id
			let title = target.querySelector(".task-title").textContent;
			let description = target.querySelector(".task-description").textContent;
			let priority = target.querySelector(".task-priority").value;
			let dueDate = target.querySelector(".task-duedate").textContent;
			dueDate = format(dueDate, "yyyy-MM-dd")
			let status = target.querySelector(".task-status").textContent;
			showTaskEditDialog(title,description,priority,dueDate,status,taskid)
		}),
			{ capture: true };
	});
};

export const addProjectRemovalListeners = () => {
	const removeBtn = document.querySelectorAll(".project-delete-button");
	removeBtn.forEach((button) => {
		button.addEventListener("click", (e) => {
			removeProject(e)
			e.stopPropagation();
		}),
			{ capture: true };
	});
};

export const removeTask = (task) => {
	if(confirm("Are you sure you want to delete this task?")){
	let thisProject = projectsArray[currentId];
	let findTask = thisProject.tasks.findIndex((tsk) => tsk.title === task);
	thisProject.tasks.splice(findTask, 1);
	saveToLocal("Projects", projectsArray);
	renderTasks(currentId);
	}
	else {
		return
	}
};

export const removeProject = (e) => {
	let buttonid = e.target.id
	if(confirm("Are you sure you want to delete this project?")){
	projectsArray.splice(buttonid,1)
	saveToLocal("Projects", projectsArray);
	renderProjectList(projectsArray)
	if (projectsArray.length === 0){
		initialRender()
	}
	}
	else {
		return
	}
}
