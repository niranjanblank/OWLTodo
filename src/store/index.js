import { useEnv, useState, reactive } from "@odoo/owl";
import { TaskList } from "./TaskList";

export function createTaskStore(){
    return reactive(new TaskList())
}

export function useStore() {
    const env = useEnv()
    return useState(env.store)
}