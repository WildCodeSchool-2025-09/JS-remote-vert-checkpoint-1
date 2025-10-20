const avatar = document.getElementById("avatar");

if (avatar) {
  avatar.addEventListener("click", () => {
    avatar.src = "image/avatar.svg";
  });
}
