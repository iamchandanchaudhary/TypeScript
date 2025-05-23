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

// Different case --> when different value required
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