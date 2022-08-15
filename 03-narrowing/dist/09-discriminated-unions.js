"use strict";
// interface Shape {
//   kind: "circle" | "square";
//   radius?: number;
//   sideLength?: number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
function handleShape(shape) {
    // if (shape.kind === 'rect'){
    // 此条件将始终返回 "false"，因为类型 ""circle" | "square"" 和 ""rect"" 没有重叠。
    // }
}
// function getArea(shape: Shape) {
//   // Object is possibly 'undefined'.
//   return Math.PI * Math.pow(shape.radius, 2);
// }
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.sideLength * shape.sideLength;
    }
}
