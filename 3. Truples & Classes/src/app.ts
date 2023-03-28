// class 3
// tuples :[string,number] //syntex
// tuples contain the spacific length
// tuples disadvangate to allow the array "push()" method
let gender: [string, string] = ["Male", "Female"];

//Classes OOPS
class User {
  // visibility modifiers public private
  name: string;
  private rollNo: number;
  constructor(n: string, r: number) {
    (this.name = n), (this.rollNo = r);
  }
}
const user1 = new User("dilawar", 20634);
console.log(user1);

// short method
class Student {
  // visibility modifiers public private
  private skill: string[] = [];
  constructor(public name: string, public readonly r: number) {} //readonly to read not write

  addskill(skill: string) {
    this.skill.push(skill);
  }
}
const Student1 = new Student("dilawar", 20634);
// Student1.skill.push("javascript"); //error to private modifier
// Student1.skill.length = 0; //error to private modifier

console.log(Student1);
