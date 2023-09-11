import { Component, xml, useState, useRef, onMounted } from "@odoo/owl";
import { Task } from "./Task";
import { useStore } from "../store";
import { Switch } from "./Switch";
export class Root extends Component {
  static components = { Task, Switch };

  setup(){
    const inputRef = useRef("add-input")
    onMounted(()=> inputRef.el.focus())
    this.store = useStore()
    this.filter = useState({value: "all"})
  }

  get displayedTasks() {
    const tasks = this.store.tasks
    switch (this.filter.value){
      case "active": return tasks.filter(t => !t.isCompleted)
      case "completed": return tasks.filter(t => t.isCompleted)
      case "all": return tasks
    }
  }

  setFilter(filter){
    this.filter.value = filter
  }
  

  addTask(ev){
    if (ev.keyCode === 13){
     this.store.addTask(ev.target.value)
     ev.target.value = ""
    }
    console.log(this.store)
  }




  static template = xml`
    <div class="flex flex-col px-80 bg-zinc-900 min-h-screen text-white items-center">
    <div class="text-6xl font-bold">OWL Todo</div>
    <Switch/>
    <input 
    t-ref="add-input"
    class="rounded-lg border-solid text-gray-800 border-green-400 w-5/6 p-4"
    placeholder="Enter a new task" t-on-keyup="addTask"/>
    <t t-foreach="displayedTasks" t-as="task" t-key="task.id">
        <Task task="task" />
    </t>
    <div t-if="store.tasks.length" class="flex flex-col">
        <div>
          <t t-esc="displayedTasks.length"/>
          <t t-if="displayedTasks.length lt store.tasks.length">
            / <t t-esc="store.tasks.length"/>
          </t>
        </div>
        <!-- filters -->
        <div class="flex gap-2">
          <span t-foreach="['all','active','completed']"
          t-as="f" t-key="f"
          t-att-class="f===this.filter.value? 'bg-green-400':''"
          class="bg-white text-zinc-900 p-1 rounded-md"
          t-on-click ="() => this.setFilter(f)"
          t-esc="f"
          />
        </div>
    </div>
  
    </div>`;




}