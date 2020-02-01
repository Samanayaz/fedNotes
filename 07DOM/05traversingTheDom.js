// Traversing the DOM
//   -simply means, moving up and down the DOM; this is where we're dealing with parents and children of specific nodes, elements or whatever we select

let val;

const list = document.querySelector('ul.collection');
// const list = document.querySelector('li.collection-item');


// const listItem = document.querySelector('li.collection-item');
const listItem = document.querySelector('li.collection-item:first-child');
// the above behaves the same way as line above it 


val = list; 
val = listItem; 

// looking ar / exploring the children/child-nodes of the ul 
// GET CHILD NODES

val = list.childNodes;
// childnodes property gives us a Nodelist of all the child nodes 
// not only do we have the llist but we also have "text node"  which are basically line-breaks

val = list.childNodes[0];
// gives us the text-node 

val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
// we get number three because it's a text-node; as oposed to the li which would give us 1; 
// 1- Element 
// 2- Atribute 
// 3- Textnode 
// 8-comment 
// 9-document 
// 10- doctype

// GET CHILDREN ELEMENT NODES
val = list.children; 
val = list.children[1];
list.children[1].textcontent = 'Hello List Item';

// children 
val = list.children[3].children[0];
list.children[3].children[0].id = "test-link";
list.children[3].children[0].href = "https://www.google.com/";

val = list;

// First Child 
val = list.firstChild;
// just like child-node, firstChild proper will give us first "node" this is childnode,wether it's am e;element or not, and in this case it is a text 
val = list.firstElementChild;
// we can use this to get the actual first element and not the text-node 

// getting the last child 
val = list.lastChild;

// to get last element 
val = list.lastElementChild;

// count child elements 
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
// we get the ul as list item is li 

val = listItem.parentElement;
// in most cases, it'll be the exact same thing

val = listItem.parentElement.parentElement;
// div with the class-action is parent of ul as ul is nested inside that div 

// Get Next Siblings
val = listItem.nextSibling;
// next sibling property also deals with other type of nodes (not just elements), just like childnode, firstChild and lastChild property.

val = listItem.nextElementSibling; 
val = listItem.nextElementSibling.nextElementSibling; 
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling;

// Get previous Sibling 
val = listItem.previousSibling;

val = listItem.previousElementSibling;
// it's gona show Nan as there is nothing before first element 

val = listItem.nextElementSibling.nextElementSibling.firstElementChild.className = "saman java";

val = list;


console.log(val);