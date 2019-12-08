////////** if statements are use to evaluate some kind of condition and then do something based on that condition or something if that condition isn't met
// syntax 
//  if(givencondition) {
    // do something if given condition is true;
//  } else {
        // do something else; }

// =====comparision operators =====


const id = 100; 

// equal to 
if(id==100) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// not equal to 

if(id != 101) {
    console.log('correct');
} else {
    console.log('incorrect')
}


if(id == 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}


if(id !== 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// greater then or less then 
if(id > 100) {
    console.log('your id is greater then 100');}
    else if(id<100) {
        console.log('id is less then 100');
} else {
    console.log('your id is 100');
}

const color = 'red';
if (color==='red') {
    console.log('color is red')
} else if (color == 'blue') {
    console.log('color is blue')
} else if (color == green) {
    console.log('color is green');
} else {
    console.log(`color is ${color}`);
}



// ====logical operator ======

const name = 'steve';
const age = 11;

// and &&

if(age > 0 && age<12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a tennager`);
} else {
    console.log(`${name} is an adult`); 
}


//  if else condition where anyone btw ages of 16 and 65 can participate in the 200k trianthalon and anyone 

if(age > 16 && age<65) {
    console.log(`${name} can participate in the trianthlon`)
} else if (age <= 15 && age >=1) {
    console.log(`${name} too young to participate in the trianthlon`)
} else {
    console.log(`${name} is too old for the trianthlon`)
}

//  OR ||

if(age < 16 || age > 65) {
    console.log(`${name} cannot participate in the trianthlon`)
} else {
    console.log(`${name} is registered for race`)
}

// ternary operator - new features in js - short way of doing condition 
console.log(id === 100 ? 'correct' : 'incorrect');
console.log(age < 16 || age > 65) ? `${name} cannot participate in the trianthlon` : `${name} is registered for race`)


// without braces - in js when we do if statement, the brackets/ curly braces are optional 

if (id === 100)
console.log('correct without braces');
else 
console.log('incorrect without braces')
//  not recommanded 