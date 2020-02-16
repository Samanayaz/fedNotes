const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

form.addEventListener('submit', runEvent);

// clear input 
taskInput.value = "";

// KEYBOARD EVENTS
//  keydown 
// taskInput.addEventListener('keydown', runEvent);
//  like mousedown, it only fires when key goes down 

// keyup
// taskInput.addEventListener('keyup',runEvent);

// keypress
taskInput.addEventListener('keypress',runEvent);

// Other Input Events
 
// focus
taskInput.addEventListener('focus', runEvent);
    // when u click inside the input , focus fires 

// Blur 
taskInput.addEventListener('blur', runEvent);
        // when u click outside the input, blue fires 
        
// cut 
taskInput.addEventListener('cut', runEvent); 

// paste 
taskInput.addEventListener('paste'. runEvent);

// input 
taskInput.addEventListener('input', runEvent);



function runEvent(e) {
    console.log(`Event type; ${e.type}`);
    // console.log(taskInput.value);
    // e.preventDefault();
    console.log(e.target.value);
    console.log()
}


