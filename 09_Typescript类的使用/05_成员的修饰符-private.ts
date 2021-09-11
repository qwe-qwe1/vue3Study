class Person {
  private name: string = ''

  getName() {
    return this.name
  }

  setName(newName) {
    this.name = newName
  }
}

const p = new Person()
p.setName('why')
console.log(p.getName())

export {}
