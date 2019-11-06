/* eslint-disable no-console */
import siteDB from '@/db'
console.log('TCL: siteDB', siteDB)
// const
export const state = () => ({
  nav: siteDB.nav,
  coffees: siteDB.products.coffees,
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
