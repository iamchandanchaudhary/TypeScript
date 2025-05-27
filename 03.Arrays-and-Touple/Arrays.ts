const names: string[] = ["Chandan"];

names.push("Aman"); // no error

//names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

console.log(names);

// the only way to store 2 different types of values
const arr: (string | number)[] = [1, "Chandan", 18];