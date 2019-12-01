// javascript = ecmascript and the current version we're on rightnow is ES6

//  
// variable - var, let, and const

/*
variable & declaration 
1 ) var= used since begining 
2) let & const = introduced by es6 */

// declaing a variable
var name= "saman" 
console.log(name);
name = "nabeel";
console.log(name);


// initialling a variable
var greeting;
console.log(greeting);

greeting="heloooo greeting";
console.log(greeting);

/* Rules/convention of javascript 
-variable can include letter, number, _, $ 
-variables cannot start with a number 
*multi-word variable
  -camelcase = var firstName = 'saman'<=conventional way of doing it.
  -underscore - var first_name = "saman"
  -Pascalcase- Var FirstName = 'saman' 
-*/


// let - works similar to var, identical in the global scope

let firstName = 'nabeel';
console.log(firstName);
firstname = 'besl'
console.log(firstName);

let lastname;
console.log(lastname);
lastmane = "powers";
console.log(lastname);

// const - stands for constant - meaning that it can't be changed/reassigned
const nickname = "saman";
console.log(nickname);
// nickname = tubs;
// throws an error because a contant cannot be reassigned 
// const surName;
// throws an error as it has to be declared (can't be initialized)


// objects ae reference data type- objects, funstion, and prototypes
// there are two type of objects 
// arrays 
// objects literals

// working with object literal variable 

const person = {
    name: 'sam',
    age: '40'
}
console.log(person);
person.name = "ram";
person.age = 30; 
console.log(person);
person.gender = 'male';
console.log(person);

// working with objects array variable 
const numbers = [1,2,3,4,5]
console.log(numbers)
// numbers - [1,2,3,4,5,6]
// console.log(numbers);
// can't reassign constant object arrays, but you can using a built-in array method 
numbers.push(6);
console.log(numbers); 


pract
const person = { 
  name = 'sara'
  age = '44'
}
console.log(name);

const numbers = {1,2,3,4}
console.log(numbers)

