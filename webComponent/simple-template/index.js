class MyParagraph extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.getElementById('my-paragraph');
  
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-paragraph', MyParagraph);

const slottedSpan = document.querySelector('my-paragraph span');

console.log(slottedSpan.assignedSlot);
console.log(slottedSpan.slot);
