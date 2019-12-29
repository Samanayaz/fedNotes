//  THE WINDOW OBJECT - the document object is actually the part of the window object 
//  - the window is the global object in client-side JS 
//  - had properties and method that develops use all the time 

console.log(window);

//  window methods / objects / properties 
// CONSOLE METHOD 
console.log(123);
window.console.log(123);


// alert method 
     // window.alert("hello Alert!");


// PROMPT METHOD - pops up a window to adding in custom text 
    // const input = prompt();
    // alert(input); 


// CONFIRM METHOD 
    // if(confirm('are you sure?')) {
    //     console.log('yes')
    // } else {
    //     console.log('no ')
    // }


// WINDOWS PROPERTIES 
let val; 


// outer height and width properties 
  val = window.outerHeight;
  val = window.outerWidth; 


// Inner Height andWidth Properties 
  val = window.innerHeight; 
  val = window.innerWidth; 


// Scroll Points Property
val = window.scrollY; 
val = window.scrollX; 

// location Object
val = window.location 
val = window.location.hostname;
val = window.location.port
val = window.location.search;

//  redirect property- redirects you to another page
// window.location.href = 'https://www.google.com/'


// // history object
// window.history.go(-2); - takes two pages back 
val = window.history.length; 

// Navigator object - has to do with the actual browser itself, not the window or the document 
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.useragent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;




  console.log(val);
