/////// Variables Section ///////
const myName = "Joanne Kim"
const fruits = ['apples', 'bananas', 'blueberries', 'strawberries', 'pineapples'];
const car = [{make:"Toyota", model:"Prius", color:"Silver"},
             {make:"Chevy", model:"Bolt", color:"Blue"}, 
             {make:"Honda", model:"HRV", color:"Silver"}];
const today = new Date();
const loggedIn = false;
const currentYear = new Date().getFullYear();


/////// PART 1 - Variables and Data Types demo///////
var a = 'Test1';
let b = 'Test2';

function testVar(){
  var a = 30;
  
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

function testLet(){
  let a = 30;
 
  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

// console.log(a);
// console.log(b);
// console.log("Example using var");
// testVar();
// console.log("Example using LET");
// testLet();
// When you are done with this section you can comment out the console.logs above






//////// PART 2 - template literals////////
const result2Element = document.getElementById('result2');

////starter code////
//update code below to using template literals (not concatenation) to pull in the variables myName, color, make, into output
result2Element.innerHTML = `Hello my name is ${myName} and I drive a ${car[2].color} ${car[2].make} ${car[2].model}.`;


//Footer Section
const footerElement = document.getElementById("footer");
//update code below to use template literals to pull in the myName and the current year
footerElement.innerHTML = `&copy; ${myName} ${currentYear}`;





//////// PART 3 - Ternary Operator////////
////section 1 - basic if else statement
// if (loggedIn) {
//     const result3Element = document.getElementById('result3');
//     result3Element.innerHTML = "Welcome back!";
// } else {
//     const result3Element = document.getElementById('result3');
//     result3Element.innerHTML = "Please log in";
// }

////Sample code.  You can uncomment this to see how simple a ternaly operator can be
// loggedIn ? alert("welcome back") : alert("please log in");

////section 2 -ternary operator to update the result3Element

const result3Element = document.getElementById('result3');
loggedIn ? result3Element.innerHTML = "Welcome back!" : result3Element.innerHTML = "Please log in";




//////// PART 4 - Arrow Functions////////
function Greetings(name) {
    return `Hello ${name}!`;
};

console.log(Greetings("Clint"));

//Make a copy of the above function and rename it GreetingsArrow() and then convert function to an arrow function here
GreetingsArrow = name => {
  return `Hello ${name}!`;
};

console.log(GreetingsArrow("Clint"));



//////// PART 5 - Array methods////////
function printFruit() {

    let resultElement = document.getElementById("result5");

    resultElement.textContent = "";

    // Loop through the fruits array
    // for (let i = 0; i < fruits.length; i++) {
 
    //     // Create a list item for each fruit
    //     let p = document.createElement("p");
    //     p.textContent = fruits[i];

    //     // Append the list item to the ordered list
    //     resultElement.appendChild(p);
    // }
    const filteredFruits = fruits.filter(filterB);

    filteredFruits.map(fruit => {
      let p = document.createElement("p");
      p.textContent = fruit;

      resultElement.appendChild(p);
    })
 }
 
 
 function clearText() {
    let resultElement = document.getElementById("result5");
    resultElement.textContent = "";
 }

function filterB(fruit){
  return fruit.charAt(0) == 'b'|| fruit.charAt(0) == 'B';

}



 //////// PART6 - Destructuring////////
 myCar(car[0]);

//  function myCar(car) {
//      var make = car.make;
//      var model = car.model;
//      var color = car.color;
 
//      var message = `I drive a ${color} ${make} ${model}`;
   
//      document.getElementById("result6").textContent = message;
//  }

//convert the myCar function to use destructuring

function myCar({make, model, color}) {
  var message = `I drive a ${color} ${make} ${model}`;

  document.getElementById("result6").textContent = message;
}






//////// PART 7 - Spread Operator////////

const baseProduct = {
    id: 'PROD-001',
    name: 'Wireless Headphones',
    price: 199.99,
    warranty: '1 year'
  };
  
  // Seasonal promotion overrides
  const holidayPromo = {
    price: 149.99,
    promoText: 'Holiday Special!',
    bundle: 'Free carrying case'
  };
  
  // Merge basePrduct and Seasonal using spread operator and add lastUpdated property with a value of '2023-12-31'
  ///UPDATE THIS CODE
  const currentProduct = { ...baseProduct, ...holidayPromo, lastUpdated: '2023-12-31'};
  
  //Check the result object in the console:
  console.log(currentProduct);
  //UPDATE THIS OUTPUT
  document.getElementById("result7").textContent = `The ${currentProduct.name} are on sale for ${currentProduct.price} as of ${currentProduct.lastUpdated}`; 





 //////// PART 8 - Try Catch////////
 function InputValidation() {
    const message = document.getElementById("part8-p");
    message.innerHTML = "";
    
    let x = document.getElementById("part8-input").value;
    
    try { 
      if (x == "") throw "Input is EMPTY";
      if (isNaN(x)) throw "Input is NOT A NUMBER";
      x = Number(x);
      if (x > 15) throw "Input is TOO HIGH";
      if (x < 10) throw "Input is TOO LOW";

      message.innerHTML = "Success."
    }
    catch(err) {
      message.innerHTML = err
     } 
    finally {
      console.log("Input validation completed.")

    }

    
  }


