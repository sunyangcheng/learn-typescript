interface Point {
  x: number
  y: number
}

function printCoord(pt: Point) {}

printCoord({
  x: 1,
  y: 2
})

// 接口扩展
interface Animal {
  name: string
}

interface Fish extends Animal {
  swim: boolean
}

const fish: Fish = {
  name: "fish",
  swim: true
}

// 类型扩展
type Vehicle = {
  name: string
}

type Car = Vehicle & {
  wheels: number
}

const car: Car = {
  name: "BMW",
  wheels: 4
}

// 向接口中添加字段
interface Phone {
  name: string
}

interface Phone {
  price: number
}

const phone: Phone = { 
  name: "Apple",
  price: 1000
}

// 类型创建后不可更改
type Computer = {
  name: string
}

// // 标识符“Computer”重复。
// type Computer = {
//   price: number
// }