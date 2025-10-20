let avatar = document.querySelector(".avatar")

avatar.addEventListener("click", function() {
    avatar.src="image/avatar.svg"
    avatar.alt="illustration d'un bonhomme qui sourit" 
})


let description =document.querySelectorAll(".description.pink-bg")
let btnTextColor = document.querySelector(".modify-color-and-text")
let firstname = document.querySelector("#firstname")
let pinkText = document.querySelectorAll(".pink-text")
let links = document.querySelectorAll("a")


btnTextColor.addEventListener("click", function () {
  let newColor = prompt ("Enter a color")
  let newName = prompt("Enter your name")
      if (newColor && newColor.trim() !== ""){
        description.forEach(el => el.style.backgroundColor = newColor)
        btnTextColor.style.backgroundColor= newColor
        pinkText.forEach(el => el.style.color= newColor)
        links.forEach(el => el.style.color= newColor)
      }
      if (newName && newName.trim() !== ""){
        firstname.textContent = newName
        firstname.style.color = "white"
      }
  }
)


let modifyTools = document.querySelector(".modify-tools")
let devTools = document.querySelector("#front-dev-tools")
const myDevTools = ["VSCode", "GitHub", "Terminal"]

modifyTools.addEventListener("click", function() {
  devTools.innerHTML = ""
  for (let i = 0; i < myDevTools.length; i++)
  { let li = document.createElement("li") 
  li.textContent = myDevTools[i]
  devTools.appendChild(li)
  }
})

const form = document.querySelector("#form");
let addInput = document.querySelector("#new-input")
let skill = document.querySelector("#dev-skills")

form.onsubmit = function (event){
event.preventDefault()
const newSkill = document.createElement("li")
newSkill.innerHTML = addInput.value;
skill.appendChild(newSkill);
addInput.value = ""

}
  
