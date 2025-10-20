const avatar = document.querySelector('#avatar');

avatar.onclick = function () {
    avatar.src="image/avatar-bis.png";
    avatar.alt="new avatar";
}

const button = document.querySelector('.button');
const firstName = document.querySelector('#firstname'); 
const background = document.querySelector('.description');

button.addEventListener("click", function(event) {
    const newBackground = prompt("Enter a color :");  
    const newName = prompt("Enter your name :"); 
    firstName.innerHTML = newName;
    firstName.style.color = "white";
    background.style.backgroundColor = newBackground;
})