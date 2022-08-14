function printCoord(pt: {x: number, y: number}) {
  console.log(`x: ${pt.x}, y: ${pt.y}`);
}

printCoord({
  x: 1,
  y: 2
})

function printName(obj: {firstName: string, lastName?: string}) {
  // console.log(obj.lastName.toUpperCase()); // 对象可能为“未定义”。
  if (obj.lastName) {
    console.log(obj.lastName.toUpperCase());
  }
  console.log(obj.lastName?.toUpperCase());
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