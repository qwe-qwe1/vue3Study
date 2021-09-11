class Person {
  name: string = '123'
  eating() {
    console.log('eating')
  }
}

const p = new Person()
const p1: Person = {
  name: 'why',
  eating() {},
}

function printPerson(p: Person) {
  console.log(p.name)
}

printPerson(new Person())
printPerson({ name: '123', eating: function () {} })

export {}
