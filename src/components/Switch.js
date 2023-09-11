import { Component, useState, xml } from "@odoo/owl";
import './slider.css';

export class Switch extends Component {
 
    themeDark = useState({theme: true})

    changeTheme(){
        this.themeDark = !this.themeDark
        console.log(`Theme changed ${this.themeDark}`)
    }
    

    static template = xml`
    <label class="switch" >
    <input type="checkbox" t-on-click="changeTheme" />
     <span class="slider flex justify-between items-center px-2">
     <div>
     &#x263C;
     </div>
     <div class="text-2xl">
     &#x263E;
     </div>
     </span>
    <div class="theme-container">
            <div id="lightTheme" class="theme-box light"></div>
            <div id="darkTheme" class="theme-box dark hidden"></div>
        </div>
    </label>
    `


}