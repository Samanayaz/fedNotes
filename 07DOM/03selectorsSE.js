// Dom Selectors
// - document Object methods allows us to pull things from the Dom and then we can do different things with those elements or the modes
// -in Vanilla JSON, we have selectors that can be categorized into two different types 
// 1. single Element selector 
// -will allow you to grab one element by its ID/class and it only stores one thing 
// -if you use a single selector on a class that appears more than once in the DOM< it's just going to grab the first time one
// -      -getElementById()
//         -it selects element by Id 
//         -you  can't select a class or a tag-name
//         -not is effective as querySelector(), but has been round for a while 
//      -> querySelector()
//        -newer and much more powerful because we don't have to select things by their ID's anymore
//        'we can use this selector-method to get elements by tag-name, class, or id 
// 2. multiple-element Selectors


// document.getElementById

console.log(document.getElementById("task-title"));
console.log(document.getElementById("task-title").id);
// this is consoling the element id of task-title then giving us the id name if any
console.log(document.getElementById("task-title").className);
// this is consoling the element id of task-title then giving us the class name if any

// // changing style  

// document.getElementById('task-title').style.background = '#333';
// // document.getElementById('task-title').style.color = '#fff';
// // document.getElementById('task-title').style.padding= '5px';

// // keep your code DRY - means don't repeat yourself 

const taskTitle = document.getElementById('task-title');
taskTitle.style.background = "#333";
taskTitle.style.color = '#fff';
taskTitle.style.padding= '5px';

// // change content 

taskTitle.textContent = 'task list';
taskTitle.innerText = 'my Tasks';
taskTitle.innerHtml = '<span style="color:red">task list</span>';




// // get element by id
console.log(document.querySelector('#task-title'));
// // get element by class
console.log(document.querySelector('.card-title'));
// // get element 
console.log(document.querySelector('h5'));

// // lets work with list-items
document.querySelector('li').style.color = "red";
document.querySelector('ul li').style.color = "blue";

// // select the last li 
document.querySelector('li:last-child').style.color = 'green'; 
// // specifically select the 3rd li
document.querySelector('li:nth-child(3)').style.color = "yellow";
// // specifically select the 4th li
document.querySelector('li:nth-child(4)').textContent = 'this is the 4th List-Item';
// // odd and even 
document.querySelector('li:nth-child(odd)').style.background = '#eee';
document.querySelector('li:nth-child(even').style.background = '#aaa';









