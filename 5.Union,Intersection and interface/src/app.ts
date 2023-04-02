// class 5
// Union Types intersection Types Interfaces

type Animal = {
  name: string;
  runningSpeed: number;
};
type Bird = {
  name: string;
  flyingSpeed: number;
};

//// UNION TYPES
type Creature = Animal | Bird; //Union Types
// Union types means one type at a time
const Tiger: Creature = {
  name: "Tiger",
  runningSpeed: 200,
};

//// INTERSECTION TYPES
type Creatures = Animal & Bird; //InterSection Types
// Intersection Types means two types merge
const cockroach: Creatures = {
  name: "cockroach",
  flyingSpeed: 40,
  runningSpeed: 80,
};

// INTERFACES
// " interface Animials {} " interface syntex
interface Animals {
  name: string;
  runningSpeed: number;
}

interface Birds {
  name: string;
  flyingSpeed: number;
}

// type InCreature = Animals | Birds; //Union Interface
//
interface InCreature extends Animals, Birds {} //intersection Interface
const flyRun: InCreature = {
  name: "something",
  flyingSpeed: 20,
  runningSpeed: 200,
};

// Example to use interface in classes
interface ExampleClasses {
  name: string;
  height: number;
  eat(food: string): string;
}
//interface apply in class use inplements
class Human implements ExampleClasses {
  constructor(public name: string, public height: number) {}
  eat(food: string) {
    return "eating food";
  }
}

// TYPES GUARDS

const arrow = (species: Creature): Creature => {
  if (!("flyingSpeed" in species)) {
    console.log(species.runningSpeed);
    return species;
  } else {
    console.log(species.flyingSpeed);
    return species;
  }
};

const Eagle: Creature = {
  name: "Eagle",
  flyingSpeed: 300,
};
const lion: Creature = {
  name: "lion",
  runningSpeed: 200,
};

const ret = arrow(lion);

console.log(ret);
