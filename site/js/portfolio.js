const avatar = document.getElementById("avatar");

avatar.onclick = () => {
    avatar.src = "./image/avatar.svg"
};

const nameSpan = document.getElementById("firstname");

const button = document.createElement("button");
button.textContent = "Modify text and color";
button.style.paddingButtom = "1rem";

const section = document.querySelector(".pink-bg");
section.appendChild(button);

button.onclick = () => {
    const newName = prompt("Enter a new name:");
    const newColor = prompt("Enter a color")
    if (newName && newColor) {
        nameSpan.textContent = newName;
        nameSpan.style.color = "white";
        section.style.backgroundColor = newColor;
        document.documentElement.style.setProperty("--lightWildColor", newColor);
    }
};