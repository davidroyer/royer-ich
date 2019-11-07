<template>
  <v-toolbar-items class="hidden-sm-and-down">
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

<style lang="scss" scoped></style>
