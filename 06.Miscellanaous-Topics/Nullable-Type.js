"use strict";
function greet(msg) {
    if (msg) {
        console.log(msg);
    }
    else {
        console.log("Hello");
    }
}
greet(null);
greet(undefined);
greet("Namaste");
