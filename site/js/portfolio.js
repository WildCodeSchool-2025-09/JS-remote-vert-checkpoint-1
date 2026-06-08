const activeAvatar = document.getElementById("avatar");

activeAvatar.addEventListener("click", function(){
   activeAvatar.src = "/site/image/avatar.svg";
});

const button = document.getElementById("prompt-name");
const name = document.getElementById("firstname");
const colorBG = document.getElementById('pinkBG');

button.addEventListener("click", function(){
    const newColor = prompt ('choose your color:')
        colorBG.style.backgroundColor = newColor;
    const userName = prompt ('Enter your name:')
        name.textContent = userName;
        name.style.color = "white";
});