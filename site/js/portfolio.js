const avatar = document.querySelector(".banner img");

avatar.addEventListener("click", () => (avatar.src = "image/avatar.svg"));

const nameBtn = document.querySelector("#name-btn");
const firstName = document.querySelector("#firstname");
const coloredBgs = document.querySelectorAll(".pink-bg");
const coloredTexts = document.querySelectorAll(".pink-text");
const links = document.querySelectorAll("a");

nameBtn.addEventListener("click", () => {
  const newBgColor = prompt("Enter a color:");
  coloredBgs.forEach((element) => (element.style.backgroundColor = newBgColor));
  coloredTexts.forEach((element) => (element.style.color = newBgColor));
  links.forEach((element) => (element.style.color = newBgColor));

  const name = prompt("Enter your name:");
  firstName.textContent = name;
  firstName.style.color = "white";
});

const frontBtn = document.querySelector("#front-btn");
const frontSkills = document.querySelectorAll("#front-dev-tools li");

frontBtn.addEventListener("click", () => {
  const customSkills = prompt(
    "Enter 3 front-end skills (separated by commas):"
  );
  let arrayOfSkills = customSkills.split(",");

  console.log(frontSkills);
  frontSkills.forEach((el, i) => (el.textContent = arrayOfSkills[i]));
});
