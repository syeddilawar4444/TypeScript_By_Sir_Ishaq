// run command
// tsc --watch
//
// class 4

abstract class Product {
  constructor(
    private _id: number,
    private _name: string,
    private _price: number
  ) {}

  /* getter syntex " get name(){
     return this.value
   }"*/
  // getter means get the value.
  // getter required the return
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

  get id(): number {
    return this._id;
  }

  get price(): number {
    return this._price;
  }
  // abstract method
  abstract getDiscount(): number;
}

// const product1 = new Product(1, "keyboard", 450);
// product1.name = "Lighting keyboard";
// console.log(product1);

// extends before child class to after class
// extends means all quality inheritance to child
// this case ClothingProduct child to Product Class
class ClothingProduct extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    private _color: string,
    private _size: "S" | "M" | "L" | "XL"
  ) {
    // super means to call the Class "Product" constructor()
    super(id, name, price);
  }
  getDiscount() {
    return this.price * 0.9;
  }
}
const tShirt = new ClothingProduct(2, "Black T-Shirt", 850, "black", "M");
console.log(tShirt);

// absraction
// abstract keyword use the parent Class
// base class chathi ha koi bhi extends kara us ka pass ya method hona chahiya
class ElectornicProduct extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    private _model: string,
    private _power: string
  ) {
    // super means to call the Class "Product" constructor()
    super(id, name, price);
  }
  getDiscount() {
    return this.price * 0.5;
  }
}
const mouse = new ElectornicProduct(3, "MOUSE", 300, "XPTR", "0.1 A");
console.log(mouse);

//  Singletons
class Util {
  private static instance: Util;
  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Util();
    }
    return this.instance;
  }
}

const u1 = Util.getInstance();
const u2 = Util.getInstance();
console.log(u1);
