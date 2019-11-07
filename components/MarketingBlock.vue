<template>
  <v-row align="center" class="my-12 py-12">
    <v-col cols="12" md="6">
      <div class="mblock-content">
        <h2>The secret lies within the bean</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          laboriosam rem hic nam esse dolorem, nemo vero commodi maiores facere.
        </p>
        <ShopBtn />
      </div>
    </v-col>

    <v-col>
      <img
        class="mx-auto d-block"
        src="@/assets/images/coffee-black.png"
        alt=""
      />
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style lang="sass">
.mblock-content
  margin: 0 auto
  max-width: 500px
</style>
