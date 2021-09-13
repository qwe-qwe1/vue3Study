import { time, price } from './utils/format'
import axios from 'axios'
import lodash from 'lodash'
import pic from './img/default_room.jpg'

axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
  console.log(res)
})

console.log(lodash.join(['cbs', 'dsf']))
console.log(whyName)
console.log(whyAge)
console.log(whyHeight)
whyFoo()
const p = new Person('why', 19)
console.log(p)
