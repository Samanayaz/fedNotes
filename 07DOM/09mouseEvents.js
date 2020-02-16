//  mouse events 

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');
// const body = document.querySelector('.container');

// click 
// clearBtn.addEventListener('click', runEvent);

// double-click 
// clearBtn.addEventListener('dblclick', runEvent);

// mouseDown
// clearBtn.addEventListener('mousedown', runEvent);
    // fires if you click and hold 

// mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// mouseenter 
// card.addEventListener('mouseenter', runEvent);
    

// mouseleave 
// card.addEventListener('mouseleave', runEvent);


// mouseover 
// card.addEventListener('mouseover',runEvent);

// mouseout 
// card.addEventListener('mouseout',runEvent);

// the difference btw mouseover/mouseout will fire the if we go into or leave another element inside the card 

// mousemove
card.addEventListener('mousemove', runEvent);

// event Handler - Output

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent = `MouseX:${e.offsetX}, MouseY:${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 200)`;
    e.preventDefault();
}

// exercise 1 - heading to display coordinates on my mouse 
// excercise 2 - rgb (offsetX, offsetY, 100) - using rgb and the offset properties, change the color of the background.


// card.addEventListener('mousemove', clickOver);

// function clickOver(e){
//    console.log(e.offsetX);
//    console.log(e.offsetY);
//    console.log(heading);
//     heading.textcontent = e.offsetX;



// e.preventDefault();
// }




