"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = undefined;
let y = null;
// let z:string = undefined; // 不能将类型“undefined”分配给类型“string”。
function doSomething(x) {
    if (x === null) {
        // doSomething
    }
    else {
        console.log(x.toUpperCase());
    }
}
function liveDangerously(x) {
    // no error
    console.log(x.toFixed(2));
}
