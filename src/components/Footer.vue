<template>
  <footer class="footer">
    <nav class="footer__nav">
      <router-link class="footer__link" to="/"><span class="icon-pscontroller"></span></router-link>
      <router-link class="footer__link" to="/explore"><span class="icon-rocket"></span></router-link>
      <router-link class="footer__link" to="/store"><span class="icon-ps-store"></span></router-link>
      <router-link class="footer__link" to="/library"><span class="icon-ps-library"></span></router-link>
      <router-link class="footer__link" to="/search"><span class="icon-search"></span></router-link>
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
    padding: 10px $wall-spacing 20px;
    display: flex;
    justify-content: space-between ;
    box-shadow: inset 0 -30px 20px rgba(0, 0, 0, 0.35);
  }
  &__link {
    text-decoration: none;
    span::before {
      font-size: 22px;
      color: $app-font-color !important;
    }
    // temp fix, fix svgs
    &:first-of-type span::before {
      font-size: 18px;
    }
    &:first-of-type, &:last-of-type {
      margin-top: 15px;
    }
    &:nth-of-type(even) {
      margin-top: 5px;
    }
    &.router-link-exact-active {
      position: relative;
      color: #fff;
      filter: drop-shadow(0px 0px 10px #18a0d6);
      &::before {
        content: '';
        position: absolute;
        width: 50px;
        height: 25px;
        background-color: #fff;
        left: -50%;
        top: 90%;
        border-radius: 5px;
      }
      &:first-of-type.router-link-exact-active::before {
        transform: translateY(5px) rotate(-7deg);
        left: -30%;
      }
      &:nth-of-type(2).router-link-exact-active::before {
        transform: translateY(1px) rotate(-2deg);
        left: -70%;
      }
      &:nth-of-type(3).router-link-exact-active::before {
        left: -85%;
      }
      &:nth-of-type(4).router-link-exact-active::before {
        transform: translateY(1px) rotate(2deg);
        left: -60%;
      }
      &:last-of-type.router-link-exact-active::before {
        transform: translateY(5px) rotate(7deg);
        left: -75%;
      }
    }
  }

  &__current-page-container {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: -20px;
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