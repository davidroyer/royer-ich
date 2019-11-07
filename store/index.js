/* eslint-disable no-console */
import siteDB from '@/db/index.json'

import { coffee } from '@/db/products.yml'
console.log('YAML: data', coffee)
console.log('TCL: siteDB', siteDB)
// const
export const state = () => ({
  nav: siteDB.nav,
  coffeeProducts: coffee,
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
