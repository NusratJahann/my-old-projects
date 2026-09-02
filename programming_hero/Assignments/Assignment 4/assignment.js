// Problem 1

function anaToVori(input) {
    let x = typeof (input);
    if (typeof (input) == "number" && input > 0) { // a string can't divide by number but, a number can
        let output = input / 16; // convert into vori
        return output // return the output
    } else {
        return -1;
    }

}
let vori = anaToVori(31);

if (vori == -1) {
    console.log("Error");
} else {
    console.log(vori);
}



// Problem 2


function pandaCost(singaraQuantity, samosaQuantity, jalebiQuantity) {

    let allQuantity = singaraQuantity + samosaQuantity + jalebiQuantity;

    if (typeof (allQuantity) != "string") { // a string can't divide by number but, a number can
        //checking negetive value
        if (singaraQuantity < 0 || samosaQuantity < 0 || jalebiQuantity < 0) {
            return -1;
        } else {
            let singaraPrice = singaraQuantity * 7;
            let samosaPrice = samosaQuantity * 10;
            let jalebiPrice = jalebiQuantity * 15;
            //calculating price of everything
            let totalPrice = singaraPrice + samosaPrice + jalebiPrice;
            return totalPrice;
        }

    } else {
        return -1;
    }
}
let cost = pandaCost(5, 3, 2);
if (cost == -1) {
    console.log("Error");
} else {
    console.log(cost);
}




// Problem 3

function picnicBugdet(peoples) {
    let temp = 0;
    if (typeof (peoples) == "number") {
        //check if the number floating or integer
        temp = peoples;
        temp = temp % 10;
        temp = temp * 10;
        if (temp % 10 == 0) {
            // if peoples is integer
            let total = 0;
            for (let people = 1; people <= peoples; people++) {
                if (people <= 100) {
                    total = total + 5000;
                } else if (people <= 200 && people > 100) {
                    total = total + 4000;
                } else {
                    total = total + 3000;
                }

            }
            return total;

        } else {
            return -1;
        }

    } else {
        return -1;
    }
}
let budget = picnicBugdet(356);

if (budget == -1) {
    console.log("Error");
} else {
    console.log(budget);
}



// Problem 4

function oddFriend(friends) {

    let count; //declare counter
    //traversing array 
    for (let friend of friends) {
        count = 0;

        //counting carecter of single element of array
        for (let i of friend) {
            if (i == "") {
                continue;
            }
            if (i >= -9) {
                break;
            }
            count++;
        }
        //cheching even or odd
        if (count % 2 != 0) {
            return friend;
        }
    }

    return 0;
}

const friend = oddFriend(["Raihan", "1Tomal", "", "4Rafi", "Nusrat", "Sajid", "Sadik", "Jahan", "Tuktuki", "Sapia", "Rokon", "Oishi", "Marjia", "Rijwan", "Nadia", "Rafid"]);

console.log(friend);