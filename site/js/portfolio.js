// Step 1 part 2 

const avatar = document.querySelector(".avatar");

avatar.addEventListener("click", function () {
     avatar.src = "image/avatar.svg";
});

// Step 2, 3, 4, 5 part 2

const buttonUser = document.querySelector(".user-modifications");
const buttonModify = document.querySelector(".modify-tools");
const buttonAdd = document.querySelector(".add-tools");
const firstName = document.querySelector("#firstname");
const background = document.querySelectorAll(".pink-bg");
const textPink = document.querySelectorAll(".pink-text");
const link = document.querySelectorAll("a");

buttonUser.addEventListener("click", () => {
    newColor = prompt("Enter a color :");
    newName = prompt("Enter your name :");
    firstName.innerHTML = newName;
    firstName.style.color = "var(--light)";
    buttonUser.style.backgroundColor = newColor;
    buttonModify.style.backgroundColor = newColor;
    buttonAdd.style.backgroundColor = newColor;
  
    background.forEach((element) => {
        element.style.backgroundColor = newColor;
    })

    textPink.forEach((element) => {
        element.style.color = newColor;
    })

    link.forEach((element) => {
        element.style.color = newColor;
    })
});

// Step 6 part 2

const listFrontDevTools = document.querySelector("#front-dev-tools");

buttonModify.addEventListener("click", () => {
    const newText = ["VSCode", "GitHub", "Terminal"];
    listFrontDevTools.innerHTML = "";

    newText.forEach((element) => {
        const itemList = document.createElement("li");
        itemList.textContent = element;
        listFrontDevTools.appendChild(itemList);
    })
});

// Step 7 part 2 

const toolsInput = document.querySelector("#new-dev-tools");
const listBackDevTools = document.querySelector("#back-dev-tools");

buttonAdd.addEventListener("click", () => {
    const newLi = document.createElement("li");
    newLi.textContent = toolsInput.value;
    listBackDevTools.appendChild(newLi);
    toolsInput.value = "";
})