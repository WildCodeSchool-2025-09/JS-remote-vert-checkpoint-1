const avatar = document.querySelector(".banner img");
const src1 = "image/avatar-bis.png";
const src2 = "image/avatar.svg";

avatar.addEventListener(
  "click",
  () => (avatar.src = avatar.src.includes(src1) ? src2 : src1)
);

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

const backBtn = document.querySelector("#back-btn");
const input = document.querySelector("input");
const toolList = document.querySelector("#tool-list");

backBtn.addEventListener("click", addTool);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTool();
  }
});

function addTool() {
  const newLi = document.createElement("li");
  newLi.textContent = input.value;
  toolList.appendChild(newLi);
  input.value = "";
  input.focus();
}
