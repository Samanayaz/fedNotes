//functions are one the imp infrastructure in any programming language
// block of code that can be defined, then called at a later time 
// function take in parameters, which can later be passed as arguments when the functions are called. 

// Function Declaration 

function greet1() {
    // anyting inside here is function scope 
    console.log("hello");
}

greet1();

// THE 'RETURN' KEYWORD

function greet2() {
    return 'hello 2'
}

greet2();
console.log(greet2());

// return is used to get it appear on the webpage 

// PARAMETERS and ARGUMENTS 
//   parameter - a variable in a method definition 
// arguments - data that you pass into the method's parameter (actual value of this variable that gets passed to the function)

function greet3(firstName, lastName) {
    return 'hello ' + firstName + ' ' + lastName; 
}
//  this is declaration not expression 

console.log(greet3('sam','Jackson'));
console.log(greet3());

// consider the following, if the user doesn't pass arguments, return default values (old method): 
function greet4(firstName, lastName) {
   if (typeof firstName === 'undefined') {firstName='Awesome'}
   if(typeof lastName === 'undefined') {lastName= 'User'}
   return 'hello ' + firstName + " " + lastName;
}

console.log(greet4());
console.log(greet4('joe'));

function greet5(firstName = "default", lastName = "user") {
    return 'hello ' + firstName + ' ' + lastName;
}
console.log(greet5());
console.log(greet5("tim", "johnson"));


// FUNCTIONS EXPRESSIONS 
//  basically, it's putting a function as a variable assignment 
// it can be named, or anonymous , and usually they are anonymous. 

const square = function (x) {
    return x*x; 
};
console.log(square(8)); 


// Immediately Invocable Function Expressions - IIFEs 
// basically it is a function that you declare and run at the same time. 


(function(){console.log("IIFE ran .....")})();

// IIFE with parameter

(function(name){
    console.log('hello ' + name)
})('Mr. IIFE W . Parameter');


// PROPERTY METHODs
//   putting functions inside of objects
// when a function is put inside an object literal, is called a "method"

const todo = {
    add: function(){
        console.log('add todo');
    },
    edit: function(id){
        console.log(`edit todo ${id}`);
    }
};

todo.add();
todo.edit(22);

// we can also define functions for this "todo object outside of its scope, consider the following:
 todo.delete = function(){
     console.log('delete todo') ;
 }

 todo.delete();












