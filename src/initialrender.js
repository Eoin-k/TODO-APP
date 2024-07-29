import { projectsArray, currentId, } from "./projectStorage";
import { Project } from "./projects";
import { renderProjectList} from "./rendering";
import { Task } from "./task";

export const initialRender = () => {
    if(projectsArray.length == 0){
    let nt = new Task("First Task","Super Important Task",new Date("2025/1/12"),"high","not done",new Date())
    let pro = new Project("Yearly Recruitment",0);
        pro.tasks.push(nt);
        projectsArray.push(pro)
        console.log("THE ID is ", currentId)
        console.log("PROJECTS ARR = ", projectsArray)
        renderProjectList(projectsArray)
        const tabWrapper = document.querySelectorAll(".project-tab")
	    tabWrapper[currentId].classList.add("active-project-tab")
        return
    } else {
        renderProjectList(projectsArray)
        
}
}