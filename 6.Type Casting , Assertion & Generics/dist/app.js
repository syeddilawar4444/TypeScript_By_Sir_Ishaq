"use strict";
// Class 6
// TYPE CASTING type assertion
const input = document.getElementById("num1");
const input2 = document.getElementById("num2"); //recommended way for typeScript Documentation
// GENERICS
const PromiseFunc = () => {
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
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
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
//# sourceMappingURL=app.js.map