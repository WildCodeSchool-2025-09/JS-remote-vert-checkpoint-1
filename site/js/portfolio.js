const activeAvatar = document.getElementById("avatar");

activeAvatar.addEventListener("click", function(){
   activeAvatar.src = "/site/image/avatar.svg";
});

const button = document.getElementById("prompt-name");
const name = document.getElementById("firstname");

button.addEventListener("click", function(){
    const userName = prompt ('Enter your name:')
        name.textContent = userName;
        name.style.color = "white";
});