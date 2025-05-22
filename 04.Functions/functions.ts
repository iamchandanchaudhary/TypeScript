function getSum(num: number) {
    return num + 2;
}

// Note:- If you does not declare variable with any datatype the variable will become 'any' datatype, 
// & you know 'any' datatype have multiple drawbacks.

getSum(10);

function getUpper(value: string) {
    return value.toUpperCase();
}

getUpper("chandan");

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("Chandan", "chandan@gmail.com", true);

// arrow function
let loginUser = (name: string, email: string, isPaid: boolean) => {}
loginUser("c", "c@.com", false);

// giving default value (default parameter)
let getSolution = (num1: number, num2:number, num3:number = 21) => { return num1 + num2 + num3}
getSolution(18, 55);