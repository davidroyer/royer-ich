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
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <VSiteFooter />
  </v-app>
</template>

<script>
export default {
  components: {
    VSiteFooter: () => import('@/components/VSiteFooter')
  },
  data() {
    return {
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

.v-footer {
  .footer-text {
    color: #5c5d5f;
  }
}
</style>
