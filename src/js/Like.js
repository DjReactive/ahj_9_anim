export default class Like {
  constructor() {
    this.button = document.getElementById('button-like');
    this.div = document.getElementById('like-field');
  }

  init() {
    this.div.style.width = `${Number(this.button.offsetWidth) / 4}px`;
    this.div.style.zIndex = '99';
    this.div.style.bottom = `${String(Number(this.button.offsetHeight) / 3)}px`;
    this.button.addEventListener('click', () => this.createLike(this.div));
  }

  createLike(position) {
    const like = document.createElement('img');
    like.setAttribute('class', 'image-heart like-animation');
    like.setAttribute('src', 'images/heart.png');
    like.style.animationName = `likeGain${Like.getRandom()}`;
    position.appendChild(like);

    this.div.style.left = `${String(Number(this.button.offsetWidth) / 2
    - (Number(like.offsetWidth) / 2))}px`;

    like.addEventListener('animationend', (e) => e.target.remove());
  }

  static getRandom() {
    return (Math.trunc(Math.random() * 4) + 1);
  }
}
