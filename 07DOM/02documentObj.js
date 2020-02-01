// -properties of the DOM are atributes. 
// -selectors are the methods of the document object 
// - 

let val; 

 val = document;
// gives us entire detail of document
console.log(val);
 
val = document.all; 
// // looks like an array we can access the value of our document using indexes 

 val = document.all[3];
// // used like an array we can access the values of our document using indexes 
 val = document.all.length;
// // select the number of the elements in the DOM 

val = document.head; 

val = document.body;
val = document.doctype;
val = document.domain;
// // shows the loopback address/host address/info
val = document.URL;
val = document.characterSet;
val = document.contentType;


// // selecting elements without selectors, not recommended but still possible 
val = document.forms; 
val = document.forms[0]; 
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images; 
val = document.scripts[2].getAttribute("src"); 

// let scripts = document.scripts;
//  scripts.forEach(function(script){
//      console.log(script);
//  })

// //  gives error saying scripts .forEach is not a function because forEach is for Arrays only
// // so to convert this into an array, we'll create a new variable and use the Array.from( method )

let scriptsArr = Array.from(scripts); 

scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));
})
val = scriptsArr; 





console.log(val);