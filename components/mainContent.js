import CardComponent from './cardComponent.js';
import LoginComponent from './loginComponent.js';
import DemoComponent from './demoComponent.js';


export default class MainContent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }


    render() {
        this.innerHTML = /*html*/`
        <main>
            <card-component header="Login card">
                <login-component></login-component>
            </card-component>
            <card-component header="Demo card">
                <demo-component></demo-component>
            </card-component>
        </main>
        `;
    }
}

window.customElements.define('main-content', MainContent);