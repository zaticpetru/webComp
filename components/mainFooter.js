import { EventBus } from '../eventBus.js';
import { LOGIN_EVENT } from '../eventNames.js';


export default class MainFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }


    render() {
        this.innerHTML = /*html*/`
        <footer>
            <h1>Footer</h1>
        </footer>
        `;

        EventBus.addEventListener(LOGIN_EVENT, event => {
            this.querySelector("h1").innerHTML += "test";
        });
    }
}

window.customElements.define('main-footer', MainFooter);