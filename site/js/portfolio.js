const imgAvatar = document.querySelector('.imgAvatar')

imgAvatar.addEventListener ('click', function() {
    imgAvatar.src = "image/avatar.svg";
    imgAvatar.alt = "smile";
});
const firstname = document.querySelector("#firstname")
function promptMe(){
    var firstname = prompt("Enter your name");
}

