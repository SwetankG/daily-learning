console.log("to check");

/*function greet(name, greettext){ 
console.log(name, greettext +" "+ "gud mrng");
console.log(name +" "+ "gud mrng");
}

let name = "Vidhi";
let name2 ="anurag";
let name3 = "radha";
let name4 = "raman";
let name5 = "shweta";
let greettext = "wish u a";
 greet(name, greettext);
 greet(name2, greettext);
 greet(name3, greettext);
 greet(name4, greettext);
 greet(name5, greettext);*/

 let jsonObj = {
name: "Vidhi",
school: "SVM",
class: "first",
Section: "none"
 }
 console.log(jsonObj);

 let myJsonStr = JSON.stringify(jsonObj);
 console.log(myJsonStr);