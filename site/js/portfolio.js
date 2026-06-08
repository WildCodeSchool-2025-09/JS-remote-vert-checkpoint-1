const avatar = document.getElementById("avatar");
avatar.addEventListener("click", () => {
    let avatarChange = avatar.setAttribute("src", "image/avatar.svg")
});


const modifButton = document.getElementById("modif-button");
const firstName = document.getElementById("firstname");
modifButton.addEventListener("click", () => {
    let newName = firstName.textContent = prompt("What\'s you name ?");
    firstName.style.color = "white";
});