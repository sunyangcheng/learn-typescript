const oneHundred: bigint = BigInt(100);
const twoHundred: bigint = 200n;

const firstName = Symbol("name");
const secondName = Symbol("name");

// 此条件将始终返回 "false"，因为类型 "typeof firstName" 和 "typeof secondName" 没有重叠。
// if (firstName === secondName) {
//   console.log("same");
// }

export {};