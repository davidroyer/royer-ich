<template>
  <div class="coffee-product text-center">
    <img :src="require(`@/assets/images/coffee-${coffee.image}.png`)" alt="" />
    <h3 v-text="coffee.name"></h3>
    <ShopBtn />
  </div>
</template>

<script>
export default {
  props: {
    coffee: {
      type: Object,
      required: true
    }
  }
}
</script>
