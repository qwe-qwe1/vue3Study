// const el: HTMLElement = document.getElementById('why')

class Person {}

class Student extends Person {
  studying() {}
}

function sayHello(p: Person) {
  (p as Student).studying()
}

const stu = new Student()
sayHello(stu)

// 
const message = 'hello world'
const num: number = (message as any) as number
