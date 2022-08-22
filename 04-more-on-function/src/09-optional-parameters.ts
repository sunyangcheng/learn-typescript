function f(n: number = 100) {
  console.log(n.toFixed());
  console.log(n.toFixed(2));
}

f(124.85);
f();

export {};