<template>
  <v-footer dark app color="#393939" padless absolute>
    <v-row class="newsletter pa-8" justify="center">
      <v-col sm="6">
        <MarketingBlock
          heading="Would you like to hear from us?"
          subheading="Submit your email address for our newsletter"
          class="text-center"
          hide-btn
        />
        <v-text-field
          style="width: 300px"
          class="mx-auto text-center"
          name="name"
          label="label"
          value=""
          placeholder="yourname@email.com"
          single-line
        ></v-text-field>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="12">
      </v-col> -->
    <v-row class="v-footer-bottom px-4">
      <v-col>
        <span class="footer-text">All Rights Reserved &copy; 2019</span>
      </v-col>
      <v-col class="text-right">
        <span class="footer-text">+436 701 32 43 92</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.newsletter {
  // background-color: #393939;
  width: 100%;

  input {
    text-align: center !important;
  }
}

.v-footer {
  &-bottom {
    background-color: #1a1b1e;
  }
}
</style>
