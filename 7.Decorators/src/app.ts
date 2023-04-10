// class 6
// DECORATORS
// hamesha class ka sath use ho tha ha decorators helper funcation ha
// decorators naming convention function capitalize first letter
// @functionName syntax

function FirstDecorators() {
  // this Decorators Factory
  return (constructor: any) => {
    //Decorators
    console.log("called");
    const cls = new constructor();
    console.log(cls.name);
  };
}

function SecondDecorator(templete: string, elemId: string) {
  // this Decorators Factory
  return (constructor: any) => {
    //Decorators
    const elem = document.getElementById(elemId);
    const classesInstance = constructor();
    const cls = new constructor();

    if (elem) {
      elem.innerHTML = templete;
      elem.querySelector("h1")!.innerHTML = classesInstance.name;
    }
  };
}

@FirstDecorators()
@SecondDecorator("<h1>book</h1>", "app")
class Person {
  name = "Dilawar";
  constructor() {}
}
