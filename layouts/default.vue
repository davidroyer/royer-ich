<template>
  <VApp>
    <VSiteHeader />
    <VContent />
    <VMobileNav />
    <VSiteFooter />
  </VApp>
</template>

<script>
import VContent from '@/components/VContent'
import VMobileNav from '@/components/VMobileNav'
import VSiteHeader from '@/components/VSiteHeader'

export default {
  components: {
    VMobileNav,
    VContent,
    VSiteHeader,
    VSiteFooter: () => import('@/components/VSiteFooter')
  }

  // computed: {
  //   navItems() {
  //     return this.$store.state.nav
  //   }
  // }
}
</script>

<style lang="scss">
.top-banner {
  background-color: #f1eee2;
  min-height: 500px;
  width: 100vw;
  margin-top: -12px;
}

.v-footer {
  .footer-text {
    color: #5c5d5f;
  }
}

img {
  max-width: 100%;
}
</style>
