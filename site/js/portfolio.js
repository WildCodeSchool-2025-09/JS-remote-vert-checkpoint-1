const avatarImg = document.querySelector('#avatar-image')

avatarImg.addEventListener('click', () => {
    avatarImg.src === "image/avatar.svg" ? avatarImg.src = 'image/avatar-bis.png' : avatarImg.src = "image/avatar.svg";
})

const firstName = document.querySelector('#firstname');
const btn = document.querySelector('#text-color');
const description = document.querySelector('.pink-bg');
const pinkText = document.querySelector('body');
const links = document.querySelectorAll('a');

btn.addEventListener('click', e => {
    const yourName = prompt('whats your name')
    firstName.innerText = yourName;
    firstName.style.color = 'white'
    description.style.backgroundColor = '#750ff7'
    pinkText.style.color = '#750ff7';
    links.style.color = '#750ff7';
    description.style.backgroundColor = '#750ff7'
})

const devTools = ['VS Code', 'GitHub', 'Terminal'];

const btnModify = document.querySelector('#dev-tools')
const devToolUl = document.querySelector('#front-dev-tools')

btnModify.addEventListener('click', (e) => {
    devToolUl.innerHTML = "";
    devTools.forEach((indx) => {
        const newLi = document.createElement('li')
        newLi.innerText = indx;
        devToolUl.appendChild(newLi)
    })
})

const form = document.querySelector('#user-form');
const userList = document.querySelector('#user-list')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const i = document.querySelector('#tool');
    createNewItem(i.value);
    i.value = "";
}) 

function createNewItem(arg) {
    const newItem = document.createElement('li');
    newItem.innerText = arg;
    userList.appendChild(newItem)
}
