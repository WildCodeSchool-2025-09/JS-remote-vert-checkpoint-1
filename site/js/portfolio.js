// Step 1 part 2 

const avatar = document.querySelector(".avatar");

avatar.addEventListener("click", function () {
     avatar.src = "image/avatar.svg";
});

// Step 2, 3, 4 part 2

const button = document.querySelector("button");
const firstName = document.querySelector("#firstname");
const background = document.querySelectorAll(".pink-bg");
const textPink = document.querySelectorAll(".pink-text");

button.addEventListener("click", () => {
    newColor = prompt("Enter a color :");
    newName = prompt("Enter your name :");
    firstName.innerHTML = newName;
    firstName.style.color = "var(--light)";
    button.style.backgroundColor = newColor;

    background.forEach((element) => {
        element.style.backgroundColor = newColor;
    })

    textPink.forEach((element) => {
        element.style.color = newColor;
    })
});