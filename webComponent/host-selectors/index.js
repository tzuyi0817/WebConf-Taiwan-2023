class ContextSpan extends HTMLElement {
  constructor() {
    super();

    const style = document.createElement('style');
    const span = document.createElement('span');
    const shadow = this.attachShadow({ mode: 'open' });

    span.textContent = this.textContent;
    style.textContent = `
      span:hover { text-decoration: underline; }
      :host-context(h1) { font-style: italic; }
      :host-context(h1):after { content: " - no links in headers!" }
      :host(.footer) { color : red; }
      :host { background: rgba(0,0,0,0.1); padding: 2px 5px; }
    `;

    shadow.appendChild(style);
    shadow.appendChild(span);
  }
}

customElements.define('context-span', ContextSpan);
