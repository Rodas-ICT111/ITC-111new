// Else If

// Adds additional condition to the if-elsestatement block

/*

*/
// var msg = 'Fellow Squirl';
// if(msg != ''){
// console.log(mNo message found);
// } else if(msg != 'Hello World') {
   // console.log('No message found');
// } else {
   // console.log(msg);
// }

// Nest - placing one object insideof another 

function hello() {
    var msg = 'hello';
    function world() { msg += 'world.'; }
    world(); // call to inner function
    return msg; // return the value of the local variable
}

var message = hello(); // creating a variable and assigning the return of hello()

console.log(message); // display hello() function to console

if(condition){
    if(condition2){

} else {

}
    

}
