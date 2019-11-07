import AOS from 'aos'
// import Vue from 'vue'
import 'aos/dist/aos.css'

export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    duration: 800
  }) // eslint-disable-line new-cap
}

// Vue.mixin({
//   watch: {
//     '$route.path'() {
//       setTimeout(() => {
//         AOS.refresh()
//       }, 500)
//     }
//   }
// })
