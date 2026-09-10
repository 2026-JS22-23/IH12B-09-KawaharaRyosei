const pos = {lat: 34.987202, lng: 137.085115};
const prefectureCapitals = [
  { name: "札幌市", pref: "北海道", center: { lat: 43.062096, lng: 141.354376 }, desc: "海鮮丼がうまい"},
  { name: "青森市", pref: "青森県", center: { lat: 40.824623, lng: 140.740593 }, desc: "りんご" },
  { name: "盛岡市", pref: "岩手県", center: { lat: 39.703619, lng: 141.152684 }, desc: "♡"},
  { name: "仙台市", pref: "宮城県", center: { lat: 38.268839, lng: 140.872103 }, desc: "?" },
  { name: "秋田市", pref: "秋田県", center: { lat: 39.718614, lng: 140.102364 }, desc: "?" },
  { name: "山形市", pref: "山形県", center: { lat: 38.240436, lng: 140.363633 }, desc: "?" },
  { name: "福島市", pref: "福島県", center: { lat: 37.750299, lng: 140.467521 }, desc: "?" },
  { name: "水戸市", pref: "茨城県", center: { lat: 36.341813, lng: 140.446793 }, desc: "知らない" },
  { name: "宇都宮市", pref: "栃木県", center: { lat: 36.565725, lng: 139.883565 }, desc: "?" },
  { name: "前橋市", pref: "群馬県", center: { lat: 36.391208, lng: 139.060406 }, desc: "?" },
  { name: "さいたま市", pref: "埼玉県", center: { lat: 35.857428, lng: 139.648933 }, desc: "鉄道博物館があるらしい おじいちゃんいる" },
  { name: "千葉市", pref: "千葉県", center: { lat: 35.607068, lng: 140.106327 }, desc: "ネズミ"},
  { name: "東京", pref: "東京都", center: { lat: 35.689521, lng: 139.691704 }, desc: "田舎"},
  { name: "横浜市", pref: "神奈川県", center: { lat: 35.447753, lng: 139.642514 }, desc: "セキュキャンの時いった" },
  { name: "新潟市", pref: "新潟県", center: { lat: 37.902418, lng: 139.023221 }, desc: "こめ" },
  { name: "富山市", pref: "富山県", center: { lat: 36.695290, lng: 137.211338 }, desc: "?" },
  { name: "金沢市", pref: "石川県", center: { lat: 36.594682, lng: 136.625573 }, desc: "?" },
  { name: "福井市", pref: "福井県", center: { lat: 36.065219, lng: 136.221642 }, desc: "きょうりゅう" },
  { name: "甲府市", pref: "山梨県", center: { lat: 35.664158, lng: 138.568449 }, desc: "?" },
  { name: "長野市", pref: "長野県", center: { lat: 36.651289, lng: 138.181224 }, desc: "?" },
  { name: "岐阜市", pref: "岐阜県", center: { lat: 35.423065, lng: 136.760419 }, desc: "Cisco大好き先生在住" },
  { name: "静岡市", pref: "静岡県", center: { lat: 34.976978, lng: 138.383054 }, desc: "お茶" },
  { name: "安城市 三河安城駅", pref: "愛知県", center: { lat: 34.970326, lng: 137.061541 }, desc: "俺がいる 最高の駅 新幹線も止まるのに、さらに普通列車も止まってくれる", image: "./images/mikawaAnjo.jpg" },
  { name: "安城市 新安城駅", pref: "愛知県", center: { lat: 34.987202, lng: 137.085115 }, desc: "俺がいる 特急が止まる 西尾の奴らは新安城駅には逆らえない", image: "./images/shinAnjo.jpg" },
  { name: "安城市 安城駅", pref: "愛知県", center: { lat: 34.959973, lng: 137.087195 }, desc: "なぜか全部の電車が止まる。三河安城駅の方に止まるべき。俺は許してない。", image: "./images/Anjo.jpg" },
  { name: "津市", pref: "三重県", center: { lat: 34.730283, lng: 136.508591 }, desc: "鳥羽水族館" },
  { name: "大津市", pref: "滋賀県", center: { lat: 35.004531, lng: 135.868590 }, desc: "琵琶湖" },
  { name: "京都市", pref: "京都府", center: { lat: 35.021041, lng: 135.755608 }, desc: "本宿より近い" },
  { name: "大阪市", pref: "大阪府", center: { lat: 34.686316, lng: 135.519711 }, desc: "怖い" },
  { name: "神戸市", pref: "兵庫県", center: { lat: 34.691279, lng: 135.183025 }, desc: "妹が帰ってきた" },
  { name: "奈良市", pref: "奈良県", center: { lat: 34.685333, lng: 135.832744 }, desc: "鹿" },
  { name: "和歌山市", pref: "和歌山県", center: { lat: 34.226034, lng: 135.167506 }, desc: "みかん" },
  { name: "鳥取市", pref: "鳥取県", center: { lat: 35.503891, lng: 134.237736 }, desc: "砂丘" },
  { name: "松江市", pref: "島根県", center: { lat: 35.472297, lng: 133.050499 }, desc: "?" },
  { name: "岡山市", pref: "岡山県", center: { lat: 34.661772, lng: 133.934675 }, desc: "最近関西弁だと知った" },
  { name: "広島市", pref: "広島県", center: { lat: 34.396560, lng: 132.459622 }, desc: "?" },
  { name: "山口市", pref: "山口県", center: { lat: 34.185956, lng: 131.470649 }, desc: "?" },
  { name: "徳島市", pref: "徳島県", center: { lat: 34.065770, lng: 134.559303 }, desc: "?" },
  { name: "高松市", pref: "香川県", center: { lat: 34.340149, lng: 134.043444 }, desc: "うどん ゲーム禁止" },
  { name: "松山市", pref: "愛媛県", center: { lat: 33.841624, lng: 132.765681 }, desc: "みかんらしい" },
  { name: "高知市", pref: "高知県", center: { lat: 33.559705, lng: 133.531080 }, desc: "四国の覇者" },
  { name: "福岡市", pref: "福岡県", center: { lat: 33.606785, lng: 130.418297 }, desc: "?" },
  { name: "佐賀市", pref: "佐賀県", center: { lat: 33.249367, lng: 130.298822 }, desc: "?" },
  { name: "長崎市", pref: "長崎県", center: { lat: 32.744839, lng: 129.873756 }, desc: "おじいちゃんの地元" },
  { name: "熊本市", pref: "熊本県", center: { lat: 32.789828, lng: 130.741667 }, desc: "くまモン" },
  { name: "大分市", pref: "大分県", center: { lat: 33.238194, lng: 131.612674 }, desc: "?" },
  { name: "宮崎市", pref: "宮崎県", center: { lat: 31.911090, lng: 131.423855 }, desc: "旅行で近くに行った" },
  { name: "鹿児島市", pref: "鹿児島県", center: { lat: 31.560148, lng: 130.557981 }, desc: "砂風呂 桜島" },
  { name: "那覇市", pref: "沖縄県", center: { lat: 26.212401, lng: 127.680932 }, desc: "シーサー" },
];

let map;
let infowindow;

async function initMap() {
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 9.4,
    mapId: 'roadmap',
  });

  map.addListener('click', (event) => {
    addMarker("", event.latLng, "");
    console.log('座標', event.latLng.lat(), event.latLng.lng());
  })

  prefectureCapitals.map((pref) => {
    addMarker(pref.name, pref.center, pref.desc, pref.image === undefined ? "" : pref.image)
  });
}

window.initMap = initMap;
window.addEventListener("load", () => {
  initMap();
});

async function addMarker(name, center, desc, img) {
  const { PinElement, AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const pin = new PinElement({ scale: 1 });
  const marker = new AdvancedMarkerElement({
    position: center,
    map: map,
    title: "Marker",
    gmpDraggable: false,
    content: pin.element,
  });

  console.log(marker);
  console.log(marker.position);
  console.log(marker.position.lat);
  console.log(marker.position.lng);

  marker.addListener("click", () => {
    console.log(marker.position.lat, marker.position.lng);
    infowindow.setContent(`
    <div style="max-width: 300px;">
      <h2>${name}</h2>
      <img style="width: 100%" src="${img}">
      <p>${desc}</p>
    </div>
    `);
    infowindow.open({ anchor: marker, map: map });
  });
}

