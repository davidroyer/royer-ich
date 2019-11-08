<template>
  <v-app-bar flat app color="#f1eee2">
    <v-toolbar-title @click="$router.push('/')" v-text="title" />
    <v-spacer />

    <v-desktop-nav />
    <v-app-bar-nav-icon
      aria-label="Toggle menu"
      class="hidden-md-and-up"
      @click="$store.commit('toggleDrawer')"
    />
  </v-app-bar>
</template>

<script>
import VDesktopNav from '@/components/VDesktopNav'

export default {
  components: {
    VDesktopNav
  },

  data: () => ({
    title: 'NOANSA'
  })
}
</script>

<style lang="scss" scoped></style>
