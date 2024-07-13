import { addTaskToProject, addNewProject } from "./projectStorage";
const taskDialog = document.getElementById("task-dialog")
const projectDialog = document.getElementById("new-project-dialog")


// Showing & hiding of all dialogs
  export const showTaskDialog = () => {
    taskDialog.showModal();
    newTaskForm()
}
export const closeTaskDialog = () => {
	taskDialog.close();
}
export const showProjectDialog = () => {
    projectDialog.showModal();
    newProjectForm();
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
			<button style="background-color: red; color: white" onclick="closeProjectDialog">Close</button>`
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
			</form>`
            const taskBtn = document.getElementById("new-task-btn");
	taskBtn.addEventListener("click", addTaskToProject);
}