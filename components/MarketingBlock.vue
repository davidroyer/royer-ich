<template>
  <div class="marketing-block">
    <span class="preheading" v-text="preheading"></span>
    <component :is="headingTag" class="" v-text="heading" />
    <p v-text="subheading"></p>
    <ShopBtn v-if="!hideBtn" />
  </div>
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
    subheading: {
      type: String,
      default: undefined
    },
    headingTag: {
      type: String,
      default: 'h2'
    },
    hideBtn: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass">
.marketing-block
  margin: 0 auto
  max-width: 500px
</style>
