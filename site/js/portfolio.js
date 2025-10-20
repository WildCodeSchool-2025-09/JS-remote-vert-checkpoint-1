let avatarImg = document.querySelector("#avatar");

avatarImg.addEventListener("click", () => {
  if (avatarImg.src.includes("avatar-bis.png")) {
    avatarImg.src = "/site/image/avatar.svg";
  } else {
    avatarImg.src = "/site/image/avatar-bis.png";
  }
});

const firstnameSpan = document.querySelector("#firstname");
const modifyButton = document.querySelector("#modify-firstname");

modifyButton.addEventListener("click", () => {
  const newName = prompt("entrer a new firstname: ");
  if (newName) {
    firstnameSpan.textContent = newName;
    firstnameSpan.style.color = "white";
  }
});
console.log("JS chargé !");
