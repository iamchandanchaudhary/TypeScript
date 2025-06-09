"use strict";
var _User_age;
class User {
    constructor(email, name) {
        this.city = "Basti";
        _User_age.set(this, 18);
        this.email = email;
        this.name = name;
        this.city;
    }
}
_User_age = new WeakMap();
const u1 = new User("chandan@gmail.com", "Chandan");
u1.email;
