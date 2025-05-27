// 1, "Chandan"
let user: [number, string] = [1, "Chandan"];

// let user2: [number, string] = [1, "Chandan", 3];  // ==> Invalid because there is only 2 values are declered
// let user3: [number, string] = ["Chandan", 4];  // ==> Invalid because arrangement of arrangement is wrong

user[0].toFixed  // ==> it will suggest only all the methods of number object
user[1].length  // ==> it will suggest only all the string methods

let rcb: [number, number, number] = [255, 255, 255];  // Prime Example

// Using Aliases
type User = [number, string, number];

// Making it Flexible & strict
let newUser1: User = [1, "Chandan", 18];
let newUser2: User = [2, "Ajay", 21];

// newUser1[0] = "New";  // Overriding can't be possible in New version
newUser1.push("Santa");  // can be possible
// newUser1.push(true);  // can't be possible