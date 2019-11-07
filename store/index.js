/* eslint-disable no-console */
import siteDB from '@/db/site.yml'
import { coffee } from '@/db/products.yml'

export const state = () => ({
  nav: siteDB.nav,
  coffeeProducts: coffee
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
