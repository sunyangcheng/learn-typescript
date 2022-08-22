// 参数不正确
function fn(x: string): void;
function fn(x: string) {
  console.log(x);
}

fn(); // 应有1个参数，但获得0个
fn('ts'); // ts

// 参数类型不正确
function fn1(x: string): void;
function fn1(x: number): void;
function fn1(x: number) {}
// 正解
// function fn1(str: number | string) {
//   console.log(str);
// }

// 返回类型不正确
function fn2(x: string): string;
function fn2(x: number): number;
function fn2(x: string | number) {
  return "error";
}

// 正解
// function fn2(x: string | number): string | number {
//   return 1;
// }

export {};