import './main.css';
import { mount } from "@odoo/owl";
import { Root } from "./components/Root";
import { createTaskStore } from './store';

const env = {
    store: createTaskStore()
}
mount(Root, document.body, {dev: true, env});