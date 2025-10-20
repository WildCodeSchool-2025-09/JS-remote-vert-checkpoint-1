const avatarImg = document.querySelector(".avatarImg");

avatarImg.addEventListener("click", () =>
avatarImg.src="image/avatar-bis.png");

// ----------------------

const btn = document.querySelector(".promptBtn");
const title = document.querySelector(".title");

btn.addEventListener("click", () => {
let userInput = prompt("Enter your name:")
if (userInput) {
    let currentText = title.textContent;
    let newText = currentText.slice(0, 7) + userInput + currentText.slice(12);
    title.textContent = newText;
  }
});
