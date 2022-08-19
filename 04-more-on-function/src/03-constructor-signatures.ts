class Ctor {
  s: string;
  constructor(s: string) {
    this.s = s;
  }
}

type someConstructor = {
  new (s: string): Ctor;
};

function createCtor(ctor: someConstructor) {
  return new ctor('hello');
}

const fn = createCtor(Ctor);
console.log(fn.s); // hello

interface CallOrConstructor {
  new (s: string): Date
  (n?: number): Date;
}

function createCallOrConstructor(date: CallOrConstructor): Date {
  let d = new date('2022-08-19');
  let n = date(2022);
  return Math.random() < 0.5 ? d : n;
}

export {};
