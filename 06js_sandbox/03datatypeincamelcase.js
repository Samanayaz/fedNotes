// data types in java script

// primitive data types vs reference data types
// > primitive data type is stored directly in the location of the variable accesses.
// > it is stored on the stack- when you access a primitive value, you access by its actual value

// reference data type
//  >accessed by refernce, so data isnt actualy stored in the variable.
//  > stored on the heap - not stored in the variablle which has to do with dynamaically allocated memory 
// > a pointer to a location in memory

// primitive Data type 
// -string - text (sequence of characters)
// -number - integars, decimals, floats 
// -null - intentional empty 
// -undefined - variable that hasn't been assigned a value. All variables are undefined by default.
// -symbols (ES6)

// Reference Data Type/objects (not primitive, not accessed by the actual va;ye, but reference, and they're also considered objects)
// - object literals 
// -Arrays
// -functions 
// -Dates
// -Anything else that we can store


// js is known as dynamically typed language
//   - type of data are associated with actual value, not variables
// -the same variable can hold multiple types
// -the same variable can hold multiple types 
// -we do not need to specify types


// PRIMITVE TYPE 
// string
const name = "saman";
console.log(typeof name);
// number
const apples = 20
console.log(typeof apples);
// booleans
const sweet = true;
console.log(typeof sweet);
// null
const sour = null;
console.log(typeof sour);
    //  this is a bug, null is not an object, it's a primitive type 
// undefined 
let gotnothingtosay;
console.log(typeof gotnothingtosay)
// symbols 
// const sym = symbol();
// console.log(sym);

// reference data type 
// array objects 
const hobbies= ["coding" , "baking" , "shopping"]
console.log(typeof hobbies);

// object Literals 
const address = { 
    street: "4244 pistachio ave",
    city: "almondville",
    zip: 60077
}

console.log(typeof address);

// dates
const today = new Date();
console.log(today);
console.log(typeof today);


