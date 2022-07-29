console.log("welcome");
console.log("8*8");

/*var x = 5;
var y = 8;
var b = x + y;
var d = 1;
console.log(++ b + d);

let x1 = 8
let z1 = 8
let y1 = x1 + z1
console.log(y1)

let rollno = 10
let firstName = 'DEv'
let lastName = "Singh"
console.log(rollno + firstName + lastName)

let carName = "Volvo";
//document.getElementById("demo").innerHTML = carName;

//we assign many variables
let person = "John Doe", carName1 = "Volvo", price = 200;

let x2 = 5 + 2 + 3 * 8 / 2;
console.log(x2)

let g = 2 + 3 + "5";
//concatenated

let h = "5" + 4 + 3;

console.log(g)

console.log(h)

//$ _ both are treated as letters they are valid variables

let $myMoney = 5;
let $$$ = 2;
let _x = 2;  // x could be letters or digits strings/integers.

console.log($$$ + $myMoney)
console.log(_x)
console.log($$$ + _x)

var x5 = "John Doe";

var x5 = 0; // overwrites earlier defined
console.log(x5)


{
    let x6 = 2;

    console.log(x6)
  }
  // will not work here bcz x6 LET is a block scope console.log(x6) and valid for const too.
  
  {
    var x7 = 200;
  }
  // x CAN be used here by var it'a global scope 
  console.log(x7)


//15/7/22;The const keyword was introduced in ES6 (2015).Variables defined with const cannot be Redeclared.Variables defined with const cannot be Reassigned.Variables defined with const have Block Scope.

const PI = 3.141592653589793;
//PI = 3.14;  both will show error const can't redeclared      
//PI = PI + 10;
console.log(PI)

//JavaScript const variables must be assigned a value when they are declared: otherwise show error e.g 
const PII = 3.14; //this is correct it will not show error
//const PII; //this is not correct
//PII = 3.14; //wil show error
console.log(PII); 

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";//0mfor first car name,1 for second....

//cars = ["Toyota", "Volvo", "Audi"];   will show ERROR

// You can add an element:
cars.push("BENZ");
console.log(cars)

//Declaring a variable with const is similar to let when it comes to Block Scope.

//redeclaring
//Redeclaring an existing var or let variable to const, in the same scope, is not allowed:

/*var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed

var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}

//Reassigning an existing const variable, in the same scope, is not allowed:

const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}

//Redeclaring a variable with const, in another scope, or in another block, is allowed:

const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}

//Variables defined with var are hoisted to the top and can be initialized at any time.Meaning: You can use the variable before it is declared:Example

brandName = "Volvo";
var brandName;

console.log(brandName)

//operators
var d = 10;
d **= 5;
console.log(d)

16/7

var f = 11;
//f *= 3;
//f /= 3;
//f %= 3;
//f <<= 3;
//f >>= 3;
//f >>>= 3;
//f &= 1;
//f ^= 3;
//f |= 2;
f **= 3;

//console.log(f<<s);
//console.log(f>>>s);
console.log(f);

function toCelsius(h) {
  return (5/9) * (h-32);
}*/

// function sum(a, b){ 
//     // return a += b
//     return a + b;
// }

// function sub(a, b){ 
//     let c = a - b;
//     return c;
// }

// function mul(a, b){ 
//     let c = a * b;
//     return c;
// }

 //let a = 111;
 ///let b = 111;
 //let total_sum = sum(a, b)
// let total_sub = sub(a, b)
// let total_mul = mul(a, b)

//console.log(`${a} + ${b} = ` + total_sum)
// console.log(`${a} - ${b} = ` + total_sub)
// console.log(`${a} * ${b} = ` + total_mul)

//var str = "this is my lab"
//console.log(str);

//var position = str.lastIndexOf('is');
//console.log(position)

/*const person = {
  firstName: "John",
  lastName : "Doe",
  id     :  5566
};
console.log(person.firstName + " " + person.lastName);
//console.log(person["firstName"] + " " + person["lastName"]);*/

/*const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName + this.id;
  }
};
console.log(person.fullName());*/

//let text = "AlkjhgfdXYZ";
//console.log(text.length);5

//let text = "We are the so-called "Vikings\" from the north."; //use backslash before""
//console.log(text);