"use strict";
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
logValue(new Date()); // 'Mon, 15 Aug 2022 03:28:52 GMT'
logValue('hello'); // 'HELLO'
