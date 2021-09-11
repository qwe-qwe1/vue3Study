class Animal {
  action() {
    console.log('animal running')
  }
}

class Dog extends Animal {
  action() {
    console.log('dog running')
  }
}

class Fish extends Animal {
  action() {
    console.log('finsh swimming')
  }
}

function makeActions(animals: Animal[]) {
  animals.forEach((animal) => {
    animal.action()
  })
}

makeActions([new Dog(), new Fish()])
