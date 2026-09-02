let string = "Lorem ipsum dolor amet";
let split = string.split('');
let count = 0;
const search = "m";

console.log(split);

for(let i in split){

    if(split[i] == search){
        count++;
    }

}

console.log(search, count);