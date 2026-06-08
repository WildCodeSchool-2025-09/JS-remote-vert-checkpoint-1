
const changeName = document.querySelector('#firstname')

changeName.innerText = "Fabian"
changeName.style.color = "white"

const backgroundChange = document.querySelector('#changeBackground')
const backgroundColor = document.querySelectorAll('.description.pink-bg')
const textColor = document.querySelectorAll('.pink-text')
const firstName = document.querySelector('#firstname');

backgroundChange.addEventListener("click", () =>{
    const name = prompt("What is your name?");
    const color = prompt("Pick a color");

    firstName.innerText = name;
    
    backgroundColor.forEach(el => {
        el.style.backgroundColor = color;
    })

    textColor.forEach(el => {
        el.style.color = color;
    }) 


    const changePic = document.querySelector('.avatar img')
    changePic.src = "image/avatar.svg"
    changePic.alt = "new avatar"
})