var hex = document.getElementsByClassName("hex");
var colorBox = document.getElementsByClassName("colorbox");

function generator() {

    var symbols, color;
    symbols = "0123456789ABCDEF";

    color = "#";
    
    for(var i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)]
    }
    
    colorBox[0].style.backgroundColor = color;
    hex[0].innerHTML = color;

    color.select();
    navigator.clipboard.writeText(color.value);
}