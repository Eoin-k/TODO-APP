import { addTaskToProject, addNewProject,projectsArray,currentId } from "./projectStorage";
import { saveToLocal } from "./localStorage";
import { renderTasks } from "./rendering";
const taskDialog = document.getElementById("task-dialog")
const projectDialog = document.getElementById("new-project-dialog")
const taskEditDialog = document.getElementById("task-update-dialog")


// Showing & hiding of all dialogs
export const showTaskEditDialog = (title,description,priority,dueDate,status,id) => {
	taskEditDialog.showModal()
	newEditTaskForm(title,description,priority,dueDate,status,id)
}

export const closeTaskEditDialog = () => {
	taskEditDialog.close()
}
  export const showTaskDialog = () => {
    taskDialog.showModal();
    newTaskForm()
}
export const closeTaskDialog = () => {
	taskDialog.close();
}
export const showProjectDialog = () => {
    projectDialog.showModal();
	newProjectForm()
    
}
export const closeProjectDialog = () => {
    projectDialog.close()
}

const newProjectForm = () => {
    projectDialog.innerHTML =
    `<form id="project-form" action="" method="">
            <div class="project-form-header">
            <label for"new-project">Enter your new project name</label>
			<input name="new-project" type="text" id="project-name" />
            </div>
			<button class="btn-primary" id="submit-btn" type="button">Add Project</button>
			<button class="close-btn" onclick="closeProjectDialog">Close</button>`
            const submitbtn = document.getElementById("submit-btn");
            submitbtn.addEventListener("click", addNewProject);
            
}

 const newTaskForm = () => {
	
    taskDialog.innerHTML = 
    `<form id="task-form" action="" method="">
				<label for="title">Enter task name</label>
				<input type="text" name="title" id="task-title" />
				<label for="taskpriority">Task Priority</label>
				<select name="taskpriority" id="task-priority">
					<option value="Low">Low</option>
					<option value="Medium">Medium</option>
					<option value="High">High</option>
					<option value="Urgent">Urgent</option>
				</select>
				<label for="duedate">When is this task due?</label>
				<input name="duedate" type="date" id="due-date" />
				<label for="status">Task Status</label>
				<select name="status" id="status">
					<option value="Not Started">Not Started</option>
					<option value="In Progress">In Progress</option>
					<option value="On hold">On Hold</option>
					<option value="Completed">Completed</option>
				</select>
				<label for="description">Enter task description:</label>
				<textarea
					name="description"
					cols="14"
					rows="3"
					id="task-description"
				></textarea>
				<button class="btn-primary" id="new-task-btn"type="button">Add new task</button>
							<button class="close-btn" onclick="closeTaskDialog">Close</button>
			</form>`
            const taskBtn = document.getElementById("new-task-btn");
	taskBtn.addEventListener("click", addTaskToProject);
}

 const newEditTaskForm = (title,description,priority,dueDate,status,taskid) => {
	
	taskEditDialog.innerHTML = 
    `<form data-id="${taskid}" id="task-edit-form" action="" method="">
				<label for="title">Edit task name</label>
				<input value="${title}"type="text" name="title" id="task-title" />
				<label for="taskpriority">Task Priority</label>
				<select selected="${priority}" name="taskpriority" id="task-priority">
					<option value="Low">Low</option>
					<option value="Medium">Medium</option>
					<option value="High">High</option>
					<option value="Urgent">Urgent</option>
				</select>
				<label for="duedate">When is this task due?</label>
				<input value="${dueDate}" name="duedate" type="date" id="due-date" />
				<label for="status">Task Status</label>
				<select value="${status}"name="status" id="status">
					<option value="Not Started">Not Started</option>
					<option value="In Progress">In Progress</option>
					<option value="On hold">On Hold</option>
					<option value="Completed">Completed</option>
				</select>
				<label for="description">Edit task description:</label>
				<textarea
					name="description"
					cols="14"
					rows="3"
					id="task-description"
				>${description}</textarea>
				<button class="btn-primary" id="edit-task"type="button">Update Task</button>
							<button class="close-btn" onclick="closeTaskEditDialog">Close</button>
			</form>`
            const taskBtn = document.getElementById("edit-task");
	 	taskBtn.addEventListener("click", (e) => {
			const taskEditForm = document.getElementById("task-edit-form");
	let currentProject = projectsArray[currentId];
	let currentTask = currentProject.tasks[taskid]
	currentTask.title = taskEditForm.title.value;
	currentTask.description = taskEditForm.description.value;
	currentTask.dueDate = taskEditForm.duedate.value;
	currentTask.priority = taskEditForm.taskpriority.value;
	currentTask.status = taskEditForm.status.value;
	saveToLocal("Projects", projectsArray);
		saveToLocal("ID", currentId);
		closeTaskEditDialog();
		renderTasks(currentId)
		});
 }