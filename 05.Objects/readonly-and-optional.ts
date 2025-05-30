let person: {readonly id: number, name: string, age: number, city: string, height?: number} = {
    id: 305,
    name: "Angad",
    age: 42,
    city: "",  // You can pass empty string
    // height: 5.4, // It is Optional
};

person.age = 33; // it can be modify
// person.id = 312;  // ==> You can not modify because it is a read only property

// Note:- If id would be array, can we push values to array in case of readonly

type User = { // With Aliases
    readonly id: string,
    name: string,
    isPaid: boolean,
    wight?: number,
}

let user1: User = {
    id: "APS2",
    name: "Anjali",
    isPaid: true,
    // wight: 50.6,
}

let user2: User = {
    id: "APS3",
    name: "Avantika",
    isPaid: true,
    wight: 54.6,
}

// => Mixing 2 Aliases
type cardNumber = {
    cardNumber: number
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}