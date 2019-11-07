<template>
  <div class="home">
    <v-row align="center" class="top-banner">
      <v-col cols="12" md="4">
        <span>PREMIUM COFFEE</span>
        <h2>
          A cup of coffee is one of the most important, simple pleasures in life
        </h2>
      </v-col>
      <v-col class="hidden-sm-and-down" cols="8">
        <img src="@/assets/images/banner.png" alt="Coffee Beans And Cup" />
      </v-col>
    </v-row>

    <MarketingBlock class="flex-row-reverse" />

    <v-container>
      <v-row>
        <v-col>
          <h1>Our Best Deal Section</h1>
          <v-row align="center">
            <v-col
              v-for="(coffee, index) in coffeeProducts"
              :key="index"
              cols="12"
              sm="4"
            >
              <CoffeeProduct :coffee="coffee" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <MarketingBlock />
  </div>
</template>

<script>
import CoffeeProduct from '@/components/CoffeeProduct'
import MarketingBlock from '@/components/MarketingBlock'

export default {
  components: {
    MarketingBlock,
    CoffeeProduct
  },

  computed: {
    coffeeProducts() {
      return this.$store.state.coffeeProducts
    }
  }
}
</script>
