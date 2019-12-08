const person = {
    firstName: 'steve',
    lastName: 'smith',
    age: 33,
    email: stevesmith@gmail.com, 
    hobbies: ['soccer', 'coding', 'playing with sticks'],
    address: {
        streetaddres: '3134 walnut circle',
        city: 'pine',
        state: 'il',
        zip: 60077,
    }

    birthyear: function(){
        return 1986
    }
}

// curly braces defines this variable as an object literal as an object literal 
// inside these curly braces we put 'key: value' pairs that are saperated by commas
// functions stored inside are called methods

// initializing variable 
let val; 

val = person; 

// get specific values 
val = person.firstName;

// drilling into an array inside an object literal
val = person.hobbies;
val = person.hobbies[1];

val = person.address;
// drilling into an object inside an object literals
val = person.address.state; 

// get method
val = person.birthyear();

// in object literals, we can access other properties by using this keyword
// this keyword 
const person2 = {
    age: 27,
    getBirthyear: function () {
         return 2019 - this.age;
    }
}
    
val = person2.getBirthyear();




//  output
console.log(val);

// arrays made of objects 
const people = [
    {name: 'bob', age:54 },
    {name: 'lina', age:19 },
    {name: 'jia', age:30 },
    {name: 'wes', age:66},
    {name: 'jeb', age:14},
    {name: 'sun', age:24},
]

// we can iterate through this array using a for loop 
for (let i=0, i<people.length; i++) {
    console.log(people[i].age);
}