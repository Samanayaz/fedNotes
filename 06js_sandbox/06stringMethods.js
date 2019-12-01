const firstName = "sara";
const lastName = "joan";
const age = 43;
const str = "hello there my name is sara";
const tags = "web-design,web-development,programming";

let val;

// concatenation - joining string of characters 
val = firstName + lastName;
val = firstName + " " + lastName;
val = "hello my name is" + firstName + "and i am " + age;


// Append - adding onto something without replacing it entirely 
val = "saman";
val += "ayaz";

// ascaping characters
val = "And then a boy said,\"leave me alone!\"";
val = 'that\'s awesome, i can\'t wait!';

// length property 
val = firstName.length; 
// shows number of letters in firstName

// concat() method - does similar to what we did earlier 
val = firstName.concat("" , lastName);

val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase();

// how to treat string like read-only arrays 
  //  find the specific character/value during the index 

i,e val = [0,1,2,3,4,5]

val = firstName[4];

// indexof() method - to find the index number of the vaue or character 
val = firstName.indexOf('r');
val = firstName.indexOf('a');
// begins count from the begining of string 
val = firstName.lastIndexOf('a');
// begins count from end of string 

// charAt() method - finding character using index
val = firstName.charAt('6');
val = firstName.charAt(firstName.length-1);
// to get last character of string 

// subtring Method- pulls a substring (part of the string) out of strig 

val = firstName.substring(0,4);

// slice method - mostly use with arays to pull things out of them, but we can also use with strings
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split() - split a string into an array based on the saperater 
val = str.split(' '); 
// shows all the words of sentences as list (arrays)
val = tags.split(",");
// shows all the words with commas in btw 

// replace method 
val = str.replace("sara", "saman");
// inside the string u can replace a character but not delete any character

// includes() method - a boolean method that returns true/false based on if something is in the string 
//  a way to test something inside the string 
val = str.includes("name")
// shows true as the character is present in the string 

val = str.includes("dinosaur")
// shows false as no character "dinosaur" matches 









// output
console.log(val);