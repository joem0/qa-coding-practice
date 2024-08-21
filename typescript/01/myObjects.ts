// const User = {
//     name: "Joe Schmo",
//     email: "joeschmo@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){

// }

// createUser({name:"testme",isPaid: false})

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name:"",email:"",isActive: true}
// }

// createUser({name:"name123",email:"",isActive: true})

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number;
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & { 
    cvv: number;
}

let myUser: User = {
    _id: "1234",
    name: "John",
    email:"j@j.com",
    isActive: false
}

myUser.email="j@gmail.com"
// myUser._id="12345"

let myCard: cardDetails = {
    cardnumber: "1234",
    cardDate: "12/23",
    cvv:123
}

export {}