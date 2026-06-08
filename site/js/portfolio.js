const avatar = document.querySelector(".avatar")

avatar.addEventListener("click", () => {avatar.src = "image/avatar-bis.png"});




const bouton = document.querySelector("#bouton");

let name = document.querySelector("#firstname");


bouton.addEventListener("click", () => {
    let newName = prompt("enter your name");

    name.textContent = newName;
});
    


