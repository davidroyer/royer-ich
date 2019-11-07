<template>
  <div class="coffee-product text-center">
    <img :src="require(`@/assets/images/coffee-${coffee.image}.png`)" alt="" />
    <h3 v-text="coffee.name"></h3>
    <ShopBtn />
  </div>
</template>

<script>
import ShopBtn from '@/components/ShopBtn'

export default {
  components: {
    ShopBtn
  },
  props: {
    coffee: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
