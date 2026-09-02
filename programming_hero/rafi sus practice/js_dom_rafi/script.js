// let classes =  document.getElementsByClassName("class");
//         let cnt = 0;
//         for(let i of classes){
//             cnt++;
//             if(cnt==3){
//                 console.log(i);
//             }
//         }
let blogs = document.getElementsByClassName('blog');
for (let blog of blogs) {
    blog.style.border = "3px solid orange";
    blog.style.borderRadius = '10px';
    blog.style.margin = "2px 2px 20px 2px"
}

function listGenerator(i, n) {

    //creating an element 
    let li = document.createElement("li");
    li.innerText = "my blog " + i;

    //where to set the element
    let ul = document.getElementById("my-blog");

    //apend new child
    ul.appendChild(li);

    //condition check
    if (i == n) {
        return 0;
    }
    i++;
    listGenerator(i,n);
}

const numberOfList = 9;
let i = 5;
listGenerator(i,numberOfList+5);   

//adding new element

let h1 = document.createElement("h1");
let p = document.createElement("p");

p.innerText = "lorem ipsum dororo koni ciua mew beef food turkey";
h1.innerText = "Blog by js";

//appending to the cild
const blogSection = document.getElementById()
document.appendChild(blogSection);