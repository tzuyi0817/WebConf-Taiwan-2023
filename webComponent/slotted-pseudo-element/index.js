class PersonDetails extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.getElementById('person-template');
    const style = document.createElement('style');

    style.textContent = `
      div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }
      h2 { margin: 0 0 10px; }
      ul { margin: 0; }
      p { margin: 10px 0; }
      ::slotted(*) { color: gray; font-family: sans-serif; }
    `;

    shadow.appendChild(style);
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('person-details', PersonDetails);
