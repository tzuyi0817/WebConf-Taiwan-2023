class TabbedCustomElement extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById('tabbed-custom-element');

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const children = this.shadowRoot.children;
    const tabs = Array.from(children).reduce((result, element) => {
      element.getAttribute('part') && result.push(element);
      return result;
    }, []);

    tabs.forEach(tab => {
      tab.addEventListener('click', event => {
        tabs.forEach((tab) => {
          tab.part = 'tab';
        })
        event.target.part = 'tab active';
      });
    });
  }
}

customElements.define('tabbed-custom-element', TabbedCustomElement);
