<template>
  <v-app>
    <!-- <VSiteHeader /> -->
    <v-app-bar flat app color="#f1eee2">
      <v-toolbar-title @click="$router.push('/')" v-text="title" />
      <v-spacer />
      <VDesktopNav :nav-items="navItems" />
      <v-app-bar-nav-icon
        aria-label="Toggle menu"
        class="hidden-md-and-up"
        @click.stop="drawerState = !drawerState"
      />
    </v-app-bar>

    <VContent />
    <!-- <VMobileNav :nav-items="navItems"/> -->
    <v-navigation-drawer v-model="drawerState" right app>
      <v-list>
        <v-list-item
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.path"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <VSiteFooter />
  </v-app>
</template>

<script>
import VDesktopNav from '@/components/VDesktopNav'
import VContent from '@/components/VContent'

export default {
  components: {
    VDesktopNav,
    VContent,
    VSiteFooter: () => import('@/components/VSiteFooter')
  },
  data() {
    return {
      title: 'NOANSA',
      drawerState: false
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

img {
  max-width: 100%;
}
</style>
