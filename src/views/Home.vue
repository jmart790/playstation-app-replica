<template>
  <main class="home">
    <HomeHeader class="home__header"/>
    <RecentlyPlayed class="home__recently-played"/>
  </main>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader'
import RecentlyPlayed from '@/components/home/RecentlyPlayed.vue'


export default {
  components: { HomeHeader, RecentlyPlayed },
  name: 'Home',
}
</script>

<style lang="scss">
.home {
  &__header {
    margin-bottom: gap(5);
  }
}
</style>
