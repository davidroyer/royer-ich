<template>
  <div class="home">
    <v-row align="center" class="top-banner py-12">
      <v-col cols="12" md="5">
        <v-fade-transition>
          <MarketingBlock
            preheading="Premium Coffee"
            heading="A cup of coffee is one of the most important, simple pleasures in life."
            heading-tag="h1"
          />
        </v-fade-transition>
        <!-- <MarketingBlock
          data-aos="fade-up"
          data-aos-delay="0"
          preheading="Premium Coffee"
          heading="A cup of coffee is one of the most important, simple pleasures in life."
          heading-tag="h1"
        /> -->
      </v-col>
      <v-col
        class="top-banner-image"
        cols="12"
        md="7"
        data-aos="fade-left"
        data-aos-easing="ease"
      >
        <img src="@/assets/images/banner.png" alt="Coffee Beans And Cup" />
      </v-col>
    </v-row>

    <MarketingSection
      data-aos="fade-right"
      data-aos-delay="500"
      class="flex-row-reverse"
      preheading="Premium Coffee"
      heading="Quality Coffee Cultivated by Good"
      subheading=" Our love for specialty coffee is never-ending. With over 365 days a year at origin working with the best growers on the planet, only the best beans make the grade."
      image="coffee-growing.png"
    />

    <v-row class="my-12 py-12 beige-bg">
      <v-col data-aos="fade-left" data-aos-delay="500">
        <MarketingBlock
          class="text-center"
          preheading="Buy Now"
          heading="Our Best Deal"
          subheading="Coffee company with a straightforward mission: to make an office and on-the-go cup of coffee that we’d like to drink ourselves"
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
      heading="The secret Lies Within The Bean"
      subheading="You can’t imagine a day without a cup of coffee and we believe that your office and on-the-go coffee should never be a compromise."
    />

    <ImageGrid data-aos="fade-left" data-aos-delay="300" />
  </div>
</template>

<script>
import CoffeeProduct from '@/components/CoffeeProduct'
import MarketingSection from '@/components/MarketingSection'
import ImageGrid from '@/components/ImageGrid'

export default {
  components: {
    CoffeeProduct,
    ImageGrid,
    MarketingSection
  },

  computed: {
    coffeeProducts() {
      return this.$store.state.coffeeProducts
    }
  }
}
</script>

<style lang="scss">
.beige-bg {
  background-color: #f1eee2;
}

.top-banner {
  background-color: #f1eee2;
  width: 100vw;
  margin-top: -12px;
  height: 90vh;
}
</style>
