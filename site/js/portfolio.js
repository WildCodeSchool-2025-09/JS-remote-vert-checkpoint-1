
function changeImage() {
    document.querySelector('.avatar').src = "./image/avatar-bis.png";
}

function changeName() {

    const newColor = prompt("enter a color", '#750ff7');
    if (newColor) {
        document.querySelector(".pink-bg").style.backgroundColor = newColor
    }


    const newName = prompt("Enter you name:");
    if (newName) {
        const span = document.querySelector("#firstname");
        span.textContent = newName;
        span.style.color = 'white';
    }


}