<template>
  <main class="home">
    <HomeHeader class="home__header"/>
    <FriendsPlaying class="home__friends-playing"/>
    <RecentlyPlayed class="home__recently-played"/>
  </main>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader'
import RecentlyPlayed from '@/components/home/RecentlyPlayed.vue'
import FriendsPlaying from '@/components/home/FriendsPlaying.vue'


export default {
  components: { HomeHeader, RecentlyPlayed, FriendsPlaying },
  name: 'Home',
}
</script>

<style lang="scss">
.home {
  &__header {
    margin-bottom: gap(6);
  }
  &__friends-playing {
    margin-bottom: gap(8);
  }
  &__recently-played {
    margin-bottom: gap(10);
  }
}
</style>
