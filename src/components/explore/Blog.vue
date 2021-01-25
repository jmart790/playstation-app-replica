<template>
  <div class="ps-blog">
    <article v-for="blog in blogs" :key="blog.id" class="ps-blog__card">
      <a :href="blog.link" :tabindex="-1" target="_blank" rel="noopener noreferrer">
        <img :src="blog.img" :alt="blog.title" loading="lazy">
        <h2>{{blog.title}}</h2>
        <p>{{blog.time}}</p>
      </a>
    </article>
  </div>
</template>

<script>
export default {
name: "Blog",
data() {
  return {
    blogs: [
       {
        id: '000001',
        img: "https://blog.playstation.com/tachyon/2021/01/header.png?resize=1088,612&crop_strategy=smart",
        title: "Official PlayStation Podcast Episode 387: Shadow Strikers",
        time: "18 hours ago",
        link: "https://blog.playstation.com/2021/01/22/official-playstation-podcast-episode-387-shadow-strikers/"
      },
      {
        id: '000002',
        img: "https://blog.playstation.com/tachyon/2021/01/ReZero-Starting-Life-in-Another-World-Header-image.jpg?resize=1088,612&crop_strategy=smart&zoom=1",
        title: "How Re:Zero – Starting Life in Another World – The Prophecy of the Throne stays true to the anime",
        time: "23 hours ago",
        link: "https://blog.playstation.com/2021/01/22/how-rezero-starting-life-in-another-world-the-prophecy-of-the-throne-stays-true-to-the-anime/"
      },
      {
        id: '000003',
        img: "https://blog.playstation.com/tachyon/2021/01/50857349668_1d2e66a54f_k.jpg?resize=1088,612&crop_strategy=smart&zoom=1",
        title: "Share of the Week: Assassin’s Creed Valhalla",
        time: "1 day ago",
        link: "https://blog.playstation.com/2021/01/22/share-of-the-week-assassins-creed-valhalla-2/"
      },
      {
        id: '000004',
        img: "https://blog.playstation.com/tachyon/2021/01/50859450942_0eeb7197fd_o.jpg?resize=1088,612&crop_strategy=smart&zoom=1",
        title: "Genshin Impact Version 1.3 releases February 3 — Celebrate the New Year in Teyvat",
        time: "1 day ago",
        link: "https://blog.playstation.com/2021/01/22/genshin-impact-version-1-3-releases-february-3-celebrate-the-new-year-in-teyvat/"
      },
      {
        id: '000005',
        img: "https://blog.playstation.com/tachyon/2021/01/RE-Featured-Image.jpg?resize=1088,612&crop_strategy=smart&zoom=1",
        title: "Resident Evil Village Maiden demo hits PS5 today",
        time: "1 day ago",
        link: "https://blog.playstation.com/2021/01/21/resident-evil-village-maiden-demo-hits-ps5-today/"
      },
      {
        id: '000006',
        img: "https://blog.playstation.com/tachyon/2021/01/Auto-Chess_Lead-Image.jpg?resize=1080,612&crop_strategy=smart&zoom=1",
        title: "Strategic hero battler Auto Chess hits PS4 January 27",
        time: "2 days ago",
        link: "https://blog.playstation.com/2021/01/21/strategic-hero-battler-auto-chess-hits-ps4-january-27/"
      },
      {
        id: '000007',
        img: "https://blog.playstation.com/tachyon/2021/01/Games-Under-en-16x9-1.jpg?resize=1088,612&crop_strategy=smart",
        title: "Games Under promotion comes to PlayStation Store",
        time: "3 days ago",
        link: "https://blog.playstation.com/2021/01/19/games-under-promotion-comes-to-playstation-store/"
      },
      {
        id: '000008',
        img: "https://blog.playstation.com/tachyon/2021/01/Resident-Evil-Village-Showcase-Lead-Image.jpg?resize=1088,612&crop_strategy=smart&zoom=1",
        title: "Watch the Resident Evil Showcase stream January 21",
        time: "4 days ago",
        link: "https://blog.playstation.com/2021/01/19/watch-the-resident-evil-showcase-stream-january-21/"
      },
      {
        id: '000009',
        img: "https://blog.playstation.com/tachyon/2021/01/386-header.png?resize=1088,612&crop_strategy=smart&zoom=1",
        title: "Official PlayStation Podcast Episode 386: Valholidays",
        time: "7 days ago",
        link: "https://blog.playstation.com/2021/01/15/official-playstation-podcast-episode-386-valholidays/"
      },
      {
        id: '000010',
        img: "https://blog.playstation.com/tachyon/2021/01/50835917476_71c6cd7ac9_k.jpg?resize=1088,612&crop_strategy=smart&zoom=1",
        title: "Share of the Week: Assassin’s Creed Valhalla",
        time: "8 days ago",
        link: "https://blog.playstation.com/2021/01/15/share-of-the-week-assassins-creed-valhalla/"
      },
      {
        id: '000011',
        img: "https://blog.playstation.com/tachyon/2021/01/Featured-Image-Resized.jpg?resize=1088,612&crop_strategy=smart&zoom=1",
        title: "Sonic the Hedgehog dashes into Puyo Puyo Tetris 2 today in a free update",
        time: "9 days ago",
        link: "https://blog.playstation.com/2021/01/14/sonic-the-hedgehog-dashes-into-puyo-puyo-tetris-2-today-in-a-free-update/"
      },
      {
        id: '000012',
        img: "https://blog.playstation.com/tachyon/2021/01/50829914237_be841a3611_k.jpg?resize=1088,612&crop_strategy=smart&zoom=1",
        title: "Anamanaguchi talks Scott Pilgrim vs. The World: The Game, 10 years later",
        time: "10 days ago",
        link: "https://blog.playstation.com/2021/01/13/anamanaguchi-talks-scott-pilgrim-vs-the-world-the-game-10-years-later/"
      },
      {
        id: '000013',
        img: "https://blog.playstation.com/tachyon/2021/01/50595046628_2e77d72d30_k.jpg?resize=1088,612&crop_strategy=smart&zoom=1",
        title: "PlayStation Store: Top downloads of 2020",
        time: "10 days ago",
        link: "https://blog.playstation.com/2021/01/13/playstation-store-top-downloads-of-2020/"
      },
      {
        id: '000014',
        img: "https://blog.playstation.com/tachyon/2021/01/50825817908_13feb668c4_k.jpg?resize=1088,612&crop_strategy=smart",
        title: "Returnal combat details: Upgradable weapons, otherworldly tools, and risky buffs",
        time: "10 days ago",
        link: "https://blog.playstation.com/2021/01/13/returnal-combat-details-upgradable-weapons-otherworldly-tools-and-risky-buffs/"
      },
      {
        id: '000015',
        img: "https://blog.playstation.com/tachyon/2021/01/Cyber-Shadow-FI.jpg?resize=1088,612&crop_strategy=smart",
        title: "Meet the one-man studio behind Cyber Shadow",
        time: "11 days ago",
        link: "https://blog.playstation.com/2021/01/12/meet-the-one-man-studio-behind-cyber-shadow/"
      },
      {
        id: '000016',
        img: "https://blog.playstation.com/tachyon/2021/01/Ghost-VFX-FI.jpg?resize=1088,612&crop_strategy=smart",
        title: "How stunning visual effects bring Ghost of Tsushima to life",
        time: "11 days ago",
        link: "https://blog.playstation.com/2021/01/12/how-stunning-visual-effects-bring-ghost-of-tsushima-to-life/"
      },
      {
        id: '000017',
        img: "https://blog.playstation.com/tachyon/2021/01/50814797852_a1a8655b85_k.jpg?resize=1088,612&crop_strategy=smart",
        title: "New Cranked Zombies mode comes to Black Ops Cold War, plus Zombies free access week",
        time: "11 days ago",
        link: "https://blog.playstation.com/2021/01/11/new-cranked-zombies-mode-comes-to-black-ops-cold-war-plus-zombies-free-access-week/"
      },
      {
        id: '000018',
        img: "https://blog.playstation.com/tachyon/2021/01/50801988022_4c6a3c0188_k.jpg?resize=1088,612&crop_strategy=smart",
        title: "Stealth-action RPG Disjunction comes to PS4 on January 28",
        time: "12 days ago",
        link: "https://blog.playstation.com/2021/01/11/stealth-action-rpg-disjunction-comes-to-ps4-on-january-28/"
      },
      {
        id: '000019',
        img: "https://blog.playstation.com/tachyon/2021/01/50812174586_df9d6c22b6_k.jpg?resize=1088,612&crop_strategy=smart",
        title: "Share of the Year",
        time: "15 days ago",
        link: "https://blog.playstation.com/2021/01/08/share-of-the-year/"
      },
      {
        id: '000020',
        img: "https://blog.playstation.com/tachyon/2021/01/FI.jpg?resize=1088,612&crop=0px,0px,1280px,720px",
        title: "The Crew 2 headlines PlayStation Now’s January lineup",
        time: "18 days ago",
        link: "https://blog.playstation.com/2021/01/05/the-crew-2-headlines-playstation-nows-january-lineup/"
      },
      {
        id: '000021',
        img: "https://blog.playstation.com/tachyon/2020/12/END_OF_YEAR_BLOG_FEATURED_IMAGE_Best_of_2020_1280x720.jpg?resize=1088,612&crop_strategy=smart",
        title: "PlayStation developers’ favorite games of 2020",
        time: "23 days ago",
        link: "https://blog.playstation.com/2020/12/31/playstation-developers-favorite-games-of-2020/"
      },
      {
        id: '000022',
        img: "https://blog.playstation.com/tachyon/2020/12/50732545931_f024f2d0a6_o.jpg?resize=1088,612&crop=0px,0px,1280px,720px",
        title: "January’s PlayStation Plus games: Maneater, Shadow of the Tomb Raider, and Greedfall",
        time: "24 days ago",
        link: "https://blog.playstation.com/2020/12/30/januarys-playstation-plus-games-maneater-shadow-of-the-tomb-raider-and-greedfall/"
      },
      {
        id: '000023',
        img: "https://blog.playstation.com/tachyon/2020/12/Best-Photo-Mode-FI.jpg?resize=1088,612&crop_strategy=smart",
        title: "PlayStation developers share their favorite Photo Mode screenshots",
        time: "26 days ago",
        link: "https://blog.playstation.com/2020/12/28/playstation-developers-share-their-favorite-photo-mode-screenshots/"
      },
      {
        id: '000024',
        img: "https://blog.playstation.com/tachyon/2020/12/49996106336_99473a5c04_k.jpg?resize=1088,612&crop_strategy=smart",
        title: "PlayStation Indies: Six upcoming games to watch",
        time: "32 days ago",
        link: "https://blog.playstation.com/2020/12/22/playstation-indies-six-upcoming-games-to-watch/"
      },
      {
        id: '000025',
        img: "https://blog.playstation.com/tachyon/2020/12/50733400563_19557de20b_k.jpg?resize=1088,612&crop_strategy=smart",
        title: "Start your mech piloting career in Override 2: Super Mech League, out today",
        time: "32 days ago",
        link: "https://blog.playstation.com/2020/12/22/start-your-mech-piloting-career-in-override-2-super-mech-league-out-today/"
      },
      {
        id: '000026',
        img: "https://blog.playstation.com/tachyon/2020/12/50732945382_5814d9bcd1_o.jpg?resize=1088,612&crop_strategy=smart",
        title: "Holiday Sale promotion comes to PlayStation Store",
        time: "32 days ago",
        link: "https://blog.playstation.com/2020/12/21/holiday-sale-promotion-comes-to-playstation-store/"
      },
      {
        id: '000027',
        img: "https://blog.playstation.com/tachyon/2020/12/50730465728_38976feca7_b.jpg?resize=1088,612&crop_strategy=smart",
        title: "Happy holidays from PlayStation.Blog and friends",
        time: "33 days ago",
        link: "https://blog.playstation.com/2020/12/21/happy-holidays-from-playstation-blog-and-friends-3/"
      }
    ]
  }
}
}
</script>

<style lang="scss">
.ps-blog {
  &__card {
    margin-bottom: gap(6);
    border-radius: 25px;
    overflow: hidden;
    background-color: $gradient-gray-1;
    a {
      text-decoration: none;
      background-color: transparent;
      outline: none;
    }
    img {
      width: 100%;
      min-height: 162px;
      height: 100%;
      object-fit: cover;
      background-color: $gradient-gray-1;
    }
    h2 {
      padding: gap(2) gap(4);
      font-size: 16px;
      font-weight: 400;
      color: $app-font-color;
    }
    p {
      padding: gap(2) gap(4) gap(6) ; 
      text-align: right;
      font-size: 14px;
      color: $border-gray;
    }
  }
}
</style>