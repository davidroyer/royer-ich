<template>
  <v-row no-gutters>
    <v-col v-for="n in 6" :key="n" cols="12" sm="4">
      <img
        :src="require(`@/assets/images/grid/cg${n}.jpg`)"
        alt="Coffee Grid Image"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
