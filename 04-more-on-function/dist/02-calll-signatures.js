"use strict";
function doSomething(fn) {
    console.log(fn.description + " return " + fn(1));
}
function myFn(n) {
    console.log(n);
    return n > 0;
}
myFn.description = "myFn";
doSomething(myFn); // myFn return true
