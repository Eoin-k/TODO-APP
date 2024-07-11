import { projectsArray } from "./projectStorage";

export const saveToLocal = (key,value) => {
     value = JSON.stringify(value)
    localStorage.setItem(key,value)
}

export const getFromLocal = (key) => {
    if(localStorage.getItem(key) === null){
        return []
    }
   let newArray= localStorage.getItem(key)
    let finalArray = JSON.parse(newArray)
    return finalArray
    }
