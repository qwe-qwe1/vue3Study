export namespace time {
  export function format(time: string) {
    return '2222-02-22'
  }
}

export namespace price {
  export function format(price: number) {
    return '99.99'
  }
}

time.format('a')
price.format(12)
