import  {Project}  from "./projects";
export let projectsArray = [];
// function addToArray (project) {
//     projectsArray.push(project)
// }
const projectvalue = document.getElementById("project-name")
export function storeProjects() {
    let projectname = projectvalue.value
    console.log(projectname)
    let newProject = new Project(projectname)
    projectsArray.push(newProject);
    console.log(projectsArray)
}
