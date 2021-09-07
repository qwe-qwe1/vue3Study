import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0,
      name: 'why',
      age: 18,
      height: 1.88,
      books: [
        { name: '深入Vue.js', price: 200, count: 3 },
        { name: '深入Webpack.js', price: 240, count: 5 },
        { name: '深入React.js', price: 120, count: 1 },
        { name: '深入Node.js', price: 100, count: 4 }
      ],
      discount: 0.6
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementN(state, payload) {
      state.counter += payload
    }
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0
      for (const book of state.books) {
        totalPrice += book.count * book.price
      }
      return totalPrice * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9
    },
    totalPriceCountGreaterN(state, getters) {
      return function(n) {
        let totalPrice = 0
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice += book.count * book.price
          }
        }
        return totalPrice * getters.currentDiscount
      }
    },
    nameInfo(state) {
      return `name:${state.name}`
    },
    ageInfo(state) {
      return `age:${state.age}`
    },
    heightInfo(state) {
      return `height:${state.height}`
    }
  },
  actions: {
    incrementAction(context, payload) {
      console.log(payload)
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    }
  }
})

export default store
