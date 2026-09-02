var input = document.getElementById("input");
var captche = document.getElementById("captche");
var btn = document.getElementById("enter");
var message = document.getElementById("message")

function captcheGen() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var random = "";

    for (var i = 0; i < 7; i++) {
        var randomChars = Math.floor(Math.random() * chars.length);
        random += chars.substring(randomChars, randomChars + 1);
    }

    captche.innerHTML = random;

}

captcheGen();

function who() {
    if (input.value === captche.innerHTML) {
        message.style.opacity = "1";
        message.style.color = "green";
        message.innerHTML = "Ok, your hooman";
    } else if (input.value == "") {
        message.style.opacity = "1";
        message.style.color = "red";
        message.innerHTML = "Please, type the captche";
    } else {
        message.style.color = "red";
        message.style.opacity = "1";
        message.innerHTML = "Sorry Mr. Robot, your are not allow!"
    }
}