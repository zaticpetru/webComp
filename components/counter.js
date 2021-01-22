class Counter extends HTMLElement {
    constructor () {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    static get observedAttributes() {
        return ['count'];
    }

    get count() {
        return this.getAttribute('count');
    }

    set count(val) {
        this.setAttribute('count', val)
    }

    inc() {
        this.count++;
    }

    connectedCallback() {
        this.render();
        let btn = this.shadow.querySelector('#btn');
        btn.addEventListener('click', this.inc.bind(this));
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if(name === 'count') {
            this.render();
            let btn = this.shadow.querySelector('#btn');
            btn.addEventListener('click', this.inc.bind(this));
        }
    }

    

    render() {
        this.shadow.innerHTML = /*html*/ `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

            <h5>Counter</h5>
            ${this.count}
            <button id='btn'>Increment</button>
        `;
    }
}

window.customElements.define('my-counter', Counter);