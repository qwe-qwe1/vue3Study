class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log('eating')
  }
}

class Student extends Person {
  sno: number
  constructor(name: string, age: number, sno: number) {
    // super调用父类构造器
    super(name, age)
    this.sno = sno
  }
  eating() {
    super.eating()
    console.log(this.name + ' eating')
  }
  studying() {
    console.log('studying')
  }
}

class Teacher extends Person {
  title: string = ''
  teaching() {
    console.log('teaching')
  }
}

const stu = new Student('why', 18, 1112)
console.log(stu.name, stu.age, stu.sno)
stu.eating()
