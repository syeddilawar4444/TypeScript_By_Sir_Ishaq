// run command
// tsc --watch
//
// class 4

class Product {
  constructor(
    private _id: number,
    private _name: string,
    private _price: number
  ) {}

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  // Setter means set the value
  // setter required parameter
  /* setter syntex " set name(parameter){
   }"*/
  set name(newname: string) {
    if (!newname) throw new Error("Name cannot be empty");
    this._name = newname;
  }

  /* getter syntex " get name(){
     return this.value
   }"*/
  // getter means get the value.
  // getter required the return
  get price(): number {
    return this._price;
  }
}

const product1 = new Product(1, "keyboard", 450);

product1.name = "Lighting keyboard";

console.log(product1);
