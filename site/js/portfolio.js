let avatarImg = document.querySelector('.first-banner img')
avatarImg.addEventListener('click',()=>{
    avatarImg.src = "image/avatar-bis.png" 
})

let description = document.querySelector('.description')
let firstName = document.querySelector('#firstname')
let modifyingName = document.createElement('button')
modifyingName.innerText = 'modifying text and color'
description.appendChild(modifyingName)