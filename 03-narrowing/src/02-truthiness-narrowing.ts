function printAll(str: string | string[] | null) {
  if (str && typeof str === 'object') {
    for (const s of str) {
      console.log(s);
    }
  } else if (typeof str === 'string') {
    console.log(str);
  } else {
    console.log('nothing');
  }
}

function getUserOnlineMessage(numUserOnline: number) {
  if (numUserOnline) {
    return `${numUserOnline} user(s) online`;
  }
  return 'no user online';
}

console.log(getUserOnlineMessage(3)); // 3 user(s) online
console.log(getUserOnlineMessage(0)); // no user online

function multiplyAll(values: number[] | undefined, factor: number) {
  if (values) {
    return values.map(v => v * factor);
  }
  return [];
}

console.log(multiplyAll([1, 2, 3], 2)); // [2, 4, 6]
console.log(multiplyAll(undefined, 2)); // []

export {};