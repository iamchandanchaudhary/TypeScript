let findSum = (num: number) => {
    return "Hello"; // wrong logic but could't giving error
}

let findSum2 = (num: number): number => {
    // return "Hello"; // giving error

    return num + num;
}

// Different case --> when different value required
function getValue(num: number){
    if(num > 5) {
        return true;
    }

    return "200 OK";
}