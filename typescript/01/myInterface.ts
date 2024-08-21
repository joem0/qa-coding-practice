interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrial():string,
    // startTrial: () => string,
    getCoupon(couponname: string): number
}

const joe: User = {dbId:1,email:"j@j.com", userId:59,startTrial: () => {
    return 'trial started'
},
getCoupon: (name: "10off") => {
    return 10
}}
// joe.dbId = 23
