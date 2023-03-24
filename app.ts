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
