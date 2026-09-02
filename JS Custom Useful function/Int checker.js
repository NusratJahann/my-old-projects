function intChecker(input){
    let x = input;
    x = x % 10;
    x * 10;
    let y = x % 10;
    if(y == 0){
        console.log("integer")
    } else{
        console.log("float")
    }
}
intChecker(20.65);