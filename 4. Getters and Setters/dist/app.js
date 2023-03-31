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
    get id() {
        return this._id;
    }
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
    /* getter syntex " get name(){
       return this.value
     }"*/
    // getter means get the value.
    // getter required the return
    get price() {
        return this._price;
    }
}
const product1 = new Product(1, "keyboard", 450);
product1.name = "Lighting keyboard";
console.log(product1);
//# sourceMappingURL=app.js.map