// For Of Loops - use to iterate through arrays, strings, or objects

/*
    Syntax:
        for(element array){
            code to run;
        }
*/

var fruits = ['apples','oranges','pears','bananas']
var fruit = '';

for(e of fruits){
    fruit += e + ", ";
}
console.log(fruit);
