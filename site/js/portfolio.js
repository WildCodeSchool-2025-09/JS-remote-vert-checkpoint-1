let avatar = document.querySelector(".avatar")

avatar.addEventListener("click", function() {
    avatar.src="image/avatar.svg"
    avatar.alt="illustration d'un bonhomme qui sourit" 
})


let description =document.querySelectorAll(".description.pink-bg")
let btnTextColor = document.querySelector(".modify-color-and-text")
let firstname = document.querySelector("#firstname")
let pinkText = document.querySelectorAll(".pink-text")


btnTextColor.addEventListener("click", function () {
  let newColor = prompt ("Enter a color")
  let newName = prompt("Enter your name")
      if (newColor && newColor.trim() !== ""){
        description.forEach(el => el.style.backgroundColor = newColor)
        btnTextColor.style.backgroundColor= newColor
        pinkText.forEach(el => el.style.color= newColor)
      }

      if (newName && newName.trim() !== ""){
        firstname.textContent = newName
        firstname.style.color = "white"
      }
  }
)