let findSum = (num: number) => {
    return "Hello"; // wrong logic but could't giving error
}

let findSum2 = (num: number): number => {
    // return "Hello"; // giving error

    return num + num;
}

const getMessage = (s: string): string => {
    return "";
}

// Different case ==> when different value required
// function getValue(num: number): boolean {
//     if(num > 5) {
//         return true;
//     }

//     return "200 OK";
// }

let heros = ["caption america", "thor", "spiderman", "ironman"]

heros.map((hero): string => {
    return `My hero : ${hero}`;
})

// void return type
function printMsg(msg: string): void {
    console.log(msg);
    
    // return 1; // ==> In void return, you can't return any other type
    return;
}

function printMsg2(msg: string) {
    console.log(msg);
    
    // return 1; // ==> by default function return type of function is void
    return;
}

// never retun type
function handelMsg(errmsg: string): never {
    throw new Error(errmsg)
    
    // return; // ==> it can't return anything
}