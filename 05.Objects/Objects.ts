// Normal Object
let student = {
    id: 201,
    name: "Chandan",
};

// student.rollno = 230010;  // ==> Here you can't able to add another key-value

let employee: {id: number, name: string, age: number, city: string, height: number} = {
    id: 305,
    name: "Angad",
    age: 42,
    city: "",  // You can pass empty string
    height: 5.4,
};

employee.age = 33;

// Functions in objects
let details: {retire: (date: Date) => void; } = {
    retire: (date: Date) => {
        console.log(date);
    }
}