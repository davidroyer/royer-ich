<template>
  <v-layout column justify-center align-center>
    <div class="top-banner">
      <h1>Top Banner</h1>
    </div>
    <v-flex xs12 sm8 md6>
      <div>
        <h1>White Tabs Section</h1>
        <pre>{{ coffees }}</pre>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { products } from '@/db'

export default {
  data() {
    return {
      coffees: products.coffees
    }
  }
}
</script>
