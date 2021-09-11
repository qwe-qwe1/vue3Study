function foo() {}

type FooFnType = () => void
function bar(fn: FooFnType) {
  fn()
}

bar(foo)

// 2.定义常量时，编写函数的类型
type AddFnType = (num1: number, num2: number) => void
const add: AddFnType = (a1: number, a2: number) => {
  return a1 + a2
}

export {}
