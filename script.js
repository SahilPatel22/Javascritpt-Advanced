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


// Keyboard event listener

let h3 = document.querySelector("h3");
window.addEventListener("keydown", function(e){
    h3.textContent = e.key ;
});

// form event listener
// let form = document.querySelector("form");
// form.addEventListener("submit", function(e){
//     e.preventDefault();});

// Forms and Form Validations
// form validation-: form submit hone se pehle check karna ki form me sahi data dala hai ya nahi
// required, type, pattern, min, max, minlength, maxlength

let nm = document.querySelector("#name");
let EM = document.querySelector("#email");
let form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault(); // form submit hone se roko

    // Name validation
  if (nm.value.length <= 2) {
    document.querySelector("#NAMEID").style.display = "inline";
  }

   // Email validation
    // This regex is give by chatGPT
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(EM.value)) {
    document.querySelector("#EmailID").style.display = "inline";
  }

  //password validation
  // These regex is give by chatGPT
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if(!strongPasswordRegex.test(password.value)){
    document.querySelector("#PasswordID").style.display = "inline";
  }
});

// Timers and Intervals
// setTimeout, clearTimeout, setInterval, clearInterval 
// setTimeout-: ye function ek baar specified time ke baad call hota hai
// clearTimeout-: ye function setTimeout ko rokta hai
// setInterval-: ye function specified time ke baad baar baar call hota hai
// clearInterval-: ye function setInterval ko rokta hai 

// setTimeout example
// ye ek bar chalta he
let timeoutId = setTimeout(function(){
    console.log("Hello World");
}, 3000);

// clearTimeout example
clearTimeout(timeoutId);
console.log("Timeout cleared");

// setInterval example
// ye baar baar chalta he
let count = 0;      
let intervalId = setInterval(function(){
    count++;
    console.log("Count: " + count);
}, 1000);

// clearInterval example
setTimeout(function(){
    clearInterval(intervalId);
    console.log("Interval cleared");
}, 5000);
  
// seesion storage and local storage and cookies
// local storage-: ye data ko browser me store karta hai aur data tab tak rehta hai jab tak user manually data ko delete nahi karta
// local storage and session storage me data key-value pair me store hota hai
// local storage and session storage me sirf string hi store hota hai
// local storage and session storage me data ko set, get, remove, clear kar sakte hai
// session storage-: ye data ko browser me store karta hai aur data tab tak rehta hai jab tak browser tab close nahi hota

//local storage example
/// Store kaise kare
localStorage.setItem("name", "John Doe");

// data fecth kaise kare
let val = localStorage.getItem("name");
console.log(val);

// remove kaise kare
localStorage.removeItem("name");

// clear kaise kare
localStorage.clear();


// session storage example
// Store kaise kare
sessionStorage.setItem("sessionName", "Jane Doe");

// data fecth kaise kare
let sessionVal = sessionStorage.getItem("sessionName");
console.log(sessionVal);

// remove kaise kare
sessionStorage.removeItem("sessionName");

// clear kaise kare
sessionStorage.clear();


// cookies-: ye data ko browser me store karta hai aur data tab tak rehta hai jab tak cookie expire nahi hoti
// cookies me data key-value pair me store hota hai
// cookies me sirf string hi store hota hai
// cookies me data ko set, get, remove kar sakte hai
// cookies me data ko expire time ke sath set kar sakte hai
// cookies me jo page reload hone par data server ko bheja jata hai

// cookies example

// set cookie
document.cookie = "username=John Doe; expires=Fri, 31 Dec 2024 23:59:59 GMT; ";

// get cookie
let cookies = document.cookie;
console.log(cookies); 

