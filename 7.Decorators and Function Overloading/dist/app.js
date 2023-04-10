"use strict";
// class 6
// DECORATORS
// hamesha class ka sath use ho tha ha decorators helper funcation ha
// decorators naming convention capitalize first letter
// @functionName syntax
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function FirstDecorators() {
    // this Decorators Factory
    return (constructor) => {
        //Decorators
        console.log("fitst Decorators called");
        const cls = new constructor();
        console.log(cls.constructor.name);
    };
}
function SecondDecorator(templete, elemId) {
    // this Decorators Factory
    return (constructor) => {
        //Decorators
        const elem = document.getElementById(elemId);
        const classesInstance = new constructor();
        if (elem) {
            elem.innerHTML = templete;
            elem.querySelector("h1").innerHTML = classesInstance.name;
        }
    };
}
let FirstClass = class FirstClass {
    constructor() {
        this.name = "Hassnain";
    }
};
FirstClass = __decorate([
    FirstDecorators(),
    SecondDecorator("<h1>book</h1>", "app")
], FirstClass);
let Animal = class Animal {
    constructor() {
        this.name = "LION";
    }
};
Animal = __decorate([
    FirstDecorators()
], Animal);
function overloading(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        throw new Error("type did not match");
    }
}
//string
const str = overloading("dilawar", "hussain");
console.log(str.includes("h"));
//number
const num = overloading(30, 20);
console.log(num.toFixed(2));
// both number and string
// const numString = overloading(30, "20");
// console.log(numString.toFixed(2));
//# sourceMappingURL=app.js.map