/*
Removing and replaceing items 
> cover how to replace and remove elements from the Dom; how to manipulate classes and attributes 
 */

//  replacing Elements 
// create element to replace our current h5 with
const newHeading = document.createElement('h2');

// add id
newHeading.id = "task-title";

// add text-node 
newHeading.appendChild(document.createTextNode('New Tasks'));

// get the old heading we want to replace
const oldHeading = document.getElementById('task-title');
console.log(oldHeading);

// at this point, we need to identify the parent of this h5, because we're going to use a method called replaceChild() and we need to call this method on that parent

// get the parent and store it in a variable
const cardAction = document.querySelector('.card-action');
console.log(cardAction);

// replace 
//    replaceChild() method takes two arguments 
// >1. the child you are replacing with - new one
// >2. the child you are replacing  - old one 

cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

/* EXERCISE */

// replace "new task" with "New Order by Mom' and change the color to red 

// step 1 - create new element
const newLabel = document.createElement('label'); 
newLabel.setAttribute('for','task');
newLabel.setAttribute('style','color:red');
newLabel.appendChild(document.createTextNode('New Order by Mom'));
console.log(newLabel);

// step 2 - select element to replace with
const oldLabel = document.querySelector('.input-field label');
console.log(oldLabel);

// step 3 - select parent element of old child
const inputField = document.querySelector('.input-field');
console.log(inputField);

// step 4 - replace new element with old child
inputField.replaceChild(newLabel, oldLabel); 


// REMOVING ELEMENTS
// we want to remove some particular list items 
// step1 - select item you want to remove 

const item = document.querySelectorAll('li');
console.log(item);

// step 2 - select thr parent 
const list = document.querySelector('ul');
console.log(list);

// step3 - removing item(s);
item[0].remove();
console.log(item);

// remove a child element - by targeting a parent 
list.removeChild(item[3]);

// Removing class and attributes
const firstLi = document.querySelector('li:first-child');
console.log(firstLi);

console.log(firstLi.children[0]);

const link = firstLi.children[0];

let val ; 


// classes --->
val = link.className;
    // give us the string of classes 

val = link.classList;
//   gives us collection of classes - DOM - token list, just like an HTMLCollection, is not an Array 

val = link.classList[0];

val = link.classList.add('test');
// adds a class called test 
val = link.classList.remove('test');
// removes classname 
val=link;

// attributes--->
val = link.getAttribute('href');
// gives us the value of the attribute in the element

val = link.setAttribute('href','http://wwww.google.com/');
// this changes the value of the attribute 

val = link.hasAttribute('href');
val = link.hasAttribute('src');
val = link.hasAttribute('class');
    //  a boolean method that takes an argument to check if element has attribute or not 

val = link.setAttribute('title','google');
// create a new attribute
val= link.hasAttribute('title');
// check a new Attribute
val = link.removeAttribute('title');
// removes the attribute we created 


console.log(val);












