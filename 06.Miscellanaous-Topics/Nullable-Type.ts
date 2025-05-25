function greet(msg: string | null | undefined) {
    if(msg) {
        console.log(msg.toUpperCase());
    }

    else {
        console.log("Hello");
    }
}

greet(null);
greet(undefined);
greet("Namaste");