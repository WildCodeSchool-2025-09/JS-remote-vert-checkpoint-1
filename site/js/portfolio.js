imgAvatar = document.getElementById("avatar");
btnReplaceName = document.getElementById("replaceName");
firstName = document.getElementById("firstname");
changeColor = document.querySelectorAll(".pink-bg");
changeColorText = document.querySelectorAll(".pink-text");
changeColorLink = document.querySelectorAll("a");

btnModifyList = document.getElementById("modifyList");
listName = document.getElementById("front-dev-tools");


inputElement = document.getElementById("given-tools");
toolsListName = document.getElementById("toolsList");

let name;
let colorSelected;

imgAvatar.addEventListener("click", () => {
    imgAvatar.src = "./image/avatar.svg";
});

btnReplaceName.addEventListener("click", () => {

    colorSelected = prompt("Pick a color in hexadecimal");
    name = prompt("What is your name ?");
    firstName.innerHTML = name;
    firstName.style.color = "#FFF";

    changeColor.forEach(element => {
        element.style.backgroundColor = colorSelected;
    });

    changeColorText.forEach(element => {
        element.style.color = colorSelected;
    });

    changeColorLink.forEach(element => {
        element.style.color = colorSelected;
    });
});

btnModifyList.addEventListener("click", () => {
    listName.innerHTML = `<li>VSCode</li>
                          <li>GitHub</li>
                          <li>Terminal</li>`
});

function addDevToolsList() {
    toolsListName.innerHTML += `<li>${inputElement.value}</li>`
}