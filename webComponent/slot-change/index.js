class SummaryDisplay extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById('summary-display-template');
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(template.content.cloneNode(true));

    const items = Array.from(this.querySelectorAll('li'));
    const descriptions = Array.from(this.querySelectorAll('p'));
    const slots = this.shadowRoot.querySelectorAll('slot');

    items.forEach(handleClick);
    slots[1].addEventListener('slotchange', (e) => {
      const nodes = slots[1].assignedNodes();
      console.log(`Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`);
    });

    function handleClick(item) {
      item.addEventListener('click', () => {
        items.forEach(item => {
          item.style.backgroundColor = 'white';
        });

        descriptions.forEach(description => {
          updateDisplay(description, item);
        });
      });
    }

    function updateDisplay(description, item) {
      description.removeAttribute('slot');

      if (description.getAttribute('data-name') === item.textContent) {
        description.setAttribute('slot', 'choice');
        item.style.backgroundColor = '#bad0e4';
      }
    }
  }
}

customElements.define('summary-display', SummaryDisplay);

