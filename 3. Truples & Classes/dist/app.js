"use strict";
// class 3
// tuples :[string,number] //syntex
// tuples contain the spacific length
// tuples disadvangate to allow the array "push()" method
let gender = ["Male", "Female"];
//Classes OOPS
class User {
    constructor(n, r) {
        (this.name = n), (this.rollNo = r);
    }
}
const user1 = new User("dilawar", 20634);
console.log(user1);
// short method
class Student {
    constructor(name, r) {
        this.name = name;
        this.r = r;
        // visibility modifiers public private
        this.skill = [];
    } //readonly to read not write
    addskill(skill) {
        this.skill.push(skill);
    }
}
const Student1 = new Student("dilawar", 20634);
// Student1.skill.push("javascript"); //error to private modifier
// Student1.skill.length = 0; //error to private modifier
console.log(Student1);
//# sourceMappingURL=app.js.map