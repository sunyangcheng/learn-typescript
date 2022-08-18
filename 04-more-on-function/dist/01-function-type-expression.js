"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(fn) {
    return fn('TypeScript');
}
function printToConsole(message) {
    console.log(message);
}
greeter(printToConsole); // TypeScript
