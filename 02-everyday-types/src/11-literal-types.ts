let str = "Hello World";
str = "Typescript";

const str2 = "Hello World";
// str2 = "ts"; // 无法重新声明块范围变量“str2”。

type myString = 'Hello World';

// let x: myString = 'xxxxx';  // 无法将类型“"xxxxx"”分配给类型“myString”。

function printText(s: string, position: 'Left' | 'Right'): void {
  console.log(s);
}

printText('Hello World', 'Left');
// printText('Hello World', 'Center'); // 无法将类型“"Center"”分配给类型“"Left" | "Right"”。

function compare(a: number, b: number): -1 | 0 | 1 {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}   

interface Options {
  width: number;
}

function configure(x: Options | "auto") {}

configure({ width: 100 });
configure("auto");
// configure({ width: 100, height: 200 }); // 无法将类型“{ width: number; height: number; }”分配给类型“Options | "auto"”。  

let a1: true = true;
let a2: false = false;

const obj = {
  count: 0
}

obj.count = 1;

function handleRequest(url: string, methods: 'GET' | 'POST' | 'PUT') {}

const req = {
  url: "http://example.com",
  method: "GET"
}

// handleRequest(req.url, req.method); // 无法将类型“{ url: string; method: "GET" | "POST" | "PUT"; }”分配给类型“string”。
const req1 = {
  url: "http://example.com",
  method: "GET" as "GET"
}
handleRequest(req1.url, req1.method);

const req2 = {
  url: "http://example.com",
  method: "GET"
} as const

handleRequest(req2.url, req2.method);

export {};