class User {
    public email: string;
    name: string;  // ==> by default every keys are 'public'
    private readonly city: string = "Basti";
    #age: number = 18;  // ==> another method of making private(mostly used in JS)

    // Constructor
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
        this.city; // ==> can be access under the class
    }
}

const u1 = new User("chandan@gmail.com", "Chandan");
u1.email; // ==> can be access any where
// u1.city  // ==> can't be access outsite the class