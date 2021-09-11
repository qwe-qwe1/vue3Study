type WhyType = number | string
type Direction = 'left' | 'right' | 'center'

type WType = number & string

interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly

const obj1: MyType1 = {
  swimming() {},
}
const obj2: MyType2 = {
  swimming() {},
  flying() {},
}

export {}
