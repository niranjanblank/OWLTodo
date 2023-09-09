import { Component, xml, useState } from "@odoo/owl";
import { Task } from "./Task";
export class Root extends Component {
  static components = { Task };

  static template = xml`
    <div class="flex flex-col px-80 bg-zinc-900 min-h-screen text-white items-center">
    <div class="text-6xl font-bold">OWL Todo</div>
    <t t-foreach="tasks" t-as="task" t-key="task.id">
        <Task task="task" />
    </t>
  
    </div>`;

    tasks = [
        {
          id: 1,
          text: "buy milk",
          isCompleted: true,
        },
        {
          id: 2,
          text: "clean house",
          isCompleted: false,
        },
      ];

}