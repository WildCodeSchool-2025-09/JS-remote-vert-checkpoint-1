const avatar = document.getElementById("avatar");
avatar.addEventListener("click", () => {
    let avatarChange = avatar.setAttribute("src", "image/avatar.svg")
});


const modifButton = document.getElementById("modif-button");
const firstName = document.getElementById("firstname");
const pinkBG = document.getElementById("pink");
const colors = document.getElementsByClassName("pinky");
modifButton.addEventListener("click", () => {
    let newBG = pinkBG.style.backgroundColor = prompt("Wich color ?");
    let newName = firstName.textContent = prompt("What\'s you name ?");
    firstName.style.color = "white";
    // colors.forEach(() => {
    //     if (backgroundColor !== undefined || backgroundColor !== null) {
    //         let newColors = colors.style.backgroundColor = newBG;
    //     }
    //     else if (color === "var(--lightWildColor)")
    //         let newBGColors = colors.style.color = newBG;
    // });

    // let newColors = colors.style.backgroundColor = newBG;
    // let newBGColors = colors.style.color = newBG;
    for (let i = 0; i < colors.length; i++) {
        let newColors = colors.style.backgroundColor = newBG;
        let newBGColors = colors.style.color = newBG;
    }

});