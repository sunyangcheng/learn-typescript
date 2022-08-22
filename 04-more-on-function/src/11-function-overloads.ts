function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(mOrTimestamp, d, y);
  } else {
    return new Date(mOrTimestamp);
  } 
}

const d1 = makeDate(1564897200000); // 2020-08-19
const d2 = makeDate(2020, 8, 19); // 2020-08-19
const d3 = makeDate(2020, 7); // 没有需要2参数的重载，但存在需要1或3参数的重载。

export {};