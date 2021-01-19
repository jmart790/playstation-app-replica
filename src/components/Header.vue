<template>
  <header class="header">
    <div class="header__ctas">
      <button class="header__cta"><span class="icon-bubbles2"></span></button>
      <button class="header__cta"><span class="icon-users1"></span></button>
    </div>
  </header>
</template>

<script>
export default {
name: "Header",
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 75px;
  display: flex;
  background: rgb(25,28,33);
  background: linear-gradient(180deg, $gradient-gray-1 0%, $gradient-gray-2 100%);
  border-bottom: 1px solid $border-gray;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.55);

  &__ctas {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding: 10px $wall-spacing;
  }
  &__cta {
    font-size: 24px;
  }
}
</style>