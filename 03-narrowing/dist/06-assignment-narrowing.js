"use strict";
let x = Math.random() < 0.5 ? 10 : "Hello world"; // let x: number | string
x = 1; // x is now a number
console.log(x); // 1
x = "typescript"; // x is now a string
console.log(x); // typescript
// x = true; // error: type 'true' is not assignable to type 'number | string'
