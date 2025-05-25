// Using Type Aliasis
type Person = {
    readonly id: number,
    name: string,
    age: number,
}

// You can use it multiple times for declaring there structure
let person1: Person = {
    id: 204,
    name: "Ashok Verma",
    age: 24,
}

let person2: Person = {
    id: 205,
    name: "Anand Mishra",
    age: 28,
}

let person3: Person = {
    id: 206,
    name: "Vijay Pandit",
    age: 25,
}

function createPerson(person: Person) {

}

createPerson({id: 207, name: "A", age: 21});