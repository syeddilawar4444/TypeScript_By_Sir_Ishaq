// class 6
// DECORATORS
// hamesha class ka sath use ho tha ha decorators helper funcation ha
// decorators naming convention function capitalize first letter
// @functionName syntax

function FirstDecorators() { // this Decorators Factory
  return (constructor: any) => { //Decorators
    console.log("called");
    const cls = new constructor();
    console.log(cls.name);
  };
}

@FirstDecorators() 
class Person {
  name = "Dilawar";
  constructor() {}
}
