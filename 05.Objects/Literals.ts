// ==> Literals (exact or specific)
let num: number = 71;

// You can't pass another value
let quantity1: 50 = 50;
// let quantity1: 50 = 51; // Error

let quantity2: 50 | 100 = 100; // Only these 2 value avilable

type Quantity = 50 | 100; // Using Aliase

let quantity3: Quantity = 50;

let quantity4: 50 = 50;

// You can also use string
type Matric = "cm" | "inch";

let metric1: Matric = "cm";
let metric2: Matric = "inch";