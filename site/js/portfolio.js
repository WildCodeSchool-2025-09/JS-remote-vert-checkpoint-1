// Step 1 part 2 

const avatar = document.querySelector(".avatar");

avatar.addEventListener("click", function () {
     avatar.src = "image/avatar.svg";
});

// Step 2 part 2

const button = document.querySelector("button");
const firstName = document.querySelector("#firstname");

button.addEventListener("click", () => {
    newName = prompt("Enter your name :");
    firstName.innerHTML = newName;
    firstName.style.color = "var(--light)";
});