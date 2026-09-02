var word = document.getElementById("word");
var length = document.getElementById("length");
const btn = document.getElementById("btn")
// var api = "https://random-word-api.herokuapp.com/all";

// async function getWord() {
//     var data = await fetch(api, {
//         headers: {
//             "Accept": "application/json"
//         }
//     });
//     var obj = await data.json();
//     console.log(obj);
// }
// getWord();

// // function getWord() {
// //     fetch(api).then((response)=>{
// //         return response.text();
// //     }).then((data)=>{
// //         console.log(data);
// //     });
// // }

btn.addEventListener("click", () => {

    fetch("https://random-word-api.herokuapp.com/word?number=1")
    .then(res => res.json())
    .then(word => displayWord(word[0]))

    function displayWord(data){
        word.innerText = data;
    }

})