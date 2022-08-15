"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.sideLength * shape.sideLength;
        default:
            // 不能将类型“Triangle”分配给类型“never”。
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
