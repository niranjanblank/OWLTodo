import { Component, xml, useState, useRef, onMounted } from "@odoo/owl";
import { Task } from "./Task";
import { useStore } from "../store";
export class Root extends Component {
  static components = { Task };

  setup(){
    const inputRef = useRef("add-input")
    onMounted(()=> inputRef.el.focus())
    this.store = useStore()
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
    <input 
    t-ref="add-input"
    class="rounded-lg border-solid text-gray-800 border-green-400 w-1/2 p-4"
    placeholder="Enter a new task" t-on-keyup="addTask"/>
    <t t-foreach="this.store.tasks" t-as="task" t-key="task.id">
        <Task task="task" />
    </t>
  
    </div>`;




}