import { Component, xml } from "@odoo/owl";

export class Task extends Component {
    static props = ['task']
    
    static template = xml`
    <div class="rounded-xl my-2 py-2 px-5 w-1/2 bg-slate-800">
        <t t-esc="props.task.text"/>
    </div>
    `
}