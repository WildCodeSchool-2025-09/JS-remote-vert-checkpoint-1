/* selectionne ton image*/
const avatar = document.getElementById("avatar");

avatar.addEventListener("click", () => {
avatar.src ="image/avatar.svg";
})


/*change le nom dans la description*/
const changeNameBtn = document.getElementById("changeNameBtn");
const firstName = document.getElementById("firstName");

changeNameBtn.addEventListener("click", () =>{
    let userName = prompt("What's your name ?");
    firstName.textContent =userName;
})

