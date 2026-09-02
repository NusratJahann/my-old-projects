let clickMeHereBtn = document.getElementById("clickMeHere");
let inputField1 = document.getElementById("inputField1");
let inputField2 = document.getElementById("inputField2");
let sum = 0;
let paragraph = document.getElementById("paragraph").innerHTML(sum);


clickMeHereBtn.addEventListener("click",function b (){
    sum = parseInt(inputField1.value) + parseInt(inputField2.value);
    paragraph.innerHTML(sum)
})

