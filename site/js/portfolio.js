const avatar = document.querySelector('#avatar');

avatar.onclick = function () {
    avatar.src="image/avatar-bis.png";
    avatar.alt="new avatar";
}

const button = document.querySelector('.button');
const firstname = document.querySelector('#firstname'); 

button.addEventListener("click", function(event) {
    const newName = prompt("Enter your name :");   
    firstname.innerHTML = newName;
    firstname.style.color = "white";
})