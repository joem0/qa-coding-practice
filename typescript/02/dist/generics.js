"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
class Bottle1 {
    constructor(brand, type) {
        this.brand = brand;
        this.type = type;
    }
}
const waterBottle = new Bottle1("test", 1);
identityFour(waterBottle);
function getSearchProducts(products) {
    //do stuff
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //do stuff
    const myIndex = 1;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
