const image = document.getElementById("portrait");

image.addEventListener("click", () => {
  image.src = "../image/avatar-bis.png"; 
});


const element = document.getElementById("firstname");

element.addEventListener("click", () => {
  const nouveauNom = prompt("Quel est ton nom ?");
  if (nouveauNom) {
    element.textContent = nouveauNom;
     element.style.color = "white"
  }
});