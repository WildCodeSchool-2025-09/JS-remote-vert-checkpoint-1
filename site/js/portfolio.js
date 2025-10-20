const avatar = document.getElementById("avatar");

avatar.onclick = () => {
    avatar.src = "./image/avatar.svg"
};

const nameSpan = document.getElementById("firstname");

const button = document.createElement("button");
button.textContent = "Modify text and color";
button.style.marginTop = "1rem";

const section = document.querySelector(".pink-bg");
section.appendChild(button);

button.onclick = () => {
    const newName = prompt("Enter a new name:");
    if (newName) {
        nameSpan.textContent = newName;
        nameSpan.style.color = "white";
        section.style.backgroundColor = "#750ff7";
    }
};