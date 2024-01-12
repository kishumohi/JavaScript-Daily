const prompt = require("prompt-sync")();
let a = prompt("enter your Age ;- ");
a = Number.parseInt(a);

if(a < 9){
  console.log("You Can not Drive");
}else if(a<18 && a>= 9){
  console.log("You Driving after 18");
}else{
  console.log("You can Now Drive");
}
