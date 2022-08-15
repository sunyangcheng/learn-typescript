"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function example() {
    let x;
    x = Math.random() < 0.5; // x is now a boolean
    console.log(x); // true
    if (Math.random() < 0.5) {
        x = 'hello'; // x is now a string
    }
    else {
        x = 100; // x is now a number
    }
}
x = "typescript"; // x is now a string
x = 1; // x is now a number
