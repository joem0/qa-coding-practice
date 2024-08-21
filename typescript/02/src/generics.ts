const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

function identityFour<T>(val: T): T{
    return val
}

interface Bottle {
    brand: string,
    type: number
}

class Bottle1 implements Bottle{
    constructor(
        public brand: string,
        public type: number
    ){
    }
}

const waterBottle = new Bottle1("test",1)

identityFour(waterBottle)

function getSearchProducts<T>(products: T[]): T{
    //do stuff
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: Array<T>): T =>{
    //do stuff
    const myIndex = 1
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U>(valOne:T,valTwo:U):object {
    return {
        valOne,
        valTwo
    }
}

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}