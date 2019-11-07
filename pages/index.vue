<template>
  <div class="home">
    <v-row align="center" class="top-banner">
      <v-col cols="12" md="4">
        <!-- <transition name="bounce" appear> -->
        <MarketingBlock
          data-aos="fade-up"
          data-aos-delay="500"
          preheading="Test Premium Coffee"
          heading="A cup of coffee is one of the most important, simple pleasures in life."
          heading-tag="h1"
        />
        <!-- </transition> -->
      </v-col>
      <v-col class="hidden-sm-and-down" cols="8">
        <!-- <transition name="slide-fade" appear> -->
        <img
          data-aos="fade-left"
          src="@/assets/images/banner.png"
          alt="Coffee Beans And Cup"
        />
        <!-- </transition> -->
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <p data-aos="slide-up" data-aos-easing="ease">
          Paragraph with fade up animation and <code>ease</code> easing.
        </p>
      </v-col>
      <v-col>
        <p data-aos="zoom-in">
          Paragraph with fade down animation with the above link as anchor. This
          makes this paragraph animate before the previous paragraph starts
          animating.
        </p></v-col
      >
    </v-row>
    <MarketingSection
      class="flex-row-reverse"
      preheading="Premium Coffee"
      heading="Quality Coffee Cultivated by Good"
      subheading=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex maiores iste ut odio voluptas eos necessitatibus suscipit."
      image="coffee-growing.png"
    />

    <v-row class="my-12 py-12" style="background-color: #f1eee2;">
      <v-col>
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
      image="beans.png"
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
