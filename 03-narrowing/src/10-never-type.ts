interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * Math.pow(shape.radius, 2);
    case "square":
      return shape.sideLength * shape.sideLength;
    default:
      // 不能将类型“Triangle”分配给类型“never”。
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

export {};