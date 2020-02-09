/*
EVENT LISTENER AND EVENT OBJECT
-This is where intracting UI comes into the picture
-we can listen for events on any element in the DOM 
*/ 

// HOW TO ADD AN EVENT LISTENER - to the 'Clear Tasks' button
//  1) select the element from the DOM 
//   2) a> addEventlistener() - takes two parameters
        //  b> the actual event(event object) that we want to listen for
        //  c> an anonymous/callback function and whatever we put in this function is what will happen when we run the "click" event on this object 



 // step 1 - select the element 

const clearTasks = document.querySelector('.clear-tasks');

console.log(clearTasks);

// step 2 - addEventListener

clearTasks.addEventListener('click', function(e){
    console.log("Hello World");
    e.preventDefault();
    // stops the default behaviour of the element from vanishing away 
});

/********************************************** */

// In addition to using an anonymous function as a second parameter, we can also use a named function 

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    // console.log('Clicked');
    let val; 
    val=e;
    val= e.target;
       // gives the actual element
    val = e.target.id;
    val = e.target.className;
    val= e.target.classList;

    e.target.innerHTML = "hello";

    // event type 
    val = e.type;
        //   shows type of event 

    // timestamp 
    val = e.timeStamp;

    // COORDINATE EVENTS RELATIVE TO THE WINDOW 
    val = e.clientY;        
    val = e.clientX;        

    // COOEDINATE EVENTS RELATIVE TO THE ELEMENT
   val = e.offsetY;
   val = e.offsetX;
   
    console.log(val);
}
