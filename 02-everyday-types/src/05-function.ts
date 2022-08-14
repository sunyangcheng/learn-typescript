function greet(name: string) {
  console.log("hello" + name.toUpperCase(), "!");
}

greet("world");

// 自动推断
function getNumber() {
  return 100;
}

const arr = ["Anna", "Bob", "Charlie"];
arr.forEach((name) => {
  greet(name.toUpperCase());
});
export {};