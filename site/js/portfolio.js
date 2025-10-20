const myAvatar = document.querySelector('.my-avatar')
myAvatar.onclick=function() {
    myAvatar.src="./image/avatar.svg"
};


const modifyText = document.querySelector('.my-button');
const userName = document.getElementById('firstname');

modifyText.onclick=function() {
    const newName = prompt("What's your name ?")
    if (newName) {
        userName.innerHTML = newName;
        userName.style.color = "white";
    }
};
