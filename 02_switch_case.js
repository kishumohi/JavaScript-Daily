const prompt = require("prompt-sync")();
let age = prompt("enter age");
age = Number.parseInt(age);

switch(age){
  case 12:
    console.log("12");
    break;
  default:
    console.log("you are elder");
}