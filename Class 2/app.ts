//////////////////////////////////////////////////////
// Class 2                           //
////TypeScript make custom tyep                   //
type PersonsType = {
  //
  name: string; //
  rollNo: number; //
  hobbies: string[]; //
  email?: string; //email is a Optional      //
}; //
/////////////////////////////////////////////
let person: PersonsType = {
  name: "Syed Dilawar Hussain",
  rollNo: 300,
  hobbies: ["reading,Racket"],
};

const data: PersonsType[] = [];
data.push({
  name: "hassnain",
  rollNo: 200,
  hobbies: ["find", "fill", "nothing"],
  email: "syeddilawar4444@gmail.com",
});

//number means function return type
const add = function (val1: number, val2: number): number {
  return val1 + val2;
};

let func: (x: number, y: number) => number;
func = add;

//TypeScript Type Literal
// means wo typeki value jo ma set karw araha hu

const twoOperation = function (
  val1: number,
  val2: number,
  calc: "add" | "subtract" //string Literals
) {
  if (calc === "add") {
    return val1 + val2;
  } else if (calc === "subtract") {
    return val1 - val2;
  }
};

console.log(twoOperation(30, 50, "add"));
