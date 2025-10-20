const imageAvatar = document.getElementById('monavatar');
imageAvatar.addEventListener('click', () => {
    imageAvatar.src = "image/avatar.svg";

});

function changename() {
    let button = document.getElementById('namebutton');
    button.addEventListener('click', () => {
        let newname = prompt('What\'s your name ?')
        let newcolor = prompt('Enter a color :\nby exemple #750ff7 ')
        replacename = document.getElementById('firstname');
        replacename.textContent = newname;
        replacename.style.color = 'white';
        replacecolor = document.getElementsByClassName('pink-bg');
        for (let i = 0; i < replacecolor.length; i++) {
            replacecolor[i].style.backgroundColor = newcolor;
        }
    });
}
