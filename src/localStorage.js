import { renderProjectList, renderTasks } from "./rendering";
import { Task } from "./task";
import { Project } from "./projects";
 

export const saveToLocal = (key,value) => {
     value = JSON.stringify(value)
    localStorage.setItem(key,value)
}

export const getFromLocal = (key) => {
    if(localStorage.getItem(key) == null){
         saveToLocal("ID",5)
         let nt = new Task("First Task","Super Important Task",new Date("2025/1/12"),"high","not done",new Date())
        let pro = new Project("Yearly Recruitment",0);
        pro.addTaskToProject(nt);
        projectsArray.push(pro)
        renderProjectList(projectsArray)
    }
    else {
   let newArray= localStorage.getItem(key)
    let projectsArray = JSON.parse(newArray)
    renderProjectList(projectsArray);
    }
    }