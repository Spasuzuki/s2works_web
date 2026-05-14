import imgMira from "./service/ogp_mira.png";
import imgSteply from "./service/ogp_steply.png";
import imgBucketList from "./service/ogp_bucketlist.jpg";
import imgBashirura from "./service/ogp_bashirura.png";
import imgWorks28 from "./works/works-28.webp";

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
  year?: string;
}

export const projects: Project[] = [
  {
    id: "36",
    title: "ZABOOMアップデート",
    category: "アトラクション",
    image: imgWorks28,
    link: "https://litpla.com/magazine/zaboom2-story/",
  },
  {
    id: "35",
    title: "日経ビジネス",
    category: "記事・掲載",
    image: "https://s2works.net/assets/img/works/works-24.webp",
    link: "https://business.nikkei.com/atcl/NBD/19/00117/00359/",
  },
  {
    id: "34",
    title: "フィキューのドリームランナーOMO",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-27.webp",
    link: "https://litpla.com/news/press/202505-dreamrunner-update/",
  },
  {
    id: "33",
    title: "映画ドラえもん のび太の絵世界物語 ART FANTASY",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-26.webp",
    link: "https://corp.litpla.com/news/press/2025/202503-doraemon",
  },
  {
    id: "32",
    title: "PLANET PORTAL",
    category: "アプリ",
    image: "https://s2works.net/assets/img/works/works-25.webp",
    link: "https://www.youtube.com/watch?v=oQ-Cln5Ho58",
  },
  {
    id: "31",
    title: "HOBBY WATCH",
    category: "記事・掲載",
    image: "https://s2works.net/assets/img/works/works-24.webp",
    link: "https://hobby.watch.impress.co.jp/docs/news/1641421.html",
  },
  {
    id: "30",
    title: "タカラトミープラネット",
    category: "テーマパーク",
    image: "https://s2works.net/assets/img/works/works-24.webp",
    link: "https://www.youtube.com/watch?v=Fbn3jVq3OGQ",
  },
  {
    id: "29",
    title: "映画ドラえもん のび太の地球交響楽 DRAW SYMPHONY",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-21.webp",
    link: "https://www.youtube.com/watch?v=zWr6M-gdlzI",
  },
  {
    id: "28",
    title: "BEYBLADE XR STUDIUM",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-19.jpg",
    link: "https://www.youtube.com/watch?v=NCLG-at96ks",
  },
  {
    id: "27",
    title: "無限だるまおとし",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-20.jpg",
    link: "https://www.youtube.com/watch?v=WrJQsOYTxxo",
  },
  {
    id: "26",
    title: "鬼のかくれんぼ",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-14.webp",
    link: "https://corp.litpla.com/news/press/2023/2023-toyshow",
  },
  {
    id: "25",
    title: "トミカ デザインレーシング",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-13.webp",
    link: "https://corp.litpla.com/news/press/2023/2023tomica-racing",
  },
  {
    id: "24",
    title: "映画ドラえもん のび太と空の理想郷 SKETCH AIR RACING",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-12.png",
    link: "https://litpla.com/news/press/202302_doraemon/",
  },
  {
    id: "23",
    title: "沖縄アリーナ デジタルアトラクション",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-18.webp",
    link: "https://corp.litpla.com/news/press/2022/20221031-okinawa",
  },
  {
    id: "22",
    title: "LEXUS Digital Paint",
    category: "記事・掲載",
    image: "https://s2works.net/assets/img/works/works-17.jpg",
    link: "https://lexus.jp/magazine/20221205/1521/car_interview.html",
  },
  {
    id: "21",
    title: "LEGO REBUILD THE WORLD",
    category: "記事・掲載",
    image: "https://s2works.net/assets/img/works/works-11.webp",
    link: "https://thebridge.jp/2022/11/legojapan-litpla-mugenlabo-magazine",
  },
  {
    id: "20",
    title: "LEGO REBUILD THE WORLD",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-10.webp",
    link: "https://prtimes.jp/main/html/rd/p/000000120.000048417.html",
  },
  {
    id: "19",
    title: "恐竜コラボ",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-16.webp",
    link: "https://corp.litpla.com/news/press/2022/202208-summer",
  },
  {
    id: "18",
    title: "ZABOOM",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-15.webp",
    link: "https://corp.litpla.com/news/press/2022/202207-zaboom",
  },
  {
    id: "17",
    title: "レーザーミニ四駆",
    category: "記事・掲載",
    image: "https://s2works.net/assets/img/works/works-8.jpg",
    link: "https://mag.sendenkaigi.com/hansoku/202202/real-experience/023189.php",
  },
  {
    id: "16",
    title: "レーザーミニ四駆",
    category: "記事・掲載",
    image: "https://s2works.net/assets/img/works/works-6.webp",
    link: "https://bunshun.jp/articles/-/50854",
  },
  {
    id: "15",
    title: "MINI 4WD LASER CIRCUIT",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-7.jpg",
    link: "https://www.youtube.com/watch?v=aMRLD3y87m8",
  },
  {
    id: "14",
    title: "トイロパーク",
    category: "記事・掲載",
    image: "https://s2works.net/assets/img/works/works-5.jpg",
    link: "https://mugenlabo-magazine.kddi.com/list/itoyokado-placeholder/",
  },
  {
    id: "13",
    title: "デジタル射的",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-22.webp",
    link: "https://corp.litpla.com/news/press/2021/202106-syateki",
  },
  {
    id: "12",
    title: "mobile playground",
    category: "アトラクション",
    image: "https://s2works.net/assets/img/works/works-23.webp",
    link: "https://corp.litpla.com/news/press/2020/2395",
  },
  {
    id: "11",
    title: "『ハコスコ』がもたらすAR・VR普及の可能性",
    category: "セミナー登壇",
    image: "https://s2works.net/assets/img/works/works-4.jpg",
    link: "https://dengekionline.com/elem/000/001/086/1086821/",
  },
  {
    id: "10",
    title: "3DCG外部発注の流れ",
    category: "セミナー登壇",
    image: "https://s2works.net/assets/img/works/works-3.webp",
    link: "https://www.slideshare.net/spasuzuking/unity-53305042",
  },
  {
    id: "9",
    title: "クロスサマナー",
    category: "記事・掲載",
    image: "https://s2works.net/assets/img/works/works-2.webp",
    link: "https://www.inside-games.jp/article/2014/11/26/82896.html",
  },
  {
    id: "8",
    title: "ソードオブファンタジア",
    category: "アプリ",
    image: "https://s2works.net/assets/img/works/works-1g.jpg",
    link: "https://www.youtube.com/watch?v=rCX4N1Bd2WY",
  },
  {
    id: "7",
    title: "エヴァンゲリオン トシトシト",
    category: "モバゲー",
    image: "https://s2works.net/assets/img/works/works-1f.jpg",
    link: "https://www.youtube.com/watch?v=s_R61wgZPf0",
  },
  {
    id: "6",
    title: "やきゅとも!開発の裏側",
    category: "登壇",
    image: "https://s2works.net/assets/img/works/works-1e.jpg",
    link: "https://www.slideshare.net/spasuzuking/yakyutomo",
  },
  {
    id: "5",
    title: "やきゅとも!",
    category: "Youtube",
    image: "https://s2works.net/assets/img/works/works-1d.jpg",
    link: "https://www.youtube.com/watch?v=KgY5KKEF4g4",
  },
  {
    id: "4",
    title: "やきゅとも!",
    category: "モバゲー",
    image: "https://s2works.net/assets/img/works/works-1c.jpg",
    link: "http://s2works.net/blog/2012/05/yakyutomo-end.html",
  },
  {
    id: "3",
    title: "サムライ戦記",
    category: "モバゲー",
    image: "https://s2works.net/assets/img/works/works-1b.jpg",
    link: "https://s2works.net/blog/2010/02/samurai_senki.html",
  },
  {
    id: "2",
    title: "サムライキングダム",
    category: "ガラケー 勝手サイト",
    image: "https://s2works.net/assets/img/works/works-1a.jpg",
    link: "http://s2works.net/old_blog/2009/07/samurai.html",
  },
  {
    id: "1",
    title: "携帯サイト年鑑2010 一部掲載",
    category: "ガラケー 勝手サイト",
    image: "https://s2works.net/assets/img/works/works-1.jpg",
    link: "https://www.amazon.co.jp/dp/4844361228",
  },
];

export const services: Project[] = [
  {
    id: "s5",
    title: "みんなの統計占いβ (同じ属性の未来解析占い)",
    category: "WEB",
    image: imgMira,
    link: "https://s2works.net/minura/",
  },
  {
    id: "s4",
    title: "Steply (親子で楽しく続ける習慣アプリ)",
    category: "APP",
    image: imgSteply,
    link: "https://s2works.net/steply/index.html",
  },
  {
    id: "s3",
    title: "Bucket List (死ぬまでにやりたい100のこと)",
    category: "APP",
    image: imgBucketList,
    link: "https://s2works.net/bucket_list/index.html",
  },
  {
    id: "s2",
    title: "Bashi-Rura (行き先不明のバシルーラ旅行)",
    category: "WEB",
    image: imgBashirura,
    link: "https://s2works.net/bashi_rura/index.html",
  },
  {
    id: "s1",
    title: "LINE スタンプ (パンダネコ)",
    category: "LINE",
    image:
      "https://stickershop.line-scdn.net/stickershop/v1/product/14341364/LINEStorePC/main.png",
    link: "https://store.line.me/stickershop/product/14341364/ja",
  },
];
