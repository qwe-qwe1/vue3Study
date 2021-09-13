enum Direction {
  LEFT,
  RIGHT = 100,
  TOP,
  BOTTOM,
}

function turnDirection(direction: Direction) {
  console.log(direction)
  switch (direction) {
    case Direction.LEFT:
      console.log('left')
      break
    case Direction.RIGHT:
      console.log('right')
      break
    case Direction.TOP:
      console.log('top')
      break
    case Direction.BOTTOM:
      console.log('bottom')
      break
    default:
      const foo: never = direction
      break
  }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
