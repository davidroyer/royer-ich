<template>
  <v-row align="center" class="my-6 py-6">
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
        class="marketing-section-image mx-auto d-block"
        :src="require(`@/assets/images/${image}`)"
        alt="Marketing Image"
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
.marketing-section-image {
  width: 500px;
}
</style>
