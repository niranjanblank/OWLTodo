import { Component, xml, useState, useRef, onMounted } from "@odoo/owl";
import { Task } from "./Task";
export class Root extends Component {
  static components = { Task };

  setup(){
    const inputRef = useRef("add-input")
    
    onMounted(()=> inputRef.el.focus())
  }


  static template = xml`
    <div class="flex flex-col px-80 bg-zinc-900 min-h-screen text-white items-center">
    <div class="text-6xl font-bold">OWL Todo</div>
    <input 
    t-ref="add-input"
    class="rounded-lg border-solid  border-green-400 w-1/2 p-4"
    placeholder="Enter a new task" t-on-keyup="addTask"/>
    <t t-foreach="tasks" t-as="task" t-key="task.id">
        <Task task="task" />
    </t>
  
    </div>`;

    nextId = 1;
    tasks = useState([]);

    addTask(ev){
      if (ev.keyCode === 13){
        const text = ev.target.value.trim()
        ev.target.value = "";
        if(text){
          const newTask = {
            id: this.nextId++,
            text: text,
            isCompleted: false
          }
          this.tasks.push(newTask)
        }
  
      }
    }

}