const imageAvatar = document.getElementById('monavatar');
imageAvatar.addEventListener('click', () => {
    imageAvatar.src = "image/avatar.svg";

});

function changename() {
    let button = document.getElementById('namebutton');
    button.addEventListener('click', () => {
        let newname = prompt('What\'s your name ?')
        replacename = document.getElementById('firstname');
        replacename.textContent = newname;
        replacename.style.color = 'white'
    });
}
