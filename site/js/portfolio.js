const avatar = document.querySelector('.avatar');

avatar.addEventListener('click', function () {
    avatar.src = "image/avatar.svg";
    avatar.alt = "autre image";

});
const changeName = document.getElementById('firstname');
const pinkText = document.querySelectorAll('.pink-text');
const pinkBackground = document.querySelectorAll('.pink-bg');

const button = document.getElementById('changeName');

button.addEventListener('click' , function() {
    let firstname = prompt("enter your name:");
    changeName.textContent = firstname;
    changeName.style.color = "white";

    let newColor = prompt("enter a color:");
    pinkText.forEach(function (element) {
        element.style.color = newColor;
    });
    pinkBackground.forEach(function (element) {
       element.style.background = newColor;
    });
});
  