/*
Creating Elements
-create elements and add attributes to them like class. ids. href. src, img, rel, type,style
-then , insert them into theDOM
-we'll add an extra list-item at the bottom of our ul 
*/

// Create Element 
const li = document.createElement('li');

// give it a class 
li.className = "collection-item";

// give it an id 
li.id = "new-item";

// add attributes 
li.setAttribute('title', 'NewItem');

// Creating the Text Node and Append
// we want to add something inside the li 
// the appendChild() methid is used when we want to put something inside of something 
li.appendChild(document.createTextNode("hello World"));

// Append li as child to the ul 
// document.querySelector('ul.collection').appendChild(li);
// this adds the new li to our ul, except we don't have a link/icon so we need to create and append that to that item 

// create new link Tag 
const link = document.createElement("a"); 
// creates tag/link 

link.className = "delete-item secondary-content";
link.innerHTML= "<i class='fa fa-remove'></i>";
link.setAttribute('href', 'www.google.com')

// append link to li 
li.appendChild(link);

// append li to Ul 
// document.querySelector('ul.collection').appendChild(li);
const ul = document.querySelector('ul.collection');
ul.appendChild(li);



console.log(li);