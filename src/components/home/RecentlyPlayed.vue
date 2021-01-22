<template>
  <section class="recently-played">
    <h1 class="recently-played__header">Recently Played</h1>
    <img
      class="recently-played__img"
      src="https://store-images.s-microsoft.com/image/apps.47460.13842592194848671.ea893aa9-a235-46fc-b407-5d5eff0a9039.3d4751f6-066f-425b-b734-2774bb236fd1?mode=scale&q=90&h=720&w=1280&background=%23FFFFFF"
      alt="fallen order image"
    />
    <h2 class="recently-played__game-title">
      STAR WARS Jedi: Fallen Order<sup>TM</sup>
    </h2>
    <hr class="recently-played__break" />
    <div class="flex-between">
      <h3 class="recently-played__trophies-header">Trophies</h3>
      <button class="recently-played__trophy-btn">
        <span class="icon-keyboard_arrow_right" />
      </button>
    </div>
    <div class="flex-around mb-2">
      <p class="recently-played__trophy-stat">16<span>Earned</span></p>
      <CircularPercentageChart :percent="30"/>
      <p class="recently-played__trophy-stat">40<span>Available</span></p>
    </div>
    <div class="flex-between mb-2">
      <div class="recently-played__trophy">
        <img src="https://www.psu.com/wp/wp-content/uploads/2020/12/ps5-platinum-trophy.png" alt="platinum trophy">
        <p>0</p>
      </div>
      <div class="recently-played__trophy">
        <img src="https://www.psu.com/wp/wp-content/uploads/2020/12/ps5-gold-trophy.png" alt="gold trophy">
        <p>0</p>
      </div>
      <div class="recently-played__trophy">
        <img src="https://www.psu.com/wp/wp-content/uploads/2020/12/ps5-silver-trophy.png" alt="silver trophy">
        <p>4</p>
      </div>
      <div class="recently-played__trophy">
        <img src="https://www.psu.com/wp/wp-content/uploads/2020/12/ps5-bronze-trophy.png" alt="bronze trophy">
        <p>12</p>
      </div>
    </div>
    <button class="recently-played__view-game-btn">View Game</button>
  </section>
</template>

<script>
import CircularPercentageChart from './CircularPercentageChart.vue';
export default {
  name: "RecentlyPlayed",
  components: { CircularPercentageChart },
};
</script>

<style lang="scss">
.recently-played {
  &__header {
    margin-bottom: gap(3);
    font-size: 18px;
    font-weight: 400;
  }
  &__img {
    width: 100%;
    margin-bottom: gap(2);
    border-radius: 10px;
    object-fit: cover;
    overflow: hidden;
  }
  &__game-title {
    margin-bottom: gap(3);
    font-weight: 400;
    font-size: 18px;
    sup {
      font-size: 10px;
    }
  }
  &__break {
    margin-bottom: gap(3);
    border: 0;
    border-top: 1px solid $border-gray;
    border-width: 1px;
  }
  &__trophies-header {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: gap(4);
  }
  &__trophy-btn {
    font-size: 22px;
  }
  &__trophy-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    span {
      font-size: 14px;
      color: $border-gray;
    }
  }
  &__trophy {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      max-width: 50px;
      margin-bottom: 4px;
    }
  }
  &__view-game-btn {
    width: 100%;
    padding: 8px;
    border-radius: 25px;
    background-color: $gradient-gray-2;
    color: $app-font-color;
    font-weight: bold;
  }
}
</style>