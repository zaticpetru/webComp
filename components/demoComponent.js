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
                    width: 90%;
                    min-width: 250px;

                    border: 3px solid var(--main-pale-accent-color);
                    border-radius: var(--main-border-radius) 3px;
                    box-shadow: -0.5rem -0.5rem 1.5rem #000000;
                    background-color: var(--main-dark-accent-color);

                    transition: .3s;
                }

                .card:hover {
                    transform: translateX(-2rem);
                    border-color: var(--main-light-accent-color);
                    border-radius: 3px var(--main-border-radius);
                }

                .card:not(:hover) {
                    background-color: var(--main-dark-accent-color);
                }

                .card:hover~.card {
                }

                .card:not(:first-child) {
                    margin-top: -170px;
                }

                .card.active {
                    display: block;
                    z-index: 1;
                    transform: translateX(2rem);

                    background-color: var(--main-accent-color);
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

        var cards = this.querySelectorAll(".card");
        cards.forEach(card => {
            card.classList.remove("active");
            card.addEventListener("click", event => activate(event))
        })

        function activate(event) {
            cards.forEach(card => {
                if(card == event.currentTarget){
                    if(!card.classList.contains("active")) {
                        card.classList.add("active");
                    } else {
                        card.classList.remove("active");
                    }
                }
            });
        }

        // var test = 0;
        // function yourFunction(){
        //     // do whatever you like here
        //     const cards = document.querySelectorAll(".card")

        //     var l = cards.length;
        //     cards.forEach(card => {
        //         card.classList.remove("active");
        //     })
        //     cards[test%l].classList.add("active");
        //     test += 1;
        //     setTimeout(yourFunction, 1500);
        // }
        
        // yourFunction();
    }
}

window.customElements.define('demo-component', DemoComponent);