const myAvatar = document.querySelector('.my-avatar')
myAvatar.onclick=function() {
    myAvatar.src="./image/avatar.svg"
};


const modifyText = document.querySelector('.my-button');
const userName = document.getElementById('firstname');
const bannerColor = document.querySelector('.pink-bg');

modifyText.onclick=function() {
    const newName = prompt("What's your name ?")
    const newColor = prompt("Enter a color ?")
    if (newName && newColor) {
        userName.innerHTML = newName;
        userName.style.color = "white";
        bannerColor.style.backgroundColor = newColor;
    }
};
