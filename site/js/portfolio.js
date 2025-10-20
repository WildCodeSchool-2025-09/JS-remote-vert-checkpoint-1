const avatar = document.getElementById("imglogo")

avatar.addEventListener("click", () => {
avatar.src = "image/avatar-bis.png"
})

const firstname = document.getElementById("firstname")

const button = document.getElementById("buttonModification")

button.addEventListener("click", () => {
    firstname.style.color = "white";
    firstname.textContent= prompt("Renseignez votre nom")
})