<template>
  <div class="home">
    <v-row align="center" class="top-banner">
      <v-col cols="12" md="4" offset-md="1">
        <MarketingBlock
          data-aos="fade-up"
          data-aos-delay="500"
          preheading="Test Premium Coffee"
          heading="A cup of coffee is one of the most important, simple pleasures in life."
          heading-tag="h1"
        />
      </v-col>
      <v-col
        class="hidden-sm-and-down top-banner-image"
        cols="8"
        data-aos="fade-left"
        data-aos-easing="ease"
      >
        <!-- <img src="@/assets/images/banner.png" alt="Coffee Beans And Cup" /> -->
      </v-col>
    </v-row>

    <MarketingSection
      data-aos="fade-right"
      data-aos-delay="500"
      class="flex-row-reverse"
      preheading="Premium Coffee"
      heading="Quality Coffee Cultivated by Good"
      subheading=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex maiores iste ut odio voluptas eos necessitatibus suscipit."
      image="coffee-growing.png"
    />

    <v-row class="my-12 py-12">
      <v-col data-aos="fade-left" data-aos-delay="500">
        <MarketingBlock
          class="text-center"
          preheading="Buy Now"
          heading="Our Best Deal"
          subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque officiis excepturi doloremque corrupti suscipit."
          hide-btn
        />

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

    <MarketingSection
      data-aos="fade-up"
      data-aos-delay="500"
      image="beans.png"
      class="white-bg"
      heading="The secret Lies Within The Bean"
      subheading=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          laboriosam rem hic nam esse dolorem, nemo vero commodi maiores facere."
    />
  </div>
</template>

<script>
import CoffeeProduct from '@/components/CoffeeProduct'
import MarketingSection from '@/components/MarketingSection'

export default {
  components: {
    MarketingSection,
    CoffeeProduct
  },

  computed: {
    coffeeProducts() {
      return this.$store.state.coffeeProducts
    }
  }
}
</script>

<style lang="scss">
.white-bg {
  background-color: #fff !important;
}

@media (min-width: 960px) {
  .top-banner {
    background-image: url('~assets/images/banner.png');
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 65%;
  }
}
</style>
