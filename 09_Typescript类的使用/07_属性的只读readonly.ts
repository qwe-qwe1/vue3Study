class Person {
  readonly name: string
  age?: number
  readonly friend?: Person
  constructor(name: string, friend?: Person) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person('why', new Person('kobe'))
if (p.friend) {
  p.friend.age = 30
}
console.log(p.name, p.friend)
