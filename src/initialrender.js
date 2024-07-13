import { projectsArray,addRemovalListeners } from "./projectStorage";
import { Project } from "./projects";
import { removeActiveClassOnTabs, renderProjectList} from "./rendering";
import { Task } from "./task";

export const initialRender = () => {
    if(projectsArray.length == 0){
        let nt = new Task("First Task","Super Important Task",new Date("2025/1/12"),"high","not done",new Date())
    let pro = new Project("Yearly Recruitment",0);
        pro.addTaskToProject(nt);
        projectsArray.push(pro)
        renderProjectList(projectsArray)
        
        return
    } else {
        renderProjectList(projectsArray)
        
}
}