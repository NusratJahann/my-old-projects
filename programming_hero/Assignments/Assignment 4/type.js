// // let i = -1.1;
// // // i=parseInt(i);
// // console.log(i);
// // let p=i/10;
// // console.log(p);
// // if(p==0){
// //     console.lof("it is a floating number");
// // }
// // else{
// //     console.log("it isnt");
// // }
// // while(1){
// //     console.log("mew");
// // }

// // function picnicBugdet(people) {
// //     let total = 0;
// //     let i = people;
// //     if (i <= 100) {
// //         total = 5000 * people;
// //     } 
// //     else if (i <= 200 && i > 100) {
// //         people = people - 100;
// //         total = people * 4000;
// //         total = total + ( 100 * 5000 );
// //     } 
// //     else {
// //         people = people - 200;
// //         total = people * 3000;
// //         total = total + ( 100 * 5000) + ( 100 * 4000);
// //     }


// //     return total;
// // }


// // let total = picnicBugdet(11543500000);
// // console.log(total);
// function oddFriend(friends){
//     let count; //declare counter

//     //traversing array 
//     for(let friend of friends){
//         count = 0;

//         //counting carecter of single element of array
//         for(let i of friend){
//             count++;
//         }

//         //cheching even or odd
//         if(count%2 != 0){
//             return friend;
//         }
//     }

// }

// let friend = oddFriend([
//     "Sadika",
//     "Raihan",
//     "Ahasan",
//     "Sajid",
//     "Rafi",
//     "Nusrat",
//     "Jahan",
//     "Tuktuki",
//     "Sapia",
//     "Rokon",
//     "Oishi",
//     "Marjia",
//     "Rijwan",
//     "Nadia",
//     "Rafid",
// ])
// console.log(friend);

// let peoples = 3;
// let total = 0;
// for(let people = 1; people <= peoples; people++){
//     if(people <= 100){
//         total = total + 5000;
//     }
// }
// function anaToVori(input) {
//     let x = typeof(input);
//     if (typeof(input)=="number" && input > 0) { // a string can't divide by number but, a number can
//         let output = input / 16; // convert into vori
//         return output // return the output
//     } else {
//         return -1;
//     }
    
// }
// let vori = anaToVori(231);

// if (vori == -1) {
//     console.log("Error");
// } else {
//     console.log(vori);
// }


// function pandaCost(singaraQuantity, samosaQuantity, jalebiQuantity) {

//     let allQuantity = singaraQuantity + samosaQuantity + jalebiQuantity;

//     if (typeof(allQuantity)!="string") { // a string can't divide by number but, a number can
//         //checking negetive value
//         if(singaraQuantity < 0 || samosaQuantity < 0 || jalebiQuantity <0){
//             return -1;
//         } else {
//             let singaraPrice = singaraQuantity * 7;
//             let samosaPrice = samosaQuantity * 10;
//             let jalebiPrice = jalebiQuantity * 15;
//             //calculating price of everything
//             let totalPrice = singaraPrice + samosaPrice + jalebiPrice;
//             return totalPrice;
//         }

//     } else {
//         return -1;
//     }
// }
// let cost = pandaCost(5, 3, 2);
// if (cost == -1) {
//     console.log("Error");
// } else {
//     console.log(cost);
// }

