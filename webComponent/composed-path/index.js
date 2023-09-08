customElements.define('open-shadow', 
  class extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      const p = document.createElement('p');

      p.textContent = this.getAttribute('text');
      shadow.appendChild(p);
    }
  }
);

customElements.define('closed-shadow', 
  class extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'closed' });
      const p = document.createElement('p');

      p.textContent = this.getAttribute('text');
      shadow.appendChild(p);
    }
  }
);

document.querySelector('html').addEventListener('click', event => {
  console.log(event.composed);
  console.log(event.composedPath());
});
