const avatar = document.querySelector('.Banner img');

avatar.addEventListener('click', function() {
  avatar.src = 'image/avatar.svg';
});

const firstname = document.querySelector('#firstname');
const button = document.querySelector('#change-name');

button.addEventListener('click', function() {
  const name = prompt('Quel est ton prénom ?'); 
  if (name) {
    firstname.textContent = name;
    firstname.style.color = 'white';
  }

const color = prompt('Quelle couleur de background ? (ex: #750ff7)');
if (color) {
  document.querySelector('.pink-bg').style.backgroundColor = color;
  document.querySelector('footer').style.backgroundColor = color;

  const pinkTexts = document.querySelectorAll('.pink-text');
  for (let i = 0; i < pinkTexts.length; i++) {
    pinkTexts[i].style.color = color;
  }
}
});