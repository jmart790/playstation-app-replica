<template>
  <div id="app" class="playstation-app">
    <Header class="playstation-app__header"/>
    <router-view class="playstation-app__page"/>
    <Footer class="playstation-app__footer"/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
  components: {
    Header,
    Footer
  }
}

</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.playstation-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $app-bg-color;
  color: $app-font-color;
  height: 100vh;
  width: 100vw;

  &__header {
    position: fixed;
    top: 0;
  }
  &__page {
    padding: 100px $wall-spacing;
  }
  &__footer {
    position: fixed;
    bottom: 0;
  }
}
button {
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

</style>
