const input = document.querySelector("input"),
counter = document.querySelector("h1");
input.onkeyup = ()=>{
    counter.innerHTML = input.value.length;
};