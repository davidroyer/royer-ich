<template>
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
</template>

<script>
export default {
  props: {
    navItems: {
      type: Array,
      required: true
    }
  }
}
</script>
