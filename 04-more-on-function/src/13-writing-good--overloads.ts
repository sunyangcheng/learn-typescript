// function len(s: string): number;
// function len(arr: any[]): number;
// function len(x: any) {
//   return x.length;
// }

len("hello"); // hello
len([1, 2, 3]); // 3
len(Math.random() < 0.5 ? "hello" : [1, 2, 3]); // 没有与此调用匹配的重载

// 正解
function len(x: string | any[]): number {
  return x.length;
}
len(Math.random() < 0.5 ? "hello" : [1, 2, 3]);