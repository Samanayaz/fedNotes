// Event Bubbling 
    //   -> bubbling up of events through the Dom 
    //  -> when an event happens on a particular event in the DOM, it will bubble up through  its parents 
    //  -> if we put a click-event on our .card-title span, that event will bubble up to its parents 


/* Event Delegation 
 -opposite of the event-bubbling 
 -it's where we put the listener on one of the person elements and then use logic inside the event-handler to target the element we actually want the event for 
   - it can be any parent 
- we put the event-listener on a parent then going down 

*/


// Event Bubbling 
// document.querySelector(".card-title").addEventListener('click',function(){
//     console.log('card title')
// // })
// // document.querySelector(".card-content").addEventListener('click',function(){
// //     console.log('card content')
// // })
// // document.querySelector(".card").addEventListener('click',function(){
// //     console.log('card')
// // })
// // document.querySelector(".col").addEventListener('click',function(){
// //     console.log('col')
// // })

// event Delation 
const delItem = document.querySelector('.delete-item');
delItem.addEventListener('click', deleteItem);
// function deleteItem(){
//     console.log('delete item')
// }

document.body.addEventListener('click', deleteItem);
// function deleteItem(e) {
//     console.log('delete item')
//     console.log(e.target)
// }

// function deleteItem(e) {
//     if(e.target.className === "fa fa-remove"){
//         console.log('delete item');
//     }
// }
// function deleteItem(e) {
//     if(e.target.parentElement.classList.contains('delete-item')){
//         console.log('delete item');
//     }
// }

function deleteItem(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}

