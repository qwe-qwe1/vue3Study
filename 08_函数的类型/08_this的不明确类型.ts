type ThisType = { name: string }
function eating(this: ThisType, message?: string) {
  console.log(this.name + ' is eating', message)
}

const info = {
  name: 'why',
  eating: eating,
}

// 隐式绑定
info.eating()

// 显式绑定
eating.call({ name: 'kobe' }, '呵呵呵')
eating.apply({ name: 'james' }, ['哈哈哈'])

export {}
