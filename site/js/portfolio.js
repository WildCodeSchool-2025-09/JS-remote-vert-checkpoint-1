const imgAvatar = document.querySelector('#avatar');
const src1 = 'image/avatar.svg';
const src2 = 'image/avatar-bis.png';

imgAvatar.addEventListener('click', () => {
    console.log(imgAvatar.src);

    imgAvatar.src = imgAvatar.src == src2 ? src1 : src2;
});

const updateNameBtn = document.querySelector('#update-name');

updateNameBtn.addEventListener('click', () => {
    const newColor = prompt('Nouvelle couleur');
    const newName = prompt('Ton nom batard');

    const firstname = document.querySelector('#firstname');
    firstname.textContent = newName;
    firstname.style.color = 'white';

    document.documentElement.style.setProperty('--lightWildColor', newColor);
})