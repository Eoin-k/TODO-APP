import {formatRelative, format, subDays} from "date-fns"
class Task {
    constructor(title,description,dueDate,priority,status,created){
        this.title = title,
        this.description = description,
        this.dueDate = format(dueDate,'dd MMMM yyyy')
        this.priority = priority,
        this.status = status
        this.created = new Date()
    }
    getTitle() {
        return this.title
    }
    getDescription() {
        return this.description
    }
    getDueDate() {
        return this.dueDate
    }
    getPriority(){
        return this.priority
    }

    getStatus() {
        return this.status
    }
    getCreatedDate(){
        return this.created
    }
    setTitle(updatedTitle){
        this.title = updatedTitle
    }

    setDescription(newDescription){
        this.description = newDescription
    }

    setDueDate(newDate){
        this.dueDate = newDate
    }
    setPriority(newPriority){
        this.priority = newPriority
    }

    setStatus(newStatus){
        this.status = newStatus
    }
}
export {Task}