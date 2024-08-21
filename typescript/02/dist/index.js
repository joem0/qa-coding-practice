"use strict";
class User {
    constructor(email, name) {
        this._courseCount = 1;
        this.city = "";
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1.");
        }
        this._courseCount += courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const joe = new User("j@j.org", "joe");
// joe.city = "Juno"
