customElements.define('person-detail',
  class extends HTMLElement {
    constructor() {
      super();
      
      const template = document.querySelector('#person-template');
      const shadow = this.attachShadow({ mode: 'open' });
      const style = document.createElement('style');

      style.textContent = `
        div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }
        h2 { margin: 0 0 10px; }
        ul { margin: 0; }
        p { margin: 10px 0; }
      `;

      shadow.appendChild(style);
      shadow.appendChild(template.content.cloneNode(true));
    }
  }
);

customElements.define('edit-word',
  class extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      const form = document.createElement('form');
      const input = document.createElement('input');
      const span = document.createElement('span');
      const style = document.createElement('style');

      style.textContent = 'span { background-color: #eef; padding: 0 2px }';

      shadow.appendChild(style);
      shadow.appendChild(form);
      shadow.appendChild(span);

      span.textContent = this.textContent;
      input.value = this.textContent;
      form.appendChild(input);
      form.style.display = 'none';
      span.style.display = 'inline-block';
      input.style.width = `${span.clientWidth}px`;
      this.setAttribute('tabindex', '0');
      input.setAttribute('required', 'required');
      this.style.display = 'inline-block';

      this.addEventListener('click', () => {
        span.style.display = 'none';
        form.style.display = 'inline-block';
        input.focus();
        input.setSelectionRange(0, input.value.length);
      });

      form.addEventListener('submit', event => {
        event.preventDefault();
        updateDisplay();
      });

      input.addEventListener('blur', updateDisplay);

      function updateDisplay() {
        span.style.display = 'inline-block';
        form.style.display = 'none';
        span.textContent = input.value;
        input.style.width = `${span.clientWidth}px`;
      }
    }
  }
);
