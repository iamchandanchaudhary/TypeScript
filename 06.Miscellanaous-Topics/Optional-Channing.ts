type Customer = {
    birthday: Date,
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0);

// Normal way
if(customer !== null && customer !== undefined)
    console.log(customer.birthday);

// ==> Same thing with Optional property access operator
    console.log(customer?.birthday);

let customer1 = getCustomer(1);
console.log(customer1?.birthday);

// ==> type 2
type CustomerNew = {
    birthday?: Date,
}

function getCustomerNew(id: number): CustomerNew | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customerNew = getCustomerNew(1);
console.log(customerNew?.birthday?.getFullYear());

// ==> Using with Array
let arr: number[] = [];

if(arr[0] !== null && arr[0] !== undefined)
    console.log(arr[0]); // Normal way

// Same thing with Optional Way
console.log(arr?.[0]);

// ==> Using with function
let log: any = null;
// log("a"); // Error

log?.("a")  // Making it optional