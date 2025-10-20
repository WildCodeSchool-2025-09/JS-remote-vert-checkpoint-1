const avatar = document.querySelector(".banner img");

avatar.addEventListener("click", () => (avatar.src = "image/avatar.svg"));

const nameBtn = document.querySelector("#name-btn");
const firstName = document.querySelector("#firstname");

nameBtn.addEventListener("click", () => {
  const name = prompt("Enter your name:");
  firstName.textContent = name;
  firstName.style.color = "white";
});
