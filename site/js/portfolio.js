

const avatar = document.querySelector('.avatar-img')

avatar.addEventListener('click', () => {
    avatar.src = './image/avatar-bis.png'
});

const myName = document.querySelector('#firstname')
const modify = document.querySelector('.modify')
const colorModify = document.querySelectorAll('.description')
const pinkText = document.querySelectorAll(".pink-text")

modify.addEventListener('click', () => {
    const whatYouName = prompt("What your name?")

    if (whatYouName) {
    myName.textContent = whatYouName;
    myName.style.color = "white";
    }
    const writeColor = prompt ("enter your color")
    if(writeColor) {
        colorModify.forEach((element) => {
            element.style.backgroundColor = writeColor;
        });
        pinkText.forEach((element) => {
            element.style.color = writeColor;
        });
    }
});