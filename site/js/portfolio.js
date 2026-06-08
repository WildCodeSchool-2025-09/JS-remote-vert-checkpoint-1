
// As a user I can change the avatar image when I click on it

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

// As a user I can replace the text Matt on the paragraphe with your name and it's color with the color white

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