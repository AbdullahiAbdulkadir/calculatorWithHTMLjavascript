// create a fun for add number
function sum(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

let n1 = document.getElementById("num1");
let addButton = document.getElementById("Add");
let subButton = document.getElementById("sub");
let multiButton = document.getElementById("multi");
let divButton = document.getElementById("div");

let n2 = document.getElementById("num2");

addButton.addEventListener("click",function(){
 // console.log(n1.value);
  // console.log(n2.value);
  let number1 = n1.value * 1;
  let number2 = n2.value * 1;

  console.log(sum(number1,number2));

});

subButton.addEventListener("click", function () {
  let number1 = n1.value * 1;
  let number2 = n2.value * 1;

  console.log(sub(number1, number2))
})

multiButton.addEventListener("click", function () {
  let num1 = n1.value * 1;
  let num2 = n2.value * 1;

  console.log(multiply(num1, num2))
})

divButton.addEventListener("click", function() {
  let num1 = n1.value * 1;
  let num2 = n2.value * 1;

  console.log(division(num1, num2))
})
