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
}
</script>
