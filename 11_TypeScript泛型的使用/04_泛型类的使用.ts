class Point<T> {
  x: T
  y: T
  z: T

  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}

const p1 = new Point('1.22.3', '2.22.3', '4.33.1')
const p2 = new Point<string>('1.22.3', '2.22.3', '4.33.1')
const p3: Point<string> = new Point('1.22.3', '2.22.3', '4.33.1')

const names1: string[] = ['abc', 'cba', 'nba']
const names2: Array<string> = ['abc', 'cba', 'nba']

export {}
