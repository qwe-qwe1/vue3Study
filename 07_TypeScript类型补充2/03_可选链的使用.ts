type Person = {
  name: string
  friend: {
    name: string
    age?: number
  }
}

const info: Person = {
  name: 'why',
  friend: {
    name: 'kobe',
  },
}

console.log(info.name)
console.log(info.friend?.name)

export {}
