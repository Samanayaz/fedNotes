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
// 

// 2. multiple-element Selectors
//   -will allow you to grab all the elements with the same class and return an HTML collection or a node-list, depending on which selector you use.
//   -querySlectorAll()
//   -getElementsByClassName
//   -getElementsByTagName
//   


// document.byElements BYClassName
const items = document.getElementsByClassName('collection-item')
console.log(items);
console.log(items[0]);

items[0].style.color = "red"; 
items[4].textContent = 'Hello World';


const listItems = document.querySelector('.groupB').getElementsByClassName('collection-item');
console.log(listItems);

// document.getElementsByTagName

let lis = document.getElementsByTagName('li');
console.log(lis);

console.log(lis[0]);
lis[0].style.color= "purple";
items[3].textContent += ' by tag name';

lis = Array.from(lis);
console.log(lis);

lis.forEach(function(li){
    console.log(li.className);
});

lis.forEach(function(li){
    li.textContent = "hello";
})

lis.forEach(function(li, index){
    li.textContent = `${index}: Index Number`;
})

console.log(lis);


// document.querySelectorAll 
//    - same as above, except it returns a node-list 
//    a node-list not only counts the elements in the DOM tree, but also return things like text-nodes 
//  also by default, it allows for foreach loops and other array methods without having to convert it 


const things = document.querySelectorAll('ul.collection li.collection-item');
// console.log(things);
// things.forEach(function(things, index){
//     things.textContent = `${index}: Index Number Node-list`
// });


const thingOdd = document.querySelectorAll('li:nth-child(odd');
const thingEven = document.querySelectorAll('li:nth-child(even)');

thingOdd.forEach(function(li){
    li.style.background = "#ccc";
})
thingEven.forEach(function(li){
    li.style.background = "cyan";
})

// using for loop 
// for(let i=0; i<thingEven; i++){
//     thingEven[i].style.background = 'purple';
// }

console.log(things); 














