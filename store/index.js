/* eslint-disable no-console */
import siteDB from '@/db/site.yml'
import { coffee } from '@/db/products.yml'

export const state = () => ({
  nav: siteDB.nav,
  coffeeProducts: coffee,
  drawer: false
})

export const mutations = {
  increment(state) {
    state.counter++
  },

  setDrawer(state, payload) {
    state.drawer = payload
  },

  toggleDrawer(state, payload) {
    state.drawer = !state.drawer
  }
}
