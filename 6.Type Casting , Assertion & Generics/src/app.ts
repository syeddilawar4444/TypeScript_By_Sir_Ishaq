// Class 6
// TYPE CASTING type assertion
const input = document.getElementById("num1")! as HTMLElement;
const input2 = <HTMLInputElement>document.getElementById("num2"); //recommended way for typeScript Documentation

// GENERICS

const PromiseFunc = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("operation perform");
    }, 2000);
  });
};
PromiseFunc().then((data) => {
  const text = data.split(" ");
  console.log(text);
});

function merge<T extends object, B extends object>(objA: T, objB: B) {
  return { ...objA, ...objB };
}

const objA = {
  nothing: "",
  name: "dilawar",
  developer: ["javascript"],
};
const objB = {
  id: 888,
  book: "A Smarter Way To Learn JavaScript",
};
const merged = merge(objA, objB);
console.log(merged);
