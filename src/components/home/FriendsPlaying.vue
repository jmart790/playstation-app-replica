<template>
  <section class="friends-playing">
    <div class="flex-between mb-1">
      <h3 class="friends-playing__header">Friends Playing</h3>
      <button class="friends-playing__btn">
        <span class="icon-keyboard_arrow_right" />
      </button>
    </div>
    <div class="flex flow-auto">
      <article 
        class="friends-playing__card"
        v-for="(friend,id) in friends"
        :key="`friend-playing-${id}`"
      >
        <p>{{friend.system}}</p>
        <img :src="friend.gameImage" loading="lazy" :alt="friend.gameTitle">
        <img :src="friend.avatar" loading="lazy" :alt="`${friend.userName} avatar`">
        <p>{{friend.userName}}</p>
      </article>
      <article class="friends-playing__all-cta">
        <b>All Friends</b>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "FriendsPlaying",
  data() {
    return {
      friends: [
        {
          system: 'PS4',
          gameImage: 'https://images-na.ssl-images-amazon.com/images/I/81thOj7XXPL._SX342_.jpg',
          gameTitle: 'Monopoly Family Pack',
          avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/BH/en/999/EP1018-CUSA00135_00-AV00000000000011/1593181229000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
          userName: 'John Oliver'
        },
        {
          system: 'PS4',
          gameImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202007/0213/qWJ5cv38w1MwWAfKj7DiqU4X.png',
          gameTitle: "Assassin's Creed Valhalla",
          avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/GB/en/999/EP2402-CUSA05624_00-AV00000000000240/1601168983000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
          userName: 'Michael Scott'
        },
        {
          system: 'PS4',
          gameImage: 'https://davidchenvo.com/wp-content/uploads/2020/07/Ghost-of-Tsushima.jpeg',
          gameTitle: 'Ghost Of Tsushima',
          avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/IN/en/999/EP2402-CUSA05624_00-AV00000000000157/1601168856000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
          userName: 'Fernandita Perez'
        },
        {
          system: 'PS4',
          gameImage: 'https://image.api.playstation.com/vulcan/img/cfn/11307X5YlQKVoDSfZQ7C3yzWGAwjCZbegfZaAGo-KqS9_CVI5Sdnu4Qx4nXg4OSD48AK_VmeHdcGA3m86TdS-L24_t8F2LOv.png',
          gameTitle: 'Call of Duty Warzone',
          avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/en/999/EP0149-CUSA09988_00-AV00000000000001/1603375274000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
          userName: 'Grandaddy90210'
        },
        {
          system: 'PS4',
          gameImage: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA01433_00/7/i_5c5e430a49994f22df5fd81f446ead7b6ae45027af490b415fe4e744a9918e4c/i/icon0.png',
          gameTitle: 'Rocket League',
          avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/CZ/en/999/EP2402-CUSA05624_00-AV00000000000237/1601168959000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
          userName: 'Damien Wayne'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.friends-playing {
  &__header {
    font-weight: 400;
    font-size: 16px;
  }
  &__btn {
    font-size: 22px;
  }
  &__card {
    position: relative;
    margin-right: gap(4);
    img:first-of-type {
      height: 150px;
      width: 150px;
      object-fit: cover;
      border-radius: 10px;
      background-color: $gradient-gray-1;
    }
    img:last-of-type {
      position: absolute;
      top: 120px;
      left: -5px;
      height: 30px;
      width: 30px;
      object-fit: cover;
      border: 5px solid $app-bg-color;
      border-radius: 50%;
      background-color: $gradient-gray-1;
    }
    p:first-of-type {
      position: absolute;
      margin: gap(2);
      padding: gap(1) gap(2);
      font-size: 12px;
      font-weight: 700;
      background-color: rgba(0, 0, 0, 0.5);
      border: 1px solid white;
    }
    p:last-of-type {
      margin-top: gap(1);
      font-size: 14px;
    }
  }
  &__all-cta {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-color: $gradient-gray-2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    b {
      color: $ps-blue;
      white-space: nowrap;
    }
  }
}
</style>