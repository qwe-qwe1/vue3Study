function printID(id: number | string | boolean) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

printID(123)
printID('abc')
printID(true)
