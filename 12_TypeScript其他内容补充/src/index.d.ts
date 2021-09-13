// 声明模块
declare module 'lodash' {
  export function join(arr: any[]): void
}

// 声明变量/函数/类
declare let whyName: string
declare let whyAge: number
declare let whyHeight: number

declare function whyFoo(): void

declare class Person {
  name: string
  age: number
  constructor(name: string, age: number)
}

// 声明文件
declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.gif'

declare namespace $ {
  export function ajax(settings: any): any
}
