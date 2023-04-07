"use strict";
// class 6
// DECORATORS
// hamesha class ka sath use ho tha ha decorators helper funcation ha
// decorators naming convention function capitalize first letter
// @functionName syntax
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function FirstDecorators() {
    return (constructor) => {
        console.log("called");
        const cls = new constructor();
        console.log(cls.name);
    };
}
let Person = class Person {
    constructor() {
        this.name = "Dilawar";
    }
};
Person = __decorate([
    FirstDecorators()
], Person);
//# sourceMappingURL=app.js.map