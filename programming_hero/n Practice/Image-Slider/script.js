const images = [
    "Images/bird-1.jpg",
    "Images/bird-2.jpg",
    "Images/bird-3.jpg",
    "Images/bird-4.jpg",
    "Images/bird-5.jpg",
    "Images/bird-6.jpg"
]
let imgIndex = 0;
const imgElement = document.getElementById("slider-img");

setInterval(() => {

    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute("src", imgUrl)
    // console.log(imgUrl)
    imgIndex++;

}, 1500);