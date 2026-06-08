const avatar = document.querySelector(".avatar")

avatar.addEventListener("click", () => {avatar.src = "image/avatar-bis.png"});




const bouton = document.querySelector("#bouton");

const name = document.querySelector("#firstname");


bouton.addEventListener("click", () => {
    const newName = prompt("enter your name");

    if (newName) {
    name.textContent = newName;
    name.style.color = "white"
  }
});
    


