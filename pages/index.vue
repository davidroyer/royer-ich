<template>
  <div class="home">
    <v-row class="top-banner">
      <v-col>
        <h1>Top Banner</h1>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col>
          <h1>White Tabs Section</h1>
          <v-row>
            <v-col v-for="(coffee, index) in coffeeProducts" :key="index">
              <img
                :src="require(`@/assets/images/coffee-${coffee.image}.png`)"
                alt=""
              />
              <h3 v-text="coffee.name"></h3>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // coffeeProducts: [
      //   { image: 'bronze' },
      //   { image: 'black' },
      //   { image: 'white' }
      // ]
    }
  },

  computed: {
    coffeeProducts() {
      return this.$store.state.coffeeProducts
    }
  }
}
</script>
