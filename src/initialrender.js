import { currentId, projectsArray, projectId } from "./projectStorage";
import { Project } from "./projects";
import { renderProjectList, renderTasks } from "./rendering";
import { Task } from "./task";

export const initialRender = () => {
    const list = document.querySelector(".project-list-wrapper")
    const newItem = document.createElement("li");
    if(projectsArray.length == 0){
        let nt = new Task("First Task","Super Important Task",new Date("2025/1/12"),"high","not done",new Date())
    let pro = new Project("Yearly Recruitment",0);
        pro.addTaskToProject(nt);
        console.log(projectsArray)
        projectsArray.push(pro)
        renderProjectList(projectsArray)
        return
    } else {
        renderProjectList(projectsArray)
        renderTasks(currentId);
}
}