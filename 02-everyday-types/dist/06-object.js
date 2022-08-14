"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printCoord(pt) {
    console.log(`x: ${pt.x}, y: ${pt.y}`);
}
printCoord({
    x: 1,
    y: 2
});
function printName(obj) {
    // console.log(obj.lastName.toUpperCase()); // 对象可能为“未定义”。
    if (obj.lastName) {
        console.log(obj.lastName.toUpperCase());
    }
    console.log(obj.lastName?.toUpperCase());
}
printName({ firstName: "John" });
printName({
    firstName: "John",
    lastName: "Doe"
});
