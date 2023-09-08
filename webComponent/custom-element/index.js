class PopUpInfo extends HTMLElement {
  #wrapper;
  #icon;

  constructor() {
    super();
    this.#init();
  }
  #init() {
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');

    this.wrapper = document.createElement('div');
    this.wrapper.setAttribute('class', 'wrapper');
    this.icon = document.createElement('span');
    this.icon.setAttribute('class', 'icon');
    this.icon.setAttribute('tabindex', 0);
    style.textContent = '.wrapper { color: #666666 }';

    shadow.appendChild(style);
    shadow.appendChild(this.wrapper);
    this.wrapper.append(this.icon);
  }
  connectedCallback() {
    const image = document.createElement('img');
    const imageUrl = this.hasAttribute('img') ? this.getAttribute('img') : 'img/default.png';
    const info = document.createElement('p');

    image.src = imageUrl;
    image.width = 200;
    this.icon.appendChild(image);
    info.setAttribute('class', 'info');
    info.textContent = this.getAttribute('text');
    this.wrapper.append(info);
    console.log('connected');
  }
  disconnectCallback() {
    console.log('disconnected');
  }
  adoptedCallback() {
    console.log('adopted');
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log({ name, oldValue, newValue });
  }
}

customElements.define('popup-info', PopUpInfo);
