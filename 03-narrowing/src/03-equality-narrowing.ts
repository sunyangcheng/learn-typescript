function example(x: string | number, y: string | boolean) {
  if (x === y) {
    console.log(x.toUpperCase());
    console.log(y.toUpperCase());
  } else {
    console.log(x);
    console.log(y);
  }
}

function printAll(str: string | string[] | null) {
  if (str !== null) {
    if (typeof str === 'object') {
      for (const s of str) {
        console.log(s);
      }
    } else if (typeof str === 'string') {
      console.log(str);
    } else {
      console.log('nothing');
    }
  } 
}

interface Container {
  value: number | null | undefined
}

function multiplyAll(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value);
    container.value *= factor; 
  }
}
 
multiplyAll({ value: 2 }, 3); // 2
multiplyAll({ value: null }, 3); // no log
multiplyAll({ value: undefined }, 3); // no log
// multiplyAll({ value: '2' }, 0); // 不能将类型“"string"”分配给类型“number”。

export {};