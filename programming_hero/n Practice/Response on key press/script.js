let counter = 0;
const displayCounter = document.getElementById("counter")

document.body.addEventListener("keypress", (event) => {

    if(event.key == "Enter"){
        counter++;
        displayCounter.innerHTML = counter;
    } 
    else if(event.key == "-"){
        counter--;
        if(counter < 0){
            counter = 0;
        }
        displayCounter.innerHTML = counter;
    }

});