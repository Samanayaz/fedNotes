// Arrays are ways to naming programming languages that allows us to store multiple values in one variabless, it can mutated, iterated through and they can be complex algorithms. 
// iteration is a repitition of a process in order to generate the secquence of outcome. 

// create arrays 
const numbers = [33,55,65,88,22,72];
// conventional/popular way of creating arrays

const number2 = new Array(22,45,12,66);
// using the array-constructor or array-object 
// new manne rof writing array 

const fruits = ['orange', 'apple' , 'kiwi' ,'pear'];

const age = [62,77,84,21];

const mixedArray = [22, 'string', true, undefined, null, {a:1, b:"two"},new Date()];

console.log(numbers);
console.log(fruits);
console.log(mixedArrays);

let val;

// get array  length 
val = numbers.length;

// check if something is an array or not in a form of boolean;
val =Array.isArray(numbers);

// get a single value from an array by mentioning the index number 
val = numbers[3];

// insert something in array by replacing item
numbers[2] = 100; 

// index number of a certain value  by mentioning the value 
val = numbers.indexof(26);

// =======mutating arrays=====
// add value on to front array
numbers.unshift(120)

// remove first item from front 
numbers.shift();

// add on to the end 
numbers.pop(250);

// remove from end 
numbers.pop();

// splicing values - deleting the part of array 
numbers.splice(1,3);

// reversing arrays -reversing the order of array 
numbers.reverse();

// catcatenate arrays 
val = numbers.concat(numbers2);

// sort arrays in alphabetical orders 
val = fruits.sort();

val = numbers.sort();
// sort in acending order by first digit 

// sort by whole number by function 
val = numbers.sort(function(x,y) {
    return x-y;
});

val = numbers.sort((x,y) => {
    return y-x;
});

// find method 
// step one: crate a testing function 
var under50 = (num) =>
 {return num < 50;}

 val =age.find(under50);

 var over50 = (num) => {
     return num > 50;

 }

 val = age.find(over50); 



// output 
console.log(numbers);
console.log(val);





