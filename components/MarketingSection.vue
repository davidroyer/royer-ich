<template>
  <v-row align="center" class=" my-12 py-12" style="background-color: #fff;">
    <v-col cols="12" md="6">
      <MarketingBlock
        class="text-center text-md-left"
        :heading-tag="headingTag"
        :preheading="preheading"
        :heading="heading"
        :subheading="subheading"
      />
    </v-col>

    <v-col>
      <img
        class="mx-auto d-block"
        :src="require(`@/assets/images/${image}`)"
        alt="Marketing Image"
        max-width="500px"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    preheading: {
      type: String,
      default: undefined
    },
    heading: {
      type: String,
      default: undefined
    },
    headingTag: {
      type: String,
      default: 'h2'
    },
    subheading: {
      type: String,
      default: undefined
    },
    image: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.white-bg {
  background-color: #fff !important;
}
</style>
