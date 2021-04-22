import { EventBus } from './eventBus.js';
import MainHeader from './components/mainHeader.js';
import MainFooter from './components/mainFooter.js';
import MainContent from './components/mainContent.js';
import { LOGIN_EVENT } from '../eventNames.js';


class RootApp extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this._state = {
            "loggedIn" : false,
            "expenses" : ['first expense', 'second expense']
        }
        EventBus.addEventListener(LOGIN_EVENT, event => {
            console.log(event);
        });
    }

    set state(updatedState) {
        this._state = updatedState
    }

    get state() {
        return this._state
    }


    render() {
        this.innerHTML = /*html*/`
            <main-header></main-header>
            <main-content class="wrapper"></main-content>
            <main-footer></main-footer>  
        `;
    }
}

window.customElements.define('root-app', RootApp);