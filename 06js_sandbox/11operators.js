const x = 5; 
const y = 9;

let val;

// comparison operators
// operator   name 
//  ==========
//  > greater then , >= greater then equal to ,  < less then , <= less the equal to, ==equal to, != not equal to , === equal in value and type, !== not equal in value and type, 

// assuming that 
val = x > 5; 
val = x >= 5;
val = x < -50;
val = x <= 100;
val = x == "5";
val = x != 'b'; 
val = x === "5"; 
val = x !== "5";

//    logical operators
//    operator   name
//    &&         and- two ampersands 
//    ||        OR - two pipe character to pick either side 
//    !         not - exclammation mark 

//  assume x= 5 and y = 9 
val = (x<10)&&(x!==5)
//   true    *   fslse answer at console comes out as false

val = (y>9)||(x==5)
//  false * true  comes out as true as one of them is true so whole statement come true cox of ||

val = !(x===y); 
   // exclammation flips the results 


// output
console.log(val)