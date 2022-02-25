export default class Button {
  constructor() {
    this.chat = document.getElementById('chat');
    this.button = document.querySelector('.chat__open');
    this.close = this.chat.querySelector('.chat__close');
    this.buttonToggle = true;
    this.reverse = false;
  }

  init() {
    this.buttonScale = this.button.style.transform;
    this.button.addEventListener('click', () => {
      this.chat.style.display = 'block';
      this.chat.classList.add('chat_animation');
      this.toggleChat();
    });
    this.close.addEventListener('click', (e) => {
      e.preventDefault();
      this.chat.style.display = 'block';
      this.chat.classList.add('chat_animation');
      this.toggleChat();
    });
    this.chat.addEventListener('animationend', () => {
      this.chat.classList.remove('chat_animation');
      this.chat.style.animationDirection = this.reverse ? 'normal' : 'reverse';
      this.chat.style.display = this.reverse ? 'none' : 'block';
      this.reverse = !this.reverse;
    });
  }

  toggleChat() {
    this.button.style.transform = (this.buttonToggle) ? 'scale(0, 0)' : this.buttonScale;
    this.buttonToggle = !this.buttonToggle;
  }
}
