var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(0);
// Normal way
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);
// ==> Same thing with Optional property access operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
var customer1 = getCustomer(1);
console.log(customer1 === null || customer1 === void 0 ? void 0 : customer1.birthday);
function getCustomerNew(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customerNew = getCustomerNew(1);
console.log((_a = customerNew === null || customerNew === void 0 ? void 0 : customerNew.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// ==> Using with Array
var arr = [];
if (arr[0] !== null && arr[0] !== undefined)
    console.log(arr[0]); // Normal way
// Same thing with Optional Way
console.log(arr === null || arr === void 0 ? void 0 : arr[0]);
// ==> Using with function
var log = null;
// log("a"); // Error
log === null || log === void 0 ? void 0 : log("a"); // Making it optional
