interface ILength {
  length: number
}

function getLength<T extends String>(arg: T) {
  return arg.length
}

getLength('213')
