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



// event-: agar some action perform hota hai to us action ko event kehte hai
// Event Listner-: apne koi action ka reaction diya
// click, mouseover, mouseout, mousemove, keypress, keydown, keyup, load, unload, focus, blur

// click event listner
h1.querySelector("h1");
function clickHandler(){
    h1.style.color = "blue";
    h1.style.backgroundColor = "yellow";
};
h1.addEventListener("click", clickHandler);

//remove event listener
h1.removeEventListener("click", clickHandler);

// input event listener
let inp = document.querySelector("input");
inp.addEventListener("input", function(e){
    if(e.data != null){
        console.log(e.data);
    }
});

// change event listener-: change event jab koi input text change ho jaye aur fir input box se bahar click kare
let select = document.querySelector("select");
let div = document.getElementById("Device");
select.addEventListener("change", function(e){
    div.textContent = `${e.target.value} Device selected`;
    console.log(e.target.value);
});