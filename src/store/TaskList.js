export class TaskList {
    nextId = 1;
    tasks = [];

    addTask(text){
        text = text.trim()
        if(text){
            const task = {
                id: this.nextId++,
                text: text,
                isCompleted: false
            }
            this.tasks.push(task)
        }
    }


    toggleTask(task){
        task.isCompleted = !task.isCompleted
    }

    deleteTask(task){
        const index = this.tasks.findIndex((t) => t.id === task.id)
        this.tasks.splice(index,1)
    }
}