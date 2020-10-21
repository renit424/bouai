var map = L.map('map', {
  zoomControl: false
});
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 15
}).addTo(map);
L.control.scale({
  maxWidth: 200,
  position: 'bottomleft',
  imperial: false
}).addTo(map);
L.control.zoom({
  position: 'topright'
}).addTo(map);
const url = 'https://api.p2pquake.net/v2/jma/quake?limit=1&quake_type=Foreign';
fetch(url).then(function (response) {
return response.json();
}).then(function (json) {
map.setView([json[0].earthquake.hypocenter.latitude, json[0].earthquake.hypocenter.longitude], 9);
var issue = json[0].issue.type;
if (issue == "Foreign") {
  var tsunami = "";
  var domesticTsunami = json[0].earthquake.domesticTsunami;
  if (domesticTsunami == "None") {
    tsunami = "なし";
  } else if (domesticTsunami == "Unknown") {
    tsunami = "不明";
  } else if (domesticTsunami == "Checking") {
    tsunami = "調査中";
  } else if (domesticTsunami == "NonEffective") {
    tsunami = "若干の海面変動";
  } else if (domesticTsunami == "Watch") {
    tsunami = "津波注意報";
  } else if (domesticTsunami == "Warning") {
    tsunami = "津波予報(種類不明)";
  }
  if (domesticTsunami == "None") {
    tsunami = "なし";
  } else if (domesticTsunami == "Unknown") {
    tsunami = "不明";
  } else if (domesticTsunami == "Checking") {
    tsunami = "調査中";
  } else if (domesticTsunami == "NonEffective") {
    tsunami = "若干の海面変動";
  } else if (domesticTsunami == "Watch") {
    tsunami = "津波注意報";
  } else if (domesticTsunami == "Warning") {
    tsunami = "津波予報(種類不明)";
  } else {}
  var foreign = "";
  var foreignTsunami = json[0].earthquake.foreignTsunami;
  if (foreignTsunami == "None") {
    foreign = "なし";
  } else if (foreignTsunami == "Unknown") {
    foreign = "不明";
  } else if (foreignTsunami == "Checking") {
    foreign = "調査中";
  } else if (foreignTsunami == "NonEffectiveNearby") {
    foreign = "震源近傍で小さな津波の可能性";
  } else if (foreignTsunami == "WarningNearby") {
    foreign = "震源近傍で津波の可能性";
  } else if (foreignTsunami == "WarningPacific") {
    foreign = "太平洋で津波の可能性";
  } else if (foreignTsunami == "WarningPacificWide") {
    foreign = "太平洋広域で津波の可能性";
  } else if (foreignTsunami == "WarningIndian") {
    foreign = "インド洋で津波の可能性";
  } else if (foreignTsunami == "WarningIndianWide") {
    foreign = "インド洋広域で津波の可能性";
  } else if (foreignTsunami == "Potential") {
    foreign = "津波の可能性";
  } else {}
  var info = document.getElementById("info");
  info.innerHTML = "<span class=font_size>遠方地震情報</span><br>発生時刻 " + json[0].earthquake.time.split('/').join('月').split(' ').join('日').slice(5) + "<br>震源地 " + json[0].earthquake.hypocenter.name + "<br>深さ " + json[0].earthquake.hypocenter.depth + "km<br>規模(M) " + json[0].earthquake.hypocenter.magnitude + "<br>国内津波 " + tsunami + "<br>海外津波 " + foreign;
  var myIcon = L.icon({
    iconUrl: 'icon.png',
    iconSize: [30, 30]
  });
  L.marker([json[0].earthquake.hypocenter.latitude, json[0].earthquake.hypocenter.longitude], {
    icon: myIcon
  }).bindPopup("<span class=font_size>震源地：" + json[0].earthquake.hypocenter.name + "</span>").addTo(map);
}
});
});
}
