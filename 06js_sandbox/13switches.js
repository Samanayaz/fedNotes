// switches : it's an another way to validate conditions. it works as a same way as if statements. use case: when there is lots of cases and trying to avoid repeating "else if " over and over. 

//  example 1 : 
const color = 'red';
switch(color) {
    case 'red': 
    console.log('color is red');
    break;
    case 'blue':
        console.log('color is blue');
    break;
    default:
        console.log('color is not blue');
    break;
}

//  example 2 
let day;

switch(new Date().getDay()) {
    case 0:
        day = 'sunday';
        break;
        day
    case 1:
        day = 'monday';
        break;
        day
    case 2:
        day = 'tuesday';
        break;
        day
    case 3:
        day = 'wednesday';
        break;
        day
    case 4:
        day = 'thursday';
        break;
        day
    case 5:
        day = 'friday';
        break;
        day
    case 6:
        day = 'saturday';
        break;
        day
}

console.log(`today is ${day}`);

