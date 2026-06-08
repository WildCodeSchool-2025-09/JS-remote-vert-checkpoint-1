const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", function () {
    if (avatar.src.includes("avatar-bis.png")) {
        avatar.src = "image/avatar.svg";
    } else {
        avatar.src = "image/avatar-bis.png";
    }
});
const button = document.querySelector("#change-name");
const firstname = document.querySelector("#firstname");

button.addEventListener("click", function () {
    const newName = prompt("Enter your name:");

    if (newName) {
        firstname.textContent = newName;
        firstname.style.color = "white";
    }
}); const buttonColor = document.querySelector("#change-color");
const section = document.querySelector(".pink-bg");

buttonColor.addEventListener("click", function () {
    const newColor = prompt(
        "Type a color:",
        "#750ff7"
    );

    if (newColor) {
        section.style.backgroundColor = newColor;
    }
});