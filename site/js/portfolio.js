const img = document.querySelector(".Avatar-Bg");

img.addEventListener("click", function () {
    img.src = "image/avatar-bis.png";
});


const button = document.querySelector(".button");
const selectorName = document.getElementById("firstname");
const pinkBgBackground = document.querySelector(".pink-bg");



button.addEventListener("click", function () {
    const newName = prompt(" Enter your Name ")
    selectorName.style.color = "white";
    selectorName.textContent = newName;
    pinkBgBackground.style.backgroundColor = "#750ff7"
    document.documentElement.style.setProperty("--lightWildColor", "#750ff7");

});