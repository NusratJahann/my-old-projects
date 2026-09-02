// Variable Data Types

    // String
    // var productName = "Watch";
    // console.log(typeof productName); //////////
    // expected output: "String"

    /////////////////////////////////////////////////

    // Number
    //  var productPrice = 2500;
    //  console.log(typeof productPrice); //////////
    // expected output: "number"

    /////////////////////////////////////////////////

     // Boolean
    // var isExpensive = true;
    // console.log(typeof isExpensive); //////////
    // expected output: "boolean"

    /////////////////////////////////////////////////

//Number Type

    // Integer = none fractional number 
        //Example 1, 2, 7, 5, 6 etc
        //to convert a string into integer use "parseInt()"

    /////////////////////////////////////////////////

     // Float = fractional number
        //Example 1.5, 0.2, 7.8, 5.4, 6.9 etc
        //to convert a string into float use "parseFloat()"
        //to define the limit of a float length use "toFixed()"

/////////////////////////////////////////////////

// Array

    //Must use "[]" third bracket
    //Array arranged by index number

    /////////////////////////////////////////////////

    //To get index number of a value... use "indexOf()"
        // var a = ["banana", "apple", "watermelon", "orange"];
        // console.log(a.indexOf('watermelon')); //////////
        // expected output: 3

    /////////////////////////////////////////////////

    // //To get a postion value in array use the var name and 3rd bracket containing position(in index number) of value...like this:
    //     var b = [12, 27, 87, 34, 69, 72]
    //     console.log(b[4]); //////////
    //     // expected output: 69

    /////////////////////////////////////////////////

     //To replace the value...type something like this:
        // var c = ["Pigeon", "Parrot", "Dove", "AngryBird", "Owl"]
        // c[3] = "PeacfulBird"; //////////
        // console.log(c[3])
        // expected output: "PeacfulBird"

    /////////////////////////////////////////////////

    //To push extra value use "push()"...For example:
        // var webLayout = ["header", "main", "aside"]
        // webLayout.push("Footer");
        // console.log(webLayout);
        // expected output: [ 'header', 'main', 'aside', 'Footer' ]

    /////////////////////////////////////////////////

        //if you want to remove aside element from your website layout...use "slice()"

            // var removeAside = webLayout.slice(1, 3);
            // console.log(removeAside);

        /////////////////////////////////////////////////

    // Use splice() to remove arbitrary item.
    // Use shift() to remove from beginning.
    // Use pop() to remove from end.

/////////////////////////////////////////////////

//Comparison operator
    //     >    Greater than
    //    <    Less than
    //    >=    Greater than or equal to
    //    <=    Less than or equal to
    //    ==    Equal to
    //    !=    Not equal to
    //    ===    Equal value and same type
    //    !===    Not equal value or not same type

    //    ||     Or Operator
    //    &&     And Operator

/////////////////////////////////////////////////

//If else

    //if else structure:

        // if(condition){
            
        //} else{}

    /////////////////////////////////////////////////

    //for example:

        // var foodIsReady = true;

        // if (foodIsReady == true) {
        //     console.log("eat it");
        // } else{
        //     console.log("don't eat it");
        // }

    /////////////////////////////////////////////////

// Loop

    // While Loop

        // while loop structure
        // var roastGiven = 0; // Loop Variable

        // while (roastGiven < 10) { // Loop Condition
        //     console.log(roastGiven +"| "+ "Please, Give me a roast");
        //     roastGiven++;
        // }

    /////////////////////////////////////////////////

        //Another examples

        // var numbers = 0;

        // while (numbers < 10) {
        //     console.log(numbers);
        //     numbers++;
        // }

        /////////////////////////////////////////////////

        // var even = 2;

        // while (even <= 10) {
        //     console.log(even);
        //     even += 2;
        // }

        /////////////////////////////////////////////////
        
        // var a = [581,4,5];
        // var arr = [12,1,2,a,4,6,7,10,'mew','nusrat'];
        // var i=0;
        // console.log(arr[45]);

        // var numbers = [1];
        // for(var i = 1; i <= 10; i++){
        //     numbers = numbers.push(i);
        //     console.log(numbers);
        // }

        /////////////////////////////////////////////////

// Function

    // function structure
                            // ▼ parentheses      
        // function name(params) {
            // function body
        // } ◄ curly bracket

        /////////////////////////////////////////////////

        // function call

            // name();   
            
        /////////////////////////////////////////////////

        //function parameter ***

        //                 ▼ parameter       
        // function name(param){}

        /////////////////////////////////////////////////


        
        function addNumber(number1, number2) {
            return "Result is " + number1 + number2;
           }
           
           var result = addNumber(5, 4);

           console.log( result);

