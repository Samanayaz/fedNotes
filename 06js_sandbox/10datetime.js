let val;

const today = new Date();
val = today;

// we can manually change date and time ourselves 
let birthday = new date('9-9-1991 11:25:00')
birthday = new date('september 9, 1991');
birthday = new date('9/9/1991');

val = birthday 

// to get the month
val = today.getmonth();
// index based (array sortment) january = 0 and december= 11
// to get day of the month
val = today.getDate();

// to get day of the week
val = today.getDay();
//   days are also index-based so sunday is 0 as start of the week 

val = today.getFullYear();
val = today.getHours();
val = today.getminutes();
val = today.getseconds();
val = today.getmilliseconds();
val = today.getTime();


// change the month of the birthday date
birthday.setMonth(2)

// change the date of birthday
birthday.setdate(12);
birthday.setFullYear(1214);
birthday.sethours(3);
birthday.setminutes(45);
birthday.setSeconds(30;)



// output 
// console.log(val);
console.log(birthday)
