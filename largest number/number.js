// prompt using
const prompt = require('prompt-sync')();

const first = prompt("Enter the first number:");
const second = prompt("Enter the second number:");
const third = prompt("Enter the third number:");
if(first == second || first == third || second == first || second == third || third == first || third == second){
  console.log();
}else{
  console.log("Enter the third number: " + third);
console.log("The largest number is " + Math.max(first , second , third))
}