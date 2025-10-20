/* selectionne ton image*/
const avatar = document.getElementById("avatar");

avatar.addEventListener("click", () => {
avatar.src ="image/avatar.svg";
})


/*change le nom dans la description*/
const changeNameBtn = document.getElementById("changeNameBtn");
const firstName = document.getElementById("firstName");
const section = document.getElementById("section");

changeNameBtn.addEventListener("click", () =>{
    const userName = prompt("Enter your name :");
     firstName.textContent =userName;

    const newColor = prompt("Enter a background color:", "#750ff7");
    section.style.setProperty("--lightWildColor") = newColor; 
});

