class User {
    protected _courseCount = 1
    email: string
    private name: string
    city: string = ""
    constructor(email: string, name:string) {
        this.email = email;
        this.name = name
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }
    
    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1){
            throw new Error ("Course count should be more than 1.")
        }
        this._courseCount += courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const joe = new User("j@j.org","joe")
// joe.city = "Juno"