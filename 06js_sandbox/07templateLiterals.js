// template literals - are string literals allowing embaded expressions 

const name = "John";
const age = "35"; 
const job = "web developer";
const city = "Chicago";

// how we used to do incoperate emplate literals back in the day Es5
html = '<ul><li>Name: ' + name + '</li></ul>'

// with recent template string in ES6 
//  use backicks `` and ${}
// much cleaner and easy to write 
function hello() {
    return 'hello awesome party!'
}
html = `
<ul>
   <li>Name: ${name}</li>
   <li>Age: ${age}(</li>
   <li>Jobs:${job} </li>
   <li>City: ${city}</li>
   <li> ${hello}</li>
   <li> ${age > 30 ? "hey you're over 30" : "yo you're under 30"}</li>
</ul>
`;


// output in html 
document.body.innerHTML = html;
