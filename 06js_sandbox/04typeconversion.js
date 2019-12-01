// type conversion 
// -changing the data-type in a variable as t exists

let val;

val = 555, 

// number to string 
 val = string(555);
 val = string(4+4);




// boolean to string 
val = string(true);

// date to string 
val = string(new Date())

// null to string 
val = string(null);

// undefined to string
val = string(undefined);

// array to string
val = string([1,2,3,4,5]);

// tostring()method 
val = (555).toString();
val = (true).tostring();

// converting to numbers
// string to number
val = number('5');
 val = number('hello')
//    shows NaN, which is an actual value that stands for "not a number", 
// this happens which a value tries to get parsed as a number, but can't


// boolean to number 
val= number(true);
val = number(false);
// null to number 
val = number(null);

// array to number 
val = number([1,2,3]);
// not a number

// parse Method 
val = val = parseInt('100.30');
// rounds up the number as 100 

val= parseFloat('100.30');
// shows as 100.3

// output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));

// type coercion - type conversion that javascript takes the initiation of doing for you 
const val1 = 6,
console.log(type of val)
const val2 = string(5);
// const val2 = 5
console.log (type of val2);
// const sum = val1 + val2 
const sum = number(val1 +val2);
console.log(sum)
console.log(type of sum);

