type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};
const f2: voidFunc = () => true;
const f3: voidFunc = function () {
  return true;
}

const v1 = f1(); // void
const v2 = f2(); // void
const v3 = f3(); // void

function f4(): void {
  return true; // 不能将类型“boolean”分配给类型void
};

const f5 = function(): void {
  return true; // 不能将类型“boolean”分配给类型void
}

export {};