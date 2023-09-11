class SimpleCustom extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const div = document.createElement('p');

    div.textContent = this.getAttribute('text');
    console.log(this.getAttribute('text'));
    shadow.appendChild(div);
  }
}

customElements.define('simple-custom', SimpleCustom);
