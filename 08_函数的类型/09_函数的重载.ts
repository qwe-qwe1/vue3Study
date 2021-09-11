type AddType = number | string
function add(num1: number, num2: number): number
function add(num1: string, num2: string): string

function add(num1: any, num2: any) {
  return num1 + num2
}

const result = add(20, 30)
const result2 = add('abc', 'cbd')
console.log(result)
console.log(result2)

export {}
