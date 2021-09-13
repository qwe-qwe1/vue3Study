interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

class Animal {}

class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log('Fish Swimming')
  }
  eating() {
    console.log('Fish Eating')
  }
}

function swimAction(swimable: ISwim) {
  swimable.swimming()
}

swimAction(new Fish())

swimAction({ swimming: function() {} })
