import { Component, xml } from "@odoo/owl";
import { useStore } from "../store";

export class Task extends Component {
    static props = ['task']

    setup(){
        this.store = useStore()
    }
    
    deleteTask(){
        this.store.deleteTask(this.props.task)
    }

    static template = xml`
    <div class="rounded-xl my-2 py-2 px-5 w-1/2 bg-slate-800"
    t-att-class="props.task.isCompleted ? 'bg-green-400':''"
    >
        <t t-esc="props.task.text"/>
        <input type="checkbox" t-att-checked="props.task.isCompleted" t-on-click="toggleTask" />
        <span class="p-1 bg-red-500 rounded-lg"
        t-on-click="deleteTask"
        >Delete</span>
    </div>
    `

    toggleTask(){
        this.store.toggleTask(this.props.task)
    }

}