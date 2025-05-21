let value: number = 33.5;
let value2 = 14;

let name1: string = "Chandan Chaudhary";
let name2 = "ChanduBhaiii";

let isPublished: boolean = true;
let isPublished2 = false;

console.log(value);
console.log(name1);
console.log(isPublished);

// the 'any' type
let a;
a = 51;
a = "Chandan";

let data;

function getData() {
    return "Information";
}

data = getData(); // ==> it is still any (that's why avoid the use of 'any')