function kgToLbs(weight: number | string): number {
    // Narrowing
    if(typeof weight === "number") {
        return weight * 2.2;
    } 
    else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(12);
kgToLbs("12kg");