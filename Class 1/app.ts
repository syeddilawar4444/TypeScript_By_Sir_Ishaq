const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const button = document.getElementById("btn")!;

const add = function (val1: number, val2: number) {
  return val1 + val2;
};

button.addEventListener("click", function () {
  let firstInput = input1.value;
  let secondInput = input2.value;
  console.log(add(+firstInput, +secondInput));
});

//Basic Types
// 1 String : string => "dilawar","hussain"
// 2 number : number => 0,-20,4.5
// 3 boolean : boolean => true false

// Example;
//string Example
// let person: string;
// person = "type String";

// array example
// let users: string[];
// users = ["dilawar", "bilal", "hassnain", "azeem"];
// users.push("20");
// users.push();
