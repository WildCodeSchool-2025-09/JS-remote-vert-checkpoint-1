const avatar = document.querySelector('#avatar');

avatar.onclick = function () {
    avatar.src="image/avatar-bis.png";
    avatar.alt="new avatar";
}

const button = document.querySelector('.button');
const firstName = document.querySelector('#firstname'); 
const background = document.querySelectorAll('.pink-bg');
const textColor = document.querySelectorAll('.pink-text');

button.addEventListener("click", function(event) {
    const newColor = prompt("Enter a color :");  
    const newName = prompt("Enter your name :"); 
    firstName.innerHTML = newName;
    firstName.style.color = "white";
    for(let i = 0 ; i < background.length ; i++) {
        background[i].style.backgroundColor = newColor;
    }
    for(let i = 0 ; i < textColor.length ; i++) {
        textColor[i].style.color = newColor;
    }
})