// Here we discuss more features about Interfaces

interface StudentProfile {
    readonly dbId: number,
    name: string,
    age: number,
    googleId?: string,

    startTrail(): string,

    coupne(coupneName: string): number
}

// ==> You can add more properties
interface StudentProfile {
    githubToken: string
}

// ==> Inheritance is also possible in Interface
interface Adimn extends StudentProfile {
    role: "hr" | "learner" | "employee"
}

let stu2: StudentProfile = {
    dbId: 204,
    name: "Ashok Verma",
    age: 24,

    startTrail: () => {
        return "Trail Started";
    },

    coupne: (name: "Chandu77") => {
        return 10;
    },

    githubToken: "Chandu55"
}

// Use of inherited admin (Interface)
let stu3: Adimn = {
    dbId: 204,
    name: "Chandan Chaudhary",
    age: 18,
    role: "learner",

    startTrail: () => {
        return "Trail Started";
    },

    coupne: (name: "Chandu77") => {
        return 10;
    },

    githubToken: "Chandu55"
}