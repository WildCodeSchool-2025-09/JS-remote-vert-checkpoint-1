const avatar = document.getElementById("avatar");
avatar.addEventListener("click", () => {
    let avatarChange = avatar.setAttribute("src", "image/avatar.svg")
});


const modifButton = document.getElementById("modif-button");
const firstName = document.getElementById("firstname");
const pinkBG = document.getElementById("pink");
const colors = document.querySelectorAll(".pink-text,.pink-bg")
modifButton.addEventListener("click", () => {
    let newBG = pinkBG.style.backgroundColor = prompt("Wich color ?");
    let newName = firstName.textContent = prompt("What\'s you name ?");
    firstName.style.color = "white";
    let newBgColors = colors.style.backgroundColor = newBG;
    let newTxtColors = colors.style.color = newBG;
});