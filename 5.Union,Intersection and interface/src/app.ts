// class 5
// Union Types intersection Types

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

interface InCreature extends Animals, Birds {} //intersection Interface
// interface Nothing extends Animals, Birds {}

const flyRun: InCreature = {
  name: "something",
  runningSpeed: 20,
  flyingSpeed: 20,
};
