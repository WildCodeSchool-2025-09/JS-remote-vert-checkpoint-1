const avatar = document.querySelector(".banner img");

avatar.addEventListener("click", () => (avatar.src = "image/avatar.svg"));

const nameBtn = document.querySelector("#name-btn");
const firstName = document.querySelector("#firstname");
const coloredBgs = document.querySelectorAll(".pink-bg");
const coloredTexts = document.querySelectorAll(".pink-text");

nameBtn.addEventListener("click", () => {
  const newBgColor = prompt("Enter a color:");
  coloredBgs.forEach((element) => (element.style.backgroundColor = newBgColor));
  coloredTexts.forEach((element) => (element.style.color = newBgColor));

  const name = prompt("Enter your name:");
  firstName.textContent = name;
  firstName.style.color = "white";
});
