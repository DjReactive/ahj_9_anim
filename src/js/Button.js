export default class Button {
  constructor() {
    this.button = document.getElementById('button-open');
    this.div = document.getElementById('button-message');
    this.divHeight = 500;
    this.toggle = false;
  }

  init() {
    this.divHeight = this.div.offsetHeight;
    this.showHide();
    this.div.style.opacity = 1;
    this.button.addEventListener('click', () => this.showHide());
  }

  showHide() {
    this.div.style.top = `${String(this.button.offsetHeight + this.button.offsetTop + 20)}px`;
    this.div.style.height = (this.toggle) ? `${this.divHeight}px` : '0';
    this.toggle = !this.toggle;
  }
}
