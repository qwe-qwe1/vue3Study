function printPoint(point: { x: number; y: number; z?: number }) {
  console.log(point.x, point.y)
}

printPoint({ x: 32, y: 3 })
printPoint({ x: 234, y: 3, z: 2 })

export {}
