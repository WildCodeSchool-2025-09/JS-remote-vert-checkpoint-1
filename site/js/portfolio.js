const avatar = document.getElementById("imglogo")

avatar.addEventListener("click", () => {
avatar.src = "image/avatar-bis.png"
})

const firstname = document.getElementById("firstname")

const button = document.getElementById("buttonModification")

const backgroundBanner = document.querySelectorAll(".description.pink-bg")

console.log(backgroundBanner)

button.addEventListener("click", () => {
    firstname.style.color = "white";
    firstname.textContent= prompt("Renseignez votre nom");
    const color = prompt("Choisissez une couleur")
    backgroundBanner.forEach(banner => {banner.style.backgroundColor = color;})
})