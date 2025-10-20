const myAvatar = document.querySelector('.my-avatar')
myAvatar.onclick=function() {
    myAvatar.src="./image/avatar.svg"
};


const modifyText = document.querySelector('.my-button');
const userName = document.getElementById('firstname');
const bannerColor = document.querySelectorAll('.pink-bg');
const textColor = document.querySelectorAll('.pink-text');

modifyText.onclick=function() {
    const newName = prompt("What's your name ?")
    const newColor = prompt("Enter a color ?")
    if (newName && newColor) {
        userName.innerHTML = newName;
        userName.style.color = "white";
        bannerColor.forEach(function(bannerFooterColor) {
            bannerFooterColor.style.backgroundColor = newColor;
        });
        textColor.forEach(function(textsColor) {
            textsColor.style.color = newColor;
        })
    }
};
