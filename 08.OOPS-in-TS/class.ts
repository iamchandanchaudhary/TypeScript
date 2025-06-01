// class decleration
class People {
    email: string;
    name: string;
    readonly city: string = "Basti";

    // Constructor
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }

    // function name5(email: string, name: string) {
    //     this.email = email;
    //     this.name = name;
    // }
}

const p1 = new People("chandan@gmail.com", "Chandan");
