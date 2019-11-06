<template>
  <v-app>
    <v-app-bar flat app color="#f1eee2">
      <v-toolbar-title v-text="title" />
      <v-spacer />

      <v-toolbar-items>
        <v-btn v-for="(item, index) in navItems" :key="index" text>
          {{ item.title }}
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer dark app color="#1a1b1e">
      <span>All Rights Reserved &copy; 2019</span>
      <v-spacer></v-spacer>
      <span>+436 701 32 43 92</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      right: true,
      rightDrawer: false,
      title: 'NOANSA'
    }
  },

  computed: {
    navItems() {
      return this.$store.state.nav
    }
  }
}
</script>

<style lang="scss">
.top-banner {
  background-color: #f1eee2;
  min-height: 500px;
  width: 100vw;
  margin-top: -12px;
}
</style>
