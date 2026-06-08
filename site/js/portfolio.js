
// Step 1

const avatar = document.querySelector(".avatar");
const pathSrc = "./image/avatar-bis.png"; 
const pathAltSrc = "./image/avatar.svg"; 

avatar.addEventListener("click", () => {
    if (avatar.getAttribute('src') === pathSrc) {
        avatar.src = "./image/avatar.svg"
    } else {
        avatar.src = "./image/avatar-bis.png"
    };    
});

// Step 2 - 4

const firstName = document.querySelector("#firstname");
const modifyButton = document.querySelector("#modify-text-and-color");

modifyButton.addEventListener("click", () => {
    const givenColor = prompt("Choose a color");
    const givenName = prompt("What's your name?");
    firstName.innerHTML = givenName;
    firstName.style.color = "white";
    if (givenColor === "#750ff7") {
        document.querySelector(".description").classList.toggle("violet-bg");
    }
});

// Step 5

const links = document.querySelectorAll("a");
const modifyButtonLinks = document.querySelector("#modify-color-of-links");

modifyButtonLinks.addEventListener("click", () => {
    links.forEach(link => {
        link.style.color = "#750ff7";
    })
});

// Step 6

const emptyFrontToolsContainer = document.querySelector("#front-dev-tools");
const modifyButtonTools = document.querySelector("#modify-text-of-tools");
const toolsList = ["VSCode", "Github", "Terminal"];

modifyButtonTools.addEventListener("click", () => {
    emptyFrontToolsContainer.innerHTML = "";
    toolsList.forEach(tool => {
        emptyFrontToolsContainer.innerHTML += "<li>" + tool + "</li>"
    })
});

// Step 7

const emptyBackToolsContainer = document.querySelector("#back-dev-tools");
const addButtonTools = document.querySelector("#add-text-in-tools");

addButtonTools.addEventListener("click", () => {
    const givenTool = prompt("Add a tool");
    emptyBackToolsContainer.innerHTML += "<li>" + givenTool + "</li>"
});