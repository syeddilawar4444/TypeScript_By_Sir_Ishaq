"use strict";
// run command
// tsc --watch
//
// class 4
class Product {
    constructor(_id, _name, _price) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
    }
    /* getter syntex " get name(){
       return this.value
     }"*/
    // getter means get the value.
    // getter required the return
    get name() {
        return this._name;
    }
    // Setter means set the value
    // setter required parameter
    /* setter syntex " set name(parameter){
     }"*/
    set name(newname) {
        if (!newname)
            throw new Error("Name cannot be empty");
        this._name = newname;
    }
    get id() {
        return this._id;
    }
    get price() {
        return this._price;
    }
}
// const product1 = new Product(1, "keyboard", 450);
// product1.name = "Lighting keyboard";
// console.log(product1);
// extends before child class to after class
// extends means all quality inheritance to child
// this case ClothingProduct child to Product Class
class ClothingProduct extends Product {
    constructor(id, name, price, _color, _size) {
        // super means to call the Class "Product" constructor()
        super(id, name, price);
        this._color = _color;
        this._size = _size;
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
    constructor(id, name, price, _model, _power) {
        // super means to call the Class "Product" constructor()
        super(id, name, price);
        this._model = _model;
        this._power = _power;
    }
    getDiscount() {
        return this.price * 0.5;
    }
}
const mouse = new ElectornicProduct(3, "MOUSE", 300, "XPTR", "0.1 A");
console.log(mouse);
//  Singletons
class Util {
    constructor() { }
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
//# sourceMappingURL=app.js.map