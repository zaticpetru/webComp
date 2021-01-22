export default class MainHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this._state = {};
    }

    set state(updatedState) {
        this._state = updatedState
    }

    get state() {
        return this._state
    }

    render() {
        this.innerHTML = /*html*/`
            <header>
                <h1>ExpenseTracker</h1>
            </header>
        `;
    }
}

window.customElements.define('main-header', MainHeader);