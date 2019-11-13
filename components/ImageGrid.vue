<template>
  <v-row no-gutters>
    <v-col v-for="n in 6" :key="n" cols="6" sm="4">
      <v-img :src="require(`@/assets/images/grid/cg${n}.jpg`)" />
    </v-col>
  </v-row>
</template>
