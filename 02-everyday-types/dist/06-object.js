"use strict";
function printCoord(pt) {
    console.log(`x: ${pt.x}, y: ${pt.y}`);
}
printCoord({
    x: 1,
    y: 2
});
function printName(obj) {
    var _a;
    // console.log(obj.lastName.toUpperCase()); // 对象可能为“未定义”。
    if (obj.lastName) {
        console.log(obj.lastName.toUpperCase());
    }
    console.log((_a = obj.lastName) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ firstName: "John" });
printName({
    firstName: "John",
    lastName: "Doe"
});
// printName({
//   firstName: "John",
//   lastName: 100 // error
// });
// printName({
//   firstName: "John",
//   lastName: "Doe",
//   age: 30 // error
// })
