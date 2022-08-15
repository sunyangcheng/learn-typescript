"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function example(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
        console.log(y.toUpperCase());
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function printAll(str) {
    if (str !== null) {
        if (typeof str === 'object') {
            for (const s of str) {
                console.log(s);
            }
        }
        else if (typeof str === 'string') {
            console.log(str);
        }
        else {
            console.log('nothing');
        }
    }
}
function multiplyAll(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
multiplyAll({ value: 2 }, 3); // 2
multiplyAll({ value: null }, 3); // no log
multiplyAll({ value: undefined }, 3); // no log
