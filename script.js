// DOM Manipulation
// html se element select karna, html se text badlna, html badlna, css badlna, attribute badlna, Event Listner

// get by ID of element
let heading = document.getElementById("heading");
console.dir(heading);

// get Using querry selector
let newHeading = document.querySelector("h1");
console.dir(newHeading);

// text change in javascript
newHeading.textContent = "Vapas se same usi state pe pohoch jao";

// html change in javascript 
newHeading.innerHTML = "<i>vaps se same usi state pe phoch jao</i>";

// css change in javascript
newHeading.style.color = "red";
newHeading.style.backgroundColor = "black";

// attribute Manupulation/changes in javascript

let attribute = document.querySelector("a");
attribute.setAttribute("href","https://www.google.com/");  // Set attribute
console.log(attribute.getAttribute("href"));               // Get attribute

// Dynamic Dom Manupulation
// Create element karo
let h1 = document.createElement("h1");

// element ko append karo ya prepend karo
document.body.append(h1);

// element ka text content change karo
h1.textContent = "Hello Ji kaise Ho";