<template>
  <div class="ps-store">
    <StoreHeader class="ps-store__header"/>
     <nav class="ps-store__nav">
      <router-link class="ps-store__link" to="/store/latest"><b>Latest</b></router-link>
      <router-link class="ps-store__link" to="/store/collections"><b>Collections</b></router-link>
      <router-link class="ps-store__link" to="/store/deals"><b>Deals</b></router-link>
      <router-link class="ps-store__link" to="/store/ps5"><b>PS5</b></router-link>
      <router-link class="ps-store__link" to="/store/subscriptions"><b>Subscriptions</b></router-link>
    </nav>
    <div style="margin-top: 56px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import StoreHeader from '@/components/store/StoreHeader.vue'

export default {
  components: { StoreHeader },
  name: 'Store',
}
</script>

<style lang="scss">
.ps-store {
  position: relative;
  &__header {
    margin-bottom: gap(8);
  }
  &__nav {
    position: sticky;
    overflow: scroll;
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
