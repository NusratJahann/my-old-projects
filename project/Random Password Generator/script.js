var box = document.getElementById("password");
var length = document.getElementById("length");
var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getPassword() {
    var password = "";

    for (var i = 0; i <= length.value; i++) {
        var randomCharacters = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomCharacters, randomCharacters + 1);
    }
    box.innerText = password;
}

function copy(){
    var box1 = box.innerHTML;
    box1.cloneNode(true)
    alert(box.innerHTML + "Copied");
}

getPassword();