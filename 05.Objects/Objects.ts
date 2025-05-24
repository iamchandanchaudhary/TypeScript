let student = {
    id: 201,
    name: "Chandan",
};

// student.rollno = 230010;  // ==> Here you can't able to add another value

let employee: {readonly id: number, name: string, age: number, city: string, height?: number} = {
    id: 305,
    name: "Angad",
    age: 42,
    city: "",  // You can pass empty string
};

employee.age = 33;
// employee.id = 312;  // ==> You can not modify because it is a read only property

// Functions in objects
let details: {retire: (date: Date) => void; } = {
    retire: (date: Date) => {
        console.log(date);
    }
}