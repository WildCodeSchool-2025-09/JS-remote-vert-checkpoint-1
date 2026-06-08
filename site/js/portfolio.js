
function changeImage() {
    document.querySelector('.avatar').src = "./image/avatar-bis.png";
}

function changeName() {

    const newColor = prompt("enter a color", '#750ff7');
    if (newColor) {
        document.querySelectorAll(".pink-bg").forEach(el => el.style.backgroundColor = newColor)
        document.querySelectorAll('.pink-text').forEach(el => el.style.color = newColor);
        document.querySelectorAll('a').forEach(el => el.style.color = newColor);
    }

    const newName = prompt("Enter you name:");
    if (newName) {
        const span = document.querySelector("#firstname");
        span.textContent = newName;
        span.style.color = 'white';
    }
}

