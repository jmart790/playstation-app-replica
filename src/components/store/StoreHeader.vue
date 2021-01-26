<template>
  <div class="store-header">
    <span class="store-header__icon icon-ps-store" /> 
    <h4 class="store-header__title">PlayStation Store</h4>
    <button class="store-header__menu-btn">
      <span class="icon-menu1" />
    </button>
  </div>
</template>

<script>
export default {
 name: 'StoreHeader',
}
</script>

<style lang="scss">
.store-header {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  &__icon {
    margin-right: gap(4);
    font-size: 28px;
    color: $ps-blue;
  }
  &__title {
    margin-top: 4px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1;
  }
  &__menu-btn {
    margin-top: 4px;
    font-size: 24px;
  }
}
</style>