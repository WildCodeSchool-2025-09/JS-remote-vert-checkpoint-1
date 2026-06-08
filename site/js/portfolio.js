const avatar = document.querySelector(".avatar")

avatar.addEventListener("click", () => {avatar.src = "image/avatar-bis.png"});




const bouton = document.querySelector("#bouton");

const name = document.querySelector("#firstname");

const color = document.querySelector(".pink-bg")

bouton.addEventListener("click", () => {
    const bgColor = prompt("choose color")
    const newName = prompt("enter your name");

    if (newName && bgColor) {
    name.textContent = newName;
    name.style.color = "white";
    color.style.backgroundColor = "#750ff7";
  } 
   
});
    


