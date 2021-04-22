import { EventBus } from '../eventBus.js';
import { LOGIN_EVENT } from '../eventNames.js';

export default class LoginComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = /*html*/`
            <form action=# method="post">
                <h1>Sign In</h1>
                <section>
                    <label for="email">Email</label>
                    <input id="email" type="email" placeholder="" autocomplete="username">
                </section>
                <section>        
                    <label for="current-password">Password</label>
                    <input id="current-password" name="current-password" type="password" autocomplete="current-password" aria-describedby="password-constraints" required>
                </section>
                <button id="signIn">Sign in</button>
            </form>
        `;
        
        this.querySelector('#signIn').addEventListener('click', event => {
            event.preventDefault();
            EventBus.dispatchEvent(LOGIN_EVENT, {some_inf: "confidential information"});
        });
    }
}

window.customElements.define('login-component', LoginComponent);