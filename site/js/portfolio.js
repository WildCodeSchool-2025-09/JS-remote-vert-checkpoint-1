let avatarImg = document.querySelector('.first-banner img')
avatarImg.addEventListener('click',()=>{
    avatarImg.src = "image/avatar-bis.png" 
})

let description = document.querySelector('.description')
let firstName = document.querySelector('#firstname')
let modifyingName = document.createElement('button')
modifyingName.innerText = 'Modifying text and color'
modifyingName.addEventListener('click', ()=> {
    document.documentElement.style.setProperty("--lightWildColor",prompt('What color do you want'));
    firstName.innerText = prompt('What is your name ?')
    firstName.style.color = 'white'
    
  
})
description.appendChild(modifyingName)


let allA = document.querySelectorAll('a')
allA.forEach((element)=>element.style.color = '#750ff7')


let arrayTools = ['VSCode','GitHub','Terminal']
let modifyingTools = document.createElement('button')
modifyingTools.style.backgroundColor = '#750ff7'
modifyingTools.innerText ='Modify'
let sectionFront = document.querySelector('.front')
let allLiDevTools = document.querySelectorAll('#front-dev-tools li')

modifyingTools.addEventListener('click', () => {
    for (i = 0; i < allLiDevTools.length ; i++){
        allLiDevTools[i].innerText = arrayTools[i]
    }
})
sectionFront.appendChild(modifyingTools)
console.log(allLiDevTools)