// Variable methods 

// string methofds 

var str = 'this is a string';

// length method - returns the size of a string 

var strLen = str.length; 

// indexOf method - get the position of a character in a string 

var strIdx = str.indexOf('g');

// slice method - get a substring or specified portion of a string 

var strSlice = str.slice(5,7);

// toUpperCase & to LowerCase methods - change the case of a character in a string

var strUpper = str.toUpperCase();
var strLower = str.toLowerCase();

// replace method - replace a specified character in a string.

var strRpl = str.replace('a', 'our');


console.log(strRpl);


// Arrays - group of element/objects stored under the same.center

var fruits = ['apple', 'oranges', 'grapes', 'lemons', 'bananas']

// array methods 
// length method - gets the number of element in an array 
//console.log(fruits.length);

//push () method - adds new element to the end of an array 
//console.log(fruits);
//console.log(fruits.push('cantelop'));
//console.log(fruits);

//console.log(fruits);
//console.log(fruits.pop('cantelop'));
//console.log(fruits);

// sort() method - sorts the elements in an array. 
console.log(fruits);
console.log(fruits.sort());

// toString() method - convert an array to a string and return result.
console.log(fruits);
console.log(fruits.toString());