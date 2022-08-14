function printID(id: number | string) {
  console.log(id);
  // 类型“number”上不存在属性“toUpperCase”。
  // console.log(id.toUpperCase());
  
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2)); 
    
  }

}

printID(100);
printID("100");
// printID({
//   name: 1 // 类型“{ name: number; }”的参数不能赋给类型“string | number”的参数。
// })

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, ", x.join(", and"));
  } else {
    console.log("Hello, ", x);
  }
}

welcomePeople("John");
welcomePeople(["John", "Doe"]);

function getFirstStr(x: number[] | string) {
  return x.slice(0, 3);
}

getFirstStr([1, 2, 3, 4, 5]);
getFirstStr("Hello");

export {};