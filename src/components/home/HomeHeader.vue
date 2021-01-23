<template>
  <section class="home-header">
    <div class="flex-center">
      <div class="home-header__avatar">
        <img src="https://i.pinimg.com/originals/44/5f/f6/445ff670b9debf53019f07540dd5ebdb.png" alt="avatar image">
      </div>
      <h4 class="home-header__user-name">Joshua Martinez</h4>
    </div>
    <div>
      <button>
        <span class="icon-bell"></span>
      </button>
      <button>
        <span class="icon-cog"></span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
name: "HomeHeader"
}
</script>

<style lang="scss">
.home-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
   &__avatar {
    width: 40px;
    height: 40px;
    margin-right: 8px;
    background-color: $gradient-gray-2;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__user-name {
    font-weight: 500;
  }

  button:first-of-type {
    margin-right: 24px;
  }
}
</style>