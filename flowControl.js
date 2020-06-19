// Flow Control - allows us to make certain changes based on decisions made by the user 

// Loops - iterate/count through elements. Allows for repetition of repititive parts of code 

// for loop


/*
var fruits = ['apple', 'oranges', 'grapes', 'lemons', 'bananas'];


for (var i = 0;i < fruits.length; i++) {
    console.log(i + "is the index of" + fruits[i] + ".")
}
*/

// Conditions 

// If-Else Statement - set consition to do something if it is true or something else if it's not. 

var number = 10;

function oddEven(num){
    if (number % 2 == 0) {
        console.log(number + " is even.");
    }  else {
    console.log(number + " is odd.");
    } 
}
oddEven(number);