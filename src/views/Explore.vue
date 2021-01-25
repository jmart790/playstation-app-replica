<template>
  <div class="explore">
    <nav class="explore__nav">
      <router-link class="explore__link" to="/explore/blog"><b>PS Blog</b></router-link>
      <router-link class="explore__link" to="/explore/news"><b>Official News</b></router-link>
    </nav>
    <div style="margin-top: 56px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Explore',
}
</script>

<style lang="scss">
  .explore {
    position: relative;
    &__nav {
      position: fixed;
      z-index: 5;
      background-color: rgba($app-bg-color, 0.5);
      border-radius: 25px;
      padding: gap(2) gap(1);
    }
    &__link {
      position: relative;
      text-decoration: none;
      color: $app-font-color;
      padding: gap(1) gap(4);
      margin-right: gap(2);
      border-radius: 25px;
      &.router-link-exact-active {
        background-color: #525b5f;
      }
    }
  }
</style>
