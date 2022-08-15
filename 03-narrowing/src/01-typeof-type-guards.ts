function printAll(str: string | string[] | null) {
  if (typeof str === 'object') {
    // 对象可能为“null”
    // for (const s of str) {
    //   console.log(s);
    // }
  } else if (typeof str === 'string') {
    console.log(str);
  } else {
    console.log('nothing');
  }
}

export {}; 