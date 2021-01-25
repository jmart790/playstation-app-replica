<template>
  <div class="official-news">
    <article class="official-news__card" v-for="item in news" :key="item.id">
      <div class="flex-center mb-2">
        <img 
          :src="item.avatar" 
          :alt="item.topic" 
          loading="lazy"
          class="official-news__avatar"
        >
        <h4 class="official-news__topic">{{item.topic}}</h4>
      </div>
      <img 
        :src="item.img" 
        :alt="item.title" 
        loading="lazy"
        class="official-news__banner"
      >
      <h2 class="official-news__title">{{item.title}}</h2>
      <summary class="official-news__summary">{{item.summary}}</summary>
      <p class="official-news__time">{{item.time}}</p>
    </article>
  </div>
</template>

<script>
export default {
name: "News",
data() {
  return {
    news: [
      {
        id: '0000001',
        avatar: "https://pht.qoo-static.com/zi6QgTtIiAnGqQMizfoj2LnE85kzHyZlgTruSzJ7Zw_79NAmB3fhxuDegwxby7P0yw=w512",
        topic: "Playstation",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/resident-evil-village-ps5-screenshot-08-24jul20?$native$",
        title: "Catch up on the showcase",
        summary: "Watch the full Resident Evil Village showcase stream for more gameplay details on Resident Evil Re:Verse.",
        time: "23 hours ago"
      },
      {
        id: '0000002',
        avatar: "https://image.api.playstation.com/cdn/UP0001/CUSA05218_00/u1vEDFBXDlk1WuRsL10EEIDUT7UsFioM.png?w=440",
        topic: "For Honor",
        img: "https://image.api.playstation.com/vulcan/img/rnd/202011/0204/SmA73G7vzlWnpmVxSEoikcwR.jpg?w=1024",
        title: "Dominion Series Finals",
        summary: "On Jan 23rd 9am PT, watch the 8 teams battle for their chance to be crowned For Honor Dominion Series Champions! Watch on Twitch.",
        time: "2 days ago"
      },
      {
        id: '0000003',
        avatar: "https://pht.qoo-static.com/zi6QgTtIiAnGqQMizfoj2LnE85kzHyZlgTruSzJ7Zw_79NAmB3fhxuDegwxby7P0yw=w512",
        topic: "Playstation",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/resident-evil-village-ps5-screenshot-08-24jul20?$native$",
        title: "Catch up on the showcase",
        summary: "Watch the full Resident Evil Village showcase stream for more gameplay details on Resident Evil Re:Verse.",
        time: "23 hours ago"
      },
      {
        id: '0000004',
        avatar: "https://image.api.playstation.com/cdn/UP0001/CUSA05218_00/u1vEDFBXDlk1WuRsL10EEIDUT7UsFioM.png?w=440",
        topic: "For Honor",
        img: "https://image.api.playstation.com/vulcan/img/rnd/202011/0204/SmA73G7vzlWnpmVxSEoikcwR.jpg?w=1024",
        title: "Dominion Series Finals",
        summary: "On Jan 23rd 9am PT, watch the 8 teams battle for their chance to be crowned For Honor Dominion Series Champions! Watch on Twitch.",
        time: "2 days ago"
      },
      {
        id: '0000005',
        avatar: "https://pht.qoo-static.com/zi6QgTtIiAnGqQMizfoj2LnE85kzHyZlgTruSzJ7Zw_79NAmB3fhxuDegwxby7P0yw=w512",
        topic: "Playstation",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/resident-evil-village-ps5-screenshot-08-24jul20?$native$",
        title: "Catch up on the showcase",
        summary: "Watch the full Resident Evil Village showcase stream for more gameplay details on Resident Evil Re:Verse.",
        time: "23 hours ago"
      },
      {
        id: '0000006',
        avatar: "https://image.api.playstation.com/cdn/UP0001/CUSA05218_00/u1vEDFBXDlk1WuRsL10EEIDUT7UsFioM.png?w=440",
        topic: "For Honor",
        img: "https://image.api.playstation.com/vulcan/img/rnd/202011/0204/SmA73G7vzlWnpmVxSEoikcwR.jpg?w=1024",
        title: "Dominion Series Finals",
        summary: "On Jan 23rd 9am PT, watch the 8 teams battle for their chance to be crowned For Honor Dominion Series Champions! Watch on Twitch.",
        time: "2 days ago"
      },
      {
        id: '0000007',
        avatar: "https://pht.qoo-static.com/zi6QgTtIiAnGqQMizfoj2LnE85kzHyZlgTruSzJ7Zw_79NAmB3fhxuDegwxby7P0yw=w512",
        topic: "Playstation",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/resident-evil-village-ps5-screenshot-08-24jul20?$native$",
        title: "Catch up on the showcase",
        summary: "Watch the full Resident Evil Village showcase stream for more gameplay details on Resident Evil Re:Verse.",
        time: "23 hours ago"
      },
      {
        id: '0000008',
        avatar: "https://image.api.playstation.com/cdn/UP0001/CUSA05218_00/u1vEDFBXDlk1WuRsL10EEIDUT7UsFioM.png?w=440",
        topic: "For Honor",
        img: "https://image.api.playstation.com/vulcan/img/rnd/202011/0204/SmA73G7vzlWnpmVxSEoikcwR.jpg?w=1024",
        title: "Dominion Series Finals",
        summary: "On Jan 23rd 9am PT, watch the 8 teams battle for their chance to be crowned For Honor Dominion Series Champions! Watch on Twitch.",
        time: "2 days ago"
      },
      {
        id: '0000009',
        avatar: "https://pht.qoo-static.com/zi6QgTtIiAnGqQMizfoj2LnE85kzHyZlgTruSzJ7Zw_79NAmB3fhxuDegwxby7P0yw=w512",
        topic: "Playstation",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/resident-evil-village-ps5-screenshot-08-24jul20?$native$",
        title: "Catch up on the showcase",
        summary: "Watch the full Resident Evil Village showcase stream for more gameplay details on Resident Evil Re:Verse.",
        time: "23 hours ago"
      },
      {
        id: '0000010',
        avatar: "https://image.api.playstation.com/cdn/UP0001/CUSA05218_00/u1vEDFBXDlk1WuRsL10EEIDUT7UsFioM.png?w=440",
        topic: "For Honor",
        img: "https://image.api.playstation.com/vulcan/img/rnd/202011/0204/SmA73G7vzlWnpmVxSEoikcwR.jpg?w=1024",
        title: "Dominion Series Finals",
        summary: "On Jan 23rd 9am PT, watch the 8 teams battle for their chance to be crowned For Honor Dominion Series Champions! Watch on Twitch.",
        time: "2 days ago"
      },
      {
        id: '0000011',
        avatar: "https://pht.qoo-static.com/zi6QgTtIiAnGqQMizfoj2LnE85kzHyZlgTruSzJ7Zw_79NAmB3fhxuDegwxby7P0yw=w512",
        topic: "Playstation",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/resident-evil-village-ps5-screenshot-08-24jul20?$native$",
        title: "Catch up on the showcase",
        summary: "Watch the full Resident Evil Village showcase stream for more gameplay details on Resident Evil Re:Verse.",
        time: "23 hours ago"
      },
      {
        id: '0000012',
        avatar: "https://image.api.playstation.com/cdn/UP0001/CUSA05218_00/u1vEDFBXDlk1WuRsL10EEIDUT7UsFioM.png?w=440",
        topic: "For Honor",
        img: "https://image.api.playstation.com/vulcan/img/rnd/202011/0204/SmA73G7vzlWnpmVxSEoikcwR.jpg?w=1024",
        title: "Dominion Series Finals",
        summary: "On Jan 23rd 9am PT, watch the 8 teams battle for their chance to be crowned For Honor Dominion Series Champions! Watch on Twitch.",
        time: "2 days ago"
      },
    ]
  }
}
}
</script>

<style lang="scss">
.official-news {
  &__card { 
    position: relative;
    z-index: 1;
    margin-top: gap(6);
    &::before {
      position: absolute;
      left: -36px;
      z-index: -1;
      content: '';
      width: 100vw;
      height: 100%;
      background: linear-gradient(180deg, $app-bg-color 0%, $gradient-gray-1 100%);
    }
  }
  &__avatar {
    width: 35px;
    height: 35px;
    margin-right: gap(2);
    border-radius: 10px;
    object-fit: cover;
    overflow: hidden;
    background-color: $gradient-gray-1;
  }
  &__topic {
    font-weight: 400;
  }
  &__banner {
    min-height: 162px;
    height: 100%;
    width: 100%;
    background-color: $gradient-gray-1;
  }
  &__title {
    margin-bottom: gap(1);
    font-weight: 400;
    font-size: 20px;
  }
  &__summary {
    color: $border-gray;
    font-size: 16px;
    line-height: 1.5;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
  &__time {
    padding: gap(4) gap(4) gap(6) ; 
    color: $border-gray;
    font-size: 14px;
    text-align: right;
  }
}
</style>