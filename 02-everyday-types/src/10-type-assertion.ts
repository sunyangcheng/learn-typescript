const myCanvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById('myCanvas');

// const str = "Hello World" as number; // 无法重新声明块范围变量“str”。
const str2 = ("Hello World" as unknown) as number;

export {};