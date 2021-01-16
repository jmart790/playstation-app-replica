<template>
  <footer class="footer">
    <nav class="footer__nav">
      <router-link class="footer__link" to="/">🎮</router-link>
      <router-link class="footer__link" to="/explore">🚀</router-link>
      <router-link class="footer__link" to="/store">🛒</router-link>
      <router-link class="footer__link" to="/library">📱</router-link>
      <router-link class="footer__link" to="/search">🔍</router-link>
    </nav>
    <div class="footer__current-page-container">
      <label for="current-page">{{pageLabel}}</label>
    </div>
  </footer>
</template>

<script>
export default {
name: "Footer",
computed: {
  pageLabel() {
    const labelVendor = {Home: 'Play', Explore: 'Explore', Store: 'PS Store', Library: 'Game Library', Search: 'Search'}
    return labelVendor[this.$route.name]
  }
}
}
</script>

<style lang="scss">
.footer {
  width: 100%;
  background: rgb(25,28,33);
  background: linear-gradient(0deg, $gradient-gray-1 0%, $gradient-gray-2 100%);
  border-top: 1px solid $border-gray;
  border-top-left-radius: 250px 25px;
  border-top-right-radius: 250px 25px;
  box-shadow: 0 -6px 12px rgba(0, 0, 0, 0.55);
  &__nav {
    padding: 10px $wall-spacing 15px;
    display: flex;
    justify-content: space-between ;
    box-shadow: inset 0 -30px 20px rgba(0, 0, 0, 0.35);
  }
  &__link {
    font-size: 24px;
    text-decoration: none;
    &:first-of-type, &:last-of-type {
      margin-top: 10px;
    }
    &:nth-of-type(even) {
      margin-top: 5px;
    }
    &.router-link-exact-active {
      position: relative;
      color: #fff;
      box-shadow: 4px 4px 20px rgb(24, 160, 214);
      &::before {
        content: '';
        position: absolute;
        width: 50px;
        height: 25px;
        background-color: #fff;
        left: -50%;
        top: 90%;
        border-radius: 5px;
        box-shadow: 4px 4px 20px rgb(24, 160, 214);
      }
      &:first-of-type.router-link-exact-active::before {
        transform: translateY(5px) rotate(-7deg);
      }
      &:nth-of-type(2).router-link-exact-active::before {
        transform: translateY(1px) rotate(-2deg);
      }
      &:nth-of-type(4).router-link-exact-active::before {
        transform: translateY(1px) rotate(2deg);
      }
      &:last-of-type.router-link-exact-active::before {
        transform: translateY(5px) rotate(7deg);
      }
    }
  }

  &__current-page-container {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: -15px;
    background: rgb(25,28,33);
    background: linear-gradient(0deg, $gradient-gray-1 0%, $gradient-gray-2 100%);
    border-top: 1px solid $border-gray;
    border-top-left-radius: 250px 25px;
    border-top-right-radius: 250px 25px;
    label {
      padding: 8px;
    }
  }
}
</style>