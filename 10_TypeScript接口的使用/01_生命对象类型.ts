// type InfoType = { name: string; age: number }

interface InfoType {
  name: string
  age: number
  friend?: {
    name: string
  }
}

const info: InfoType = {
  name: 'why',
  age: 18,
  friend: {
    name: '123',
  },
}

console.log(info.friend?.name)
