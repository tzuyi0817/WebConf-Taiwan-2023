class ExpandingList extends HTMLUListElement {
  constructor() {
    super();
    const uls = Array.from(this.querySelectorAll('ul'));
    const lis = Array.from(this.querySelectorAll('li'));

    uls.forEach(ul => {
      ul.style.display = 'none';
    });

    for (const li of lis) {
      if (!li.querySelectorAll('ul').length) continue;
      li.setAttribute('class', 'closed');

      const childText = li.childNodes[0];
      const text = childText.textContent;
      const span = document.createElement('span');

      span.textContent = text;
      span.style.cursor = 'pointer';
      span.onclick = this.showUl;
      childText.parentNode.insertBefore(span, childText);
      childText.parentNode.removeChild(childText);
    }
  }
  showUl(event) {
    const nextUl = event.target.nextElementSibling;

    if (nextUl.style.display === 'block') {
      nextUl.style.display = 'none';
      nextUl.parentNode.setAttribute('class', 'closed');
    } else {
      nextUl.style.display = 'block';
      nextUl.parentNode.setAttribute('class', 'open');
    }
  }
}

customElements.define('expanding-list', ExpandingList, { extends: 'ul' });
