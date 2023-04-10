// class 6
// DECORATORS
// hamesha class ka sath use ho tha ha decorators helper funcation ha
// decorators naming convention capitalize first letter
// @functionName syntax

function FirstDecorators() {
  // this Decorators Factory
  return (constructor: any) => {
    //Decorators
    console.log("fitst Decorators called");
    const cls = new constructor();
    console.log(cls.constructor.name);
  };
}

function SecondDecorator(templete: string, elemId: string) {
  // this Decorators Factory
  return (constructor: any) => {
    //Decorators
    const elem = document.getElementById(elemId);
    const classesInstance = new constructor();
    if (elem) {
      elem.innerHTML = templete;
      elem.querySelector("h1")!.innerHTML = classesInstance.name;
    }
  };
}

@FirstDecorators()
@SecondDecorator("<h1>book</h1>", "app")
class FirstClass {
  name = "Hassnain";
  constructor() {}
}

@FirstDecorators()
class Animal {
  name = "LION";
  constructor() {}
}

// FUNCTION OVERLOADING
// syntax function overloading(a:string,b:string):string
// syntax function overloading(a:number,b:number):number
// using typeCasting as number , as string

type Combined = string | number;
function overloading(a: string, b: string): string;
function overloading(a: number, b: number): number;

function overloading(a: Combined, b: Combined) {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
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