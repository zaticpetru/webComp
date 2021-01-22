export default class CardComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = /*html*/`
            ${this.innerHTML}
        `;

        const header = this.getAttribute("header")
        if(header) {
            this.insertAdjacentHTML("afterbegin", `<h1>${header}</h1>`)
        }
    }
}

window.customElements.define('card-component', CardComponent);