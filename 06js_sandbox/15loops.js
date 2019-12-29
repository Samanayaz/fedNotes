//  General Loops and Iterations 

// LOOPS
// -an instruction that repeats until a specific condition is met
// -it is use to run same block of code using different values each time 
// -multiple ways to run iteration in JS. most popular type of general loopa used in most programming language are 
// 1- for loops: takes in 3 parameters, saperated by semi-colons;  and we have to use var or let, but can't used const as value keeps changing
// 2- while loops: we actually set the variable outside the loop.  -while(condition){}                                                                        -inside the while loop we do what we want, such as console.logging and incrementing 

// 3- do while loops 
// - a bit difference, because it's always going to run at least once no matter what 

// -Array specific iteration with forEach() and map()
// -forEach() method takes in a callback function (anonymous function), that can accept three parameters
// 1. iterator - naming convention is the syntax/name of the array 
// 2.index 
// 3. the actual entire array
// -Map() - basically used to return something different, a different array 
//  - for in - used to loop/iterate through objects so we can get key/value pairs 



//  FOR LOOPS 

for (let i=0; i<10; i++) {
    console.log(i);
}

// other things we can do with for loops 
// concat 
 for (let i=0; i<10; i++) {
     console.log('number ' + i);
 }

//  skip an iterateration and breakk out of loops 
for (let i=0; i<10; i++) {
    // skip iteration 
    if(i===2) {
        console.log('2 is my favorite number');
        continue;
    }
    // break out the loop
    if (i===5) {
        console.log('stop the loop');
        break;
    }
    console.log(i);
}


// WHILE LOOP
// note to self - which type of loop to use- general preference, not always black and white.  however use a for loop when you know how many times it's going to run (how many iterations you have) 
// use while loop when you don't, when it's unclear how many times it can run 

let i=0;
while(i<10) {
    console.log('while loop ' + i);
    i++
}

// do while loop

let e=0;
do {
    console.log('do while ' + e);
    e++;
}
while (e <10);

//  LOOPING THROUGH ARRAYS 

const cars = ['ford', 'nissan', 'honda', 'toyota'];
for (let i=0; i < cars.length; i++){
   console.log(i);
   console.log(cars[i]); 
}

// forEach Method 
cars.forEach(function(car,index, theEntireArray){
  console.log('forEach ' + car);
//   console.log(index); or
console.log(`with index ${index} : ${car}`);
  console.log(theEntireArray);
})

// map() method 
const users = [
    {id:1 , name:"Jim" },
    {id:2 , name:"Tim" },
    {id:3 , name:"Bob" },
    {id:4 , name:"Fob"},
    {id:5 , name:"Brian"},
    {id:6, name:"Ryan" }
];

const ids = users.map(function(user){
    return user.id; 
});
const names = users.map(function(user){
    return user.name;
});
console.log(names);



// FOR IN LOOPS
const user = {
    firstName: "john",
    lastName: "Sanders",
    age: 89,
    decentHumanBeing: false };


for(let x in user) {
    console.log(x);
    // iterates through keys in object
    console.log(user[x]);
    // iterates through values un objects
    console.log(`${x} : ${user[x]}`)
};










