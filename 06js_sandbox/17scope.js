// Global Scope 
var a = 1; 
let b = 2; 
const c = 3; 


// function scope 
function test() {
    var a = 4; 
    let b = 5; 
    const c = 6;
    console.log('Function Scope ', a , b, c);
}
 
test(); 

// block-level scope - for if statements, loops or anything wrapped inside curly braces 
// if statements 

if(true) {
    var a = 7
    let b = 8;
    const c = 9;
    console.log('block-level if scope', a, b, c,);
}

// var declared inside a block level scope alters var in global-scope 

// for loop 
for(let a=0; a<10; a++) {
    console.log(`blocklevel for loop scope with let: ${a}`)
}
for(var a=0; a<10; a++) {
    console.log(`blocklevel for loop scope with var: ${a}`)
}



console.log('global Scope: ', a, b, c);