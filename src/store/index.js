import { useEnv, useState, reactive } from "@odoo/owl";
import { TaskList } from "./TaskList";

export function createTaskStore(){
    const saveTasks = () => localStorage.setItem("todoapp", JSON.stringify(taskStore.tasks))
    const initialTasks = JSON.parse(localStorage.getItem("todoapp") || "[]");
    const taskStore = reactive(new TaskList(initialTasks), saveTasks)
    saveTasks();
    return taskStore;
}

export function useStore() {
    const env = useEnv()
    return useState(env.store)
}