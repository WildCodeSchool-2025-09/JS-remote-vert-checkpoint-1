let avatarImg = document.querySelector('.first-banner img')
avatarImg.addEventListener('click',()=>{
    avatarImg.src = "image/avatar-bis.png" 
})

let description = document.querySelector('.description')
let firstName = document.querySelector('#firstname')
let modifyingName = document.createElement('button')
modifyingName.innerText = 'Modifying text and color'
modifyingName.addEventListener('click', ()=> {
    firstName.innerText = prompt('What is your name ?')
    firstName.style.color = 'white'
    description.style.backgroundColor = '#750ff7'
})
description.appendChild(modifyingName)