// Execution Context:
// js sabse pahle jaise hi apka function dekhta hai sabse pahle banata hai execution context
// Execution context me do cheeze hoti hai
// 1. Memory phase
// 2. Execution phase

// This Keyword
// Global Scope
console.log(this); // this refers to the global object (window in browsers)

function myFunction() {
  console.log(this); // In a regular function, 'this' refers to the global object (window in browsers)
}
myFunction();

// Object Method -1
const myObject1 = {
  name: "JavaScript",   
    getName() { // agar object me normal function use kara he to ye object ko refer karega.
    console.log(this); // In an object method, 'this' refers to the object itself
    },
};
myObject1.getName();

// Object Method -2
const myObject2 = {
  name: "JavaScript",   
    getName: () => {
    console.log(this); // agar object me arrow function use kara he to ye window ko refer karega.
    },
};
myObject2.getName();

// Object Method - 3
const myObject3 = {
  name: "JavaScript",
  getName: () => {
    const getAge = () => {
      console.log(this);   // arrow function ke andar arrow function me bhi this window ko hi refer karega.
    };
    getAge();
  },
};
myObject3.getName();

// Object Method - 4
const myObject4 = {
  name: "JavaScript",
  getName() {
    const getAge = () => {
      console.log(this); // normal function ke andar arrow function me this outer function ko refer karega.
    };
    getAge();
  },
};
myObject4.getName(); 

// Object Method - 5
const myObject5 = {
  name: "JavaScript",
  getName: () => {
    function getAge() {
      console.log(this);  // arrow function ke andar normal function me this window ko hi refer karega.
    }
    getAge();
  },
};
myObject5.getName();

// Object Method - 6
const myObject6 = {
  name: "JavaScript",
  getName() {
    function getAge() {
      console.log(this); // normal function ke andar normal function me this window ko hi refer karega.
    }
    getAge();
  },
};
myObject6.getName();

// Event Handler
let Heading = document.querySelector("h1");
Heading.addEventListener("click", function() {
  console.log(this.style.color = "red"); // In an event handler, 'this' refers to the element that received the event
});

// Call, Apply, and Bind
// Function ko set karte vakt app set kar sakte ho ki this ki value kya hogi
const anotherObject = {
  name: "Advanced JavaScript",
  Age: 22,
};      

function showName(a, b, c) {
    console.log(this, a, b, c); // 'this' will refer to the object passed to call/apply/bind
}   

// Using call
showName.call(anotherObject, 1, 2, 3); 
// Using apply
showName.apply(anotherObject, [1, 2, 3]); 
// Using bind
let fnc = showName.bind(anotherObject, 1, 2, 3); 
fnc(); // Calling the bound function  


// object oriented programming

// Constructor Function

function Createpencil(name, Price, Color){
  this.name = name;
  this.Price = Price;
  this.Color = Color;
}

// agar tumhara sabhi objects me same property ya method hai to ap usse prototype me add kar sakte ho
Createpencil.prototype.company = "Sheriyans";

Createpencil.prototype.write = function(text){
  let h1 = document.createElement("h1");
  h1.innerText = text;
  h1.style.color = this.Color;
  document.body.appendChild(h1);
}
const pencil1 = new Createpencil("Natraj", 10, "Yellow");
const pencil2 = new Createpencil("Apsara", 15, "Blue");

class User{
  constructor(name, address, username, email, role ){
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }

  write(text){
    let h2 = document.createElement("h2");
    h2.innerText = `Name: ${this.name}, Address: ${this.address}, Username: ${this.username}, Email: ${this.email}, Role: ${this.role}`;
    document.body.appendChild(h2);
  }
}

class Admin extends User{
  constructor(name, address, username, email){
    super(name, address, username, email);
    this.role = "admin";  

  }

  remove(){
      document.querySelectorAll("h2").forEach((el) => el.remove());
    }
  }

let u1 = new User("John Doe", "123 Main St", "johndoe", "heelo@gmail.com", "admin");

// Clasical Inheritance-: classses banana and unhe extend se inherit karna

// Prototype Inheritance-: object se object se inherit karna
// ek object hai app chaho to uski sari props or methods dusre object me use kar sakte ho

let cofee = {
  color: "dark",
  drink: function() {
    console.log("Gut Gut Gut...!");
  }
};

let arabiataCofee = Object.create(cofee);
arabiataCofee.taste = "bitter";
arabiataCofee.drink(); // inherited method from cofee prototype



// koi bhi code js me line by line chalta hai. but kabhi kabhi ese cases ate hai jaha par apka code wait karta hai jab tak dusra code chal jata hai
// ese cases me ap async programming ka use karte ho

// Callback Function-: agar app ek function ke andar dusra function pass karte ho to parameter wala function callback kehlata hai

function kuchderbadchalunga(fnc){
  setTimeout(fnc,Math.floor(Math.random() * 20) * 1000);
}

kuchderbadchalunga(function(){
  console.log("Hello World");
});

function profilelekaraao(username, cb){
  setTimeout(() => {
    cb({username: username, age: 22, email: "huiui@gmail.com"});
  }, 3000);
}

profilelekaraao("harsh", function(data){
  console.log(data);
});

// Promises-: aap ek promise banate ho jo ki do states mein se ek state me ja sakta hai wo yaa to resolve hoga ya to reject hoga ye to wakt batayega par hame done ke liye code likna padta he

let pr = new Promise(function(resolve, reject){
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if(rn > 5){
      resolve("Resolved with" + rn);
    }else{
      reject("Rejected with" + rn);
    }
  }, 3000);
});

pr.then(function(val){
  console.log(val);
}).catch(function(val){
  console.log(val);
});

// Async/Await-: ye promises ka hi ek aur advanced version hai jisme ap async function bana kar await keyword ka use karte ho jisse apka code aur bhi zyada readable ho jata hai

let prom = new Promise(function(resolve, reject){
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if(rn > 5){
      resolve("Resolved with" + rn);
    }else{
      reject("Rejected with" + rn);
    }
  }, 1000);
});

async function abcd(){
  try{
    let val = await prom;
    console.log(val);   
  }catch(err){
    console.log(err); 
  }
  }
abcd();

// Fetch API-: ye ek built in function hai jisse ap network se data fetch kar sakte ho

fetch("https://randomuser.me/api/")
  .then((rawdata) => rawdata.json())
  .then((data) => console.log(data.results[0]));
         
  
    
