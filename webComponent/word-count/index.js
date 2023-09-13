class WordCount extends HTMLParagraphElement {
  constructor() {
    super();

    const parent = this.parentNode;
    const count = `Words: ${countWords(parent)}`;
    const shadow = this.attachShadow({ mode: 'open' });
    const text = document.createElement('span');

    text.textContent = count;
    shadow.appendChild(text);

    setInterval(() => {
      text.textContent = `Words: ${countWords(parent)}`;
    }, 300);

    function countWords(node) {
      const text = node.innerText || node.textContent;

      return text.trim().split(/\s+/g).filter(a => a.trim().length > 0).length;
    }
  }
}

customElements.define('word-count', WordCount, { extends: 'p' })
