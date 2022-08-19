"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ctor {
    constructor(s) {
        this.s = s;
    }
}
function createCtor(ctor) {
    return new ctor('hello');
}
const fn = createCtor(Ctor);
console.log(fn.s); // hello
function createCallOrConstructor(date) {
    let d = new date('2022-08-19');
    let n = date(2022);
    return Math.random() < 0.5 ? d : n;
}
