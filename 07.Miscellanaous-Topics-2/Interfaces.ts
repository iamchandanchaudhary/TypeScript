interface Student {
    readonly dbId: number,
    name: string,
    age: number,
    googleId?: string,

    // startTrail: () => string,
    startTrail(): string,

    coupne(coupneName: string): number
}

let stu1: Student = {
    dbId: 204,
    name: "Ashok Verma",
    age: 24,

    startTrail: () => {
        return "Trail Started";
    },

    coupne: (name: "Chandu77") => {
        return 10;
    }
}