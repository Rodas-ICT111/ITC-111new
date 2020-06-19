// Objects 

// objects are variable that store multiple values

// var x = 5;

// var x2 = [5,6,7,1,21,9,37,456]; // number array variable

var x3 = {
    fName:'tom',
    lName: 'thompson',
    age: 29,
    isMarried: true,

    displayFulName: function(){ console.log(this.fName + " " + this.lName); }
};

console.log(x3.displayFullName());
