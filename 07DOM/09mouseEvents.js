//  mouse events 

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// click 
clearBtn.addEventListener('click', runEvent);

// double-click 
clearBtn.addEventListener('dblclick', runEvent);

// mouseDown
clearBtn.addEventListener('mousedown', runEvent);
    // fires if you click and hold 

// mouseup
clearBtn.addEventListener('mouseup', runEvent);

// mouseenter 
card.addEventListener('mouseenter', runEvent);
    

// mouseleave 
card.addEventListener('mouseleave', runEvent);


// mouseover 
card.addEventListener('mouseover',runEvent);

// mouseout 
card.addEventListener('mouseout',runEvent);

// the difference btw mouseover/mouseout will fire the if we go into or leave another element inside the card 

// mousemove
card.addEventListener('mousemove', runEvent)

// event Handler - Output

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    e.preventDefault();
}

