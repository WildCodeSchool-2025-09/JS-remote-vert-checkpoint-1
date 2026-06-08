const activeAvatar = document.getElementById("avatar");

activeAvatar.addEventListener("click", function(){
   activeAvatar.src = "/site/image/avatar.svg";
});

const button = document.getElementById("prompt-name");
const name = document.getElementById("firstname");
const colorBg = document.querySelectorAll("#pinkBG");
const pinkText = document.querySelectorAll(".pink-text");

button.addEventListener("click", function(){
    const newColor = prompt ('choose your color:')
     for (let j = 0; j < pinkText.length; j++){
        pinkText[j].style.color = newColor;
    }
    for (let i = 0; i < colorBg.length; i++){
        colorBg[i].style.backgroundColor = newColor;
     }
     
    const userName = prompt ('Enter your name:')
        name.textContent = userName;
        name.style.color = "white";
});