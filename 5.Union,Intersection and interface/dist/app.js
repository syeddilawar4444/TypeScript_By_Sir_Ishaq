"use strict";
// class 5
// Union Types intersection Types Interfaces
// Union types means one type at a time
const Tiger = {
    name: "Tiger",
    runningSpeed: 200,
};
// Intersection Types means two types merge
const cockroach = {
    name: "cockroach",
    flyingSpeed: 40,
    runningSpeed: 80,
};
const flyRun = {
    name: "something",
    flyingSpeed: 20,
    runningSpeed: 200,
};
//interface apply in class use inplements
class Human {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    eat(food) {
        return "eating food";
    }
}
// TYPES GUARDS
const arrow = (species) => {
    if (!("flyingSpeed" in species)) {
        console.log(species.runningSpeed);
        return species;
    }
    else {
        console.log(species.flyingSpeed);
        return species;
    }
};
const Eagle = {
    name: "Eagle",
    flyingSpeed: 300,
};
const lion = {
    name: "lion",
    runningSpeed: 200,
};
const ret = arrow(lion);
console.log(ret);
//# sourceMappingURL=app.js.map