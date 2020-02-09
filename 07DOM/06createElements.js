/*
Creating Element
-creating elements and odd attributes to them like classes, ids, etc\
-then insert the element or elements into the DOM
   > we'll add a list-item at the bottom 
   >  
*/


// CREATE ELEMENT
const li = document.createElement('li');

// ADD Class
li.className = "collection-item";

// add ID
li.id - "new-item";

// ADD Atttribute 
li.setAttribute('title', 'new-item');
li.setAttribute('style', 'background:cyan');

// Create text NOde and Append
//    we want to add something inside the li
// appendchild() method is used when we put something inside of something else

li.appendChild(document.createTextNode('New list item'));
// const liText= document.createTextNode('New list item');
// li.appendChild(liText);

// append li as child to the ul 
document.querySelector('ul.collection').appendChild(li);
    // SAME WAY AS ABOVE
        // const ul = document.querySelector('ul.collection');
        // ul.appendChild(li);

// create and append New link Element 
const link = document.createElement('a');
link.className = "delete-item secondary-content";
link.setAttribute('href','#');
// link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);

// create and append new icon element
const icon = document.createElement('i');
icon.className = "fa fa-remove";
link.appendChild(icon);





console.log(link);
console.log(li);
console.log(icon);

