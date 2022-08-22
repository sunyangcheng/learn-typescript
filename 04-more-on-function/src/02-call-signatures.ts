type DescribableFunction = {
  description: string;
  (n: number): boolean;
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + "return" + fn(1));
}

function myFn(n: number): boolean {
  console.log(n);
  return n > 0;
}
myFn.description = "myFn";
doSomething(myFn); // myFn return true

export {};