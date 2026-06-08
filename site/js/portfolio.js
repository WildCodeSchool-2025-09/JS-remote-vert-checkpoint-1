const avatar = document.getElementById("avatar");
avatar.addEventListener("click", () => {
    let avatarChange = avatar.setAttribute("src", "image/avatar.svg")
});


const modifButton = document.getElementById("modif-button");
const firstName = document.getElementById("firstname");
const pinkBG = document.getElementById("pink");
const backgrounds = document.querySelectorAll(".pink-bg");
const texts = document.querySelectorAll(".pink-text");
modifButton.addEventListener("click", () => {
    let newBG = pinkBG.style.backgroundColor = prompt("Wich color ?");
    let newName = firstName.textContent = prompt("What\'s you name ?");
    firstName.style.color = "white";
    // with ai
    for (let i = 0; i < backgrounds.length; i++) {
        backgrounds[i].style.backgroundColor = newBG;
    }

    for (let i = 0; i < texts.length; i++) {
        texts[i].style.color = newBG;
    }

});

const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    links[i].style.color = "#750ff7";
}
const modifButton2 = document.getElementById("modif-button2");
modifButton2.addEventListener("click", () => {
    const UlLi = document.querySelectorAll("#front-dev-tools>li");
    UlLi[0].innerHTML = "VSCode";
    UlLi[1].innerHTML = "Github";
    UlLi[2].innerHTML = "Terminal";

});