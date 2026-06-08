const avatar = document.querySelector(".presentation img");
avatar.addEventListener("click", () => {
  avatar.src = "./image/avatar-bis.png";
  avatar.alt = "new avatar";
});

const newName = document.querySelector("#btn-name");
const firstname = document.querySelector("#firstname");

newName.addEventListener("click", () => {
  const text = prompt("Quel est ton nom ?");
  firstname.textContent = text;
});
