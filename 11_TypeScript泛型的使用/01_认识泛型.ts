function sum<T>(num: T): T {
  // return num1 + num2
  return num
}

sum<number>(50)
sum<{ name: string }>({ name: 'why' })
sum<any[]>([1, 2, 3])

sum(50)
sum('abc')
