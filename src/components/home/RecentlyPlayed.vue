<template>
  <section class="recently-played">
    <h1 class="recently-played__header">Recently Played</h1>
    <article class="recently-played__card" v-for="game in games" :key="game.id">
      <img
        class="recently-played__img"
        :src="game.img"
        :alt="`${game.title} image`"
        loading="lazy"
      />
      <h2 class="recently-played__game-title">{{game.title}}</h2>
      <hr class="recently-played__break" />
      <div class="flex-between" v-if="game.trophies.available">
        <h3 class="recently-played__trophies-header">Trophies</h3>
        <button class="recently-played__trophy-btn">
          <span class="icon-keyboard_arrow_right" />
        </button>
      </div>
      <div class="flex-around mb-2">
        <p class="recently-played__trophy-stat">{{game.trophies.earned}}<span>Earned</span></p>
        <CircularPercentageChart :percent="game.trophies.percent"/>
        <p class="recently-played__trophy-stat">{{game.trophies.available}}<span>Available</span></p>
      </div>
      <div class="flex-between mb-2">
        <div class="recently-played__trophy">
          <img src="https://www.psu.com/wp/wp-content/uploads/2020/12/ps5-platinum-trophy.png" alt="platinum trophy" loading="lazy">
          <p>{{game.trophies.platinum}}</p>
        </div>
        <div class="recently-played__trophy">
          <img src="https://www.psu.com/wp/wp-content/uploads/2020/12/ps5-gold-trophy.png" alt="gold trophy" loading="lazy">
          <p>{{game.trophies.gold}}</p>
        </div>
        <div class="recently-played__trophy">
          <img src="https://www.psu.com/wp/wp-content/uploads/2020/12/ps5-silver-trophy.png" alt="silver trophy" loading="lazy">
          <p>{{game.trophies.silver}}</p>
        </div>
        <div class="recently-played__trophy">
          <img src="https://www.psu.com/wp/wp-content/uploads/2020/12/ps5-bronze-trophy.png" alt="bronze trophy" loading="lazy">
          <p>{{game.trophies.bronze}}</p>
        </div>
      </div>
      <button class="recently-played__view-game-btn">View Game</button>
    </article>
  </section>
</template>

<script>
import CircularPercentageChart from './CircularPercentageChart.vue';
export default {
  name: "RecentlyPlayed",
  components: { CircularPercentageChart },
  data() {
    return {
      games: [
        {
          id: '00000001',
          img: 'https://store-images.s-microsoft.com/image/apps.47460.13842592194848671.ea893aa9-a235-46fc-b407-5d5eff0a9039.3d4751f6-066f-425b-b734-2774bb236fd1?mode=scale&q=90&h=720&w=1280&background=%23FFFFFF',
          title: 'STAR WARS Jedi: Fallen Order',
          trophies: {
            earned: 16,
            available: 40,
            percent: 30,
            platinum: 0,
            gold: 0,
            silver: 4,
            bronze: 12
          }
        },
        {
          id: '00000002',
          img: 'https://image.api.playstation.com/vulcan/img/rnd/202009/2919/KpFO3I0iQCym2X58b43Avg8L.jpg',
          title: 'Rocket League',
          trophies: {
            earned: 38,
            available: 88,
            percent: 39,
            platinum: 0,
            gold: 4,
            silver: 9,
            bronze: 25
          }
        },
        {
          id: '00000003',
          img: 'https://image.api.playstation.com/vulcan/img/cfn/11307cYK6sokSVantHWGbw0OPQdVVraSWoeG_gnzwbqszrq0ra68SPGuWHpBDGfYRofp_Ckrb23W1cp5lJa6MkZrpJEHtQ2c.png?w=440',
          title: 'Cuphead',
          trophies: {
            earned: 0,
            available: 0,
            percent: 0,
            platinum: 0,
            gold: 0,
            silver: 0,
            bronze: 0
          }
        },
      ]
    }
  }
};
</script>

<style lang="scss">
.recently-played {
  &__header {
    margin-bottom: gap(3);
    font-size: 18px;
    font-weight: 400;
  }
  &__card {
    position: relative;
    z-index: 2;
    padding-bottom: gap(4);
    &::before {
      position: absolute;
      left: -36px;
      z-index: -1;
      content: '';
      width: 100vw;
      height: 100%;
      background: linear-gradient(180deg, $app-bg-color 0%, $gradient-gray-1 100%);
    }
    &:first-of-type .recently-played__img {
      margin-top: 0;
    }
  }
  &__img {
    width: 100%;
    min-height: 162px;
    height: 100%;
    margin-top: gap(8);
    margin-bottom: gap(2);
    border-radius: 10px;
    object-fit: cover;
    overflow: hidden;
    background-color: $gradient-gray-1;
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
      width: 50px;
      min-height: 55px;
      height: 100%;
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