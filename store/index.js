import siteData from '@/db/site.yml'
import { coffee } from '@/db/products.yml'

export const state = () => ({
  nav: siteData.nav,
  coffeeProducts: coffee,
  drawer: false
})

export const mutations = {
  setDrawer(state, payload) {
    state.drawer = payload
  },

  toggleDrawer(state, payload) {
    state.drawer = !state.drawer
  }
}
