let colors = [black, orange, red]

let btn = document.getElementById('button');

btn.addEventListener('click', function(){
    console.log(test);  
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('body')
    container.style.background = randomColor;
}