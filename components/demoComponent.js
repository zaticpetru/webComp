export default class DemoComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = /*html*/`
            <style>
                .cardList {
                    padding-top: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .card {
                    display: flex;
                    position: relative;
                    flex-direction: column;


                    min-height: 250px;
                    padding: 1.5rem;

                    border: 3px solid var(--main-pale-accent-color);
                    border-radius: var(--main-border-radius) 3px;
                    background-color: var(--main-dark-accent-color);
                    box-shadow: -1rem -1rem 2rem #000000;

                    transition: .2s;
                }

                .card:hover {
                    transform: translateX(2rem);
                }

                .card:hover~.card {
                    transform: translateY(150px);
                }

                .card:not(:first-child) {
                    margin-top: -170px;
                }
            </style>
            <section class="cardList">
                <article class="card">
                    <header class="card-header">
                        <p>Some text in p</p>
                        <h2>Some text in card. Try this out</h2>
                    </header>
                </article>
                <article class="card">
                    <header class="card-header">
                        <p>Some text in p</p>
                        <h2>Some text in card. Try this out</h2>
                    </header>
                </article>
                <article class="card">
                    <header class="card-header">
                        <p>Some text in p</p>
                        <h2>Some text in card. Try this out</h2>
                    </header>
                </article>
                <article class="card">
                    <header class="card-header">
                        <p>Some text in p</p>
                        <h2>Some text in card. Try this out</h2>
                    </header>
                </article>
            </section>
        `;
    }
}

window.customElements.define('demo-component', DemoComponent);