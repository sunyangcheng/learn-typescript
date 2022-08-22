const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

const args = [8, 5];
const angle = Math.atan2(...args); // 扩张参数必须具有元组类型或传递给rest参数

const arg = [5, 8] as const;
const result = Math.atan2(...arg);

export {};