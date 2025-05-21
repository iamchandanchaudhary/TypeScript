function getSum(num) {
    return num + 2;
}
// Note:- If you does not declare variable with any datatype the variable will become 'any' datatype, 
// & you know 'any' datatype have multiple drawbacks.
getSum(10);
function getUpper(value) {
    return value.toUpperCase();
}
getUpper("chandan");
function signUpUser(name, email, isPaid) { }
signUpUser("Chandan", "chandan@gmail.com", true);
// arrow function
var loginUser = function (name, email, isPaid) { };
loginUser("c", "c@.com", false);
// giving default value (default parameter)
var getSolution = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 21; }
    return num1 + num2 + num3;
};
getSolution(18, 55);
