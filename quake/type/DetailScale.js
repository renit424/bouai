var map = L.map('map', {
    zoomControl: false
  });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
attribution: '&copy; <a href="https://www.p2pquake.net/">P2P地震情報</a> <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
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
  quake();

  function quake() {
    var Line_W = 2;
    var len = 0;
    var lat = [];
    var lon = [];
    var name = [];
    var sclae;
    var s = [];
    var addr2;
    const url = 'https://api.renitapps.com/response_1633668243655.json';
    //const url = 'https://bousai.renitapps.com/quake/test/20201107Ogasawara.json';
    //const url = 'quake2.json';
    const url2 = 'stations.json';
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (json) {
        fetch(url2).then(function (response) {
          return response.json();
        }).then(function (json2) {
          len2 = Object.keys(json2['items']).length - 1;
          for (var i = 0; i <= len2; i++) {
            lat.push(json2.items[i].lat);
            lon.push(json2.items[i].lon);
            name.push(json2.items[i].name);
          }
          map.setView([json[0].earthquake.hypocenter.latitude, json[0].earthquake.hypocenter.longitude], 9);
          var issue = json[0].issue.type;
          console.log(issue);
          if (issue == "DetailScale") {
            var maxScale = json[0].earthquake.maxScale;
            var maxint = "";
            if (maxScale == "10") { //震度1
              maxint = "1"
              var legend = L.control({
                position: "bottomright"
              });
              legend.onAdd = function (map) {
                var div = L.DomUtil.create("div", "info legend");
                var text = "";
                grades = ["震度1　"],
                  labels = ["https://bousai.renitapps.com/quake/image/shin1.png"];
                for (var i = 0; i < grades.length; i++) {
                  text += grades[i] + ("<img src=" + labels[i] + " height=17 width=17" + ">") + "<br>";
                }
                div.innerHTML = ("<span class=font_size><div class=" + "shin1" + ">" + text + "</div></span>");
                return div;
              };
              legend.addTo(map);
            } else if (maxScale == "20") { //震度2
              maxint = "2"
              var legend = L.control({
                position: "bottomright"
              });
              legend.onAdd = function (map) {
                var div = L.DomUtil.create("div", "info legend");
                var text = "";
                grades = ["震度2　", "震度1　"],
                  labels = ["https://bousai.renitapps.com/quake/image/shin2.png", "https://bousai.renitapps.com/quake/image/shin1.png"];
                for (var i = 0; i < grades.length; i++) {
                  text += grades[i] + ("<img src=" + labels[i] + " height=17 width=17" + ">") + "<br>";
                }
                div.innerHTML = ("<span class=font_size><div class=" + "shin2" + ">" + text + "</div></span>");
                return div;
              };
              legend.addTo(map);
            } else if (maxScale == "30") { //震度3
              maxint = "3"
              var legend = L.control({
                position: "bottomright"
              });
              legend.onAdd = function (map) {
                var div = L.DomUtil.create("div", "info legend");
                var text = "";
                grades = ["震度3　", "震度2　", "震度1　"],
                  labels = ["https://bousai.renitapps.com/quake/image/shin3.png", "https://bousai.renitapps.com/quake/image/shin2.png", "https://bousai.renitapps.com/quake/image/shin1.png"];
                for (var i = 0; i < grades.length; i++) {
                  text += grades[i] + ("<img src=" + labels[i] + " height=17 width=17" + ">") + "<br>";
                }
                div.innerHTML = ("<span class=font_size><div class=" + "shin3" + ">" + text + "</div></span>");
                return div;
              };
              legend.addTo(map);
            } else if (maxScale == "40") { //震度4
              maxint = "4"
              var legend = L.control({
                position: "bottomright"
              });
              legend.onAdd = function (map) {
                var div = L.DomUtil.create("div", "info legend");
                var text = "";
                grades = ["震度4　", "震度3　", "震度2　", "震度1　"],
                  labels = ["https://bousai.renitapps.com/quake/image/shin4.png", "https://bousai.renitapps.com/quake/image/shin3.png", "https://bousai.renitapps.com/quake/image/shin2.png", "https://bousai.renitapps.com/quake/image/shin1.png"];
                for (var i = 0; i < grades.length; i++) {
                  text += grades[i] + ("<img src=" + labels[i] + " height=17 width=17" + ">") + "<br>";
                }
                div.innerHTML = ("<span class=font_size><div class=" + "shin4" + ">" + text + "</div></span>");
                return div;
              };
              legend.addTo(map);
            } else if (maxScale == "45") { //震度5-
              maxint = "5弱"
              var legend = L.control({
                position: "bottomright"
              });
              legend.onAdd = function (map) {
                var div = L.DomUtil.create("div", "info legend");
                var text = "";
                grades = ["震度5弱", "震度4　", "震度3　", "震度2　", "震度1　"],
                  labels = ["https://bousai.renitapps.com/quake/image/shin5-.png", "https://bousai.renitapps.com/quake/image/shin4.png", "https://bousai.renitapps.com/quake/image/shin3.png", "https://bousai.renitapps.com/quake/image/shin2.png", "https://bousai.renitapps.com/quake/image/shin1.png"];
                for (var i = 0; i < grades.length; i++) {
                  text += grades[i] + ("<img src=" + labels[i] + " height=17 width=17" + ">") + "<br>";
                }
                div.innerHTML = ("<span class=font_size><div class=" + "shin50" + ">" + text + "</div></span>");
                return div;
              };
              legend.addTo(map);
            } else if (maxScale == "50") { //震度5+
              maxint = "5強"
              var legend = L.control({
                position: "bottomright"
              });
              legend.onAdd = function (map) {
                var div = L.DomUtil.create("div", "info legend");
                var text = "";
                grades = ["震度5強", "震度5弱", "震度4　", "震度3　", "震度2　", "震度1　"],
                  labels = ["https://bousai.renitapps.com/quake/image/shin5+.png", "https://bousai.renitapps.com/quake/image/shin5-.png", "https://bousai.renitapps.com/quake/image/shin4.png", "https://bousai.renitapps.com/quake/image/shin3.png", "https://bousai.renitapps.com/quake/image/shin2.png", "https://bousai.renitapps.com/quake/image/shin1.png"];
                for (var i = 0; i < grades.length; i++) {
                  text += grades[i] + ("<img src=" + labels[i] + " height=17 width=17" + ">") + "<br>";
                }
                div.innerHTML = ("<span class=font_size><div class=" + "shin55" + ">" + text + "</div></span>");
                return div;
              };
              legend.addTo(map);
            } else if (maxScale == "55") { //震度6-
              maxint = "6弱"
              var legend = L.control({
                position: "bottomright"
              });
              legend.onAdd = function (map) {
                var div = L.DomUtil.create("div", "info legend");
                var text = "";
                grades = ["震度6弱", "震度5強", "震度5弱", "震度4　", "震度3　", "震度2　", "震度1　"],
                  labels = ["https://bousai.renitapps.com/quake/image/shin6-.png", "https://bousai.renitapps.com/quake/image/shin5+.png", "https://bousai.renitapps.com/quake/image/shin5-.png", "https://bousai.renitapps.com/quake/image/shin4.png", "https://bousai.renitapps.com/quake/image/shin3.png", "https://bousai.renitapps.com/quake/image/shin2.png", "https://bousai.renitapps.com/quake/image/shin1.png"];
                for (var i = 0; i < grades.length; i++) {
                  text += grades[i] + ("<img src=" + labels[i] + " height=17 width=17" + ">") + "<br>";
                }
                div.innerHTML = ("<span class=font_size><div class=" + "shin60" + ">" + text + "</div></span>");
                return div;
              };
              legend.addTo(map);
            } else if (maxScale == "60") { //震度6+
              maxint = "6強"
              var legend = L.control({
                position: "bottomright"
              });
              legend.onAdd = function (map) {
                var div = L.DomUtil.create("div", "info legend");
                var text = "";
                grades = ["震度6強", "震度6弱", "震度5強", "震度5弱", "震度4　", "震度3　", "震度2　", "震度1　"],
                  labels = ["https://bousai.renitapps.com/quake/image/shin6+.png", "https://bousai.renitapps.com/quake/image/shin6-.png", "https://bousai.renitapps.com/quake/image/shin5+.png", "https://bousai.renitapps.com/quake/image/shin5-.png", "https://bousai.renitapps.com/quake/image/shin4.png", "https://bousai.renitapps.com/quake/image/shin3.png", "https://bousai.renitapps.com/quake/image/shin2.png", "https://bousai.renitapps.com/quake/image/shin1.png"];
                for (var i = 0; i < grades.length; i++) {
                  text += grades[i] + ("<img src=" + labels[i] + " height=17 width=17" + ">") + "<br>";
                }
                div.innerHTML = ("<span class=font_size><div class=" + "shin65" + ">" + text + "</div></span>");
                return div;
              };
              legend.addTo(map);
            } else if (maxScale == "70") { //震度7
              maxint = "7"
              var legend = L.control({
                position: "bottomright"
              });
              legend.onAdd = function (map) {
                var div = L.DomUtil.create("div", "info legend");
                var text = "";
                grades = ["震度7", "震度6強", "震度6弱", "震度5強", "震度5弱", "震度4　", "震度3　", "震度2　", "震度1　"],
                  labels = ["https://bousai.renitapps.com/quake/image/shin7.png", "https://bousai.renitapps.com/quake/image/shin6+.png", "https://bousai.renitapps.com/quake/image/shin6-.png", "https://bousai.renitapps.com/quake/image/shin5+.png", "https://bousai.renitapps.com/quake/image/shin5-.png", "https://bousai.renitapps.com/quake/image/shin4.png", "https://bousai.renitapps.com/quake/image/shin3.png", "https://bousai.renitapps.com/quake/image/shin2.png", "https://bousai.renitapps.com/quake/image/shin1.png"];
                for (var i = 0; i < grades.length; i++) {
                  text += grades[i] + ("<img src=" + labels[i] + " height=17 width=17" + ">") + "<br>";
                }
                div.innerHTML = ("<span class=font_size><div class=" + "shin7" + ">" + text + "</div></span>");
                return div;
              };
              legend.addTo(map);
            } else {}
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
  var info = document.getElementById("info");
  info.innerHTML = "<span class=font_size>各地の震度情報</span>" + "<br>発生時刻 " + json[0].earthquake.time.split('/').join('月').split(' ').join('日').slice(5) + "<br>最大震度 " + maxint + "<br>震源地 " + json[0].earthquake.hypocenter.name + "<br>深さ " + json[0].earthquake.hypocenter.depth + "km<br>規模(M) " + json[0].earthquake.hypocenter.magnitude + "<br>津波の有無 " + tsunami;
            var myIcon = L.icon({
              iconUrl: 'icon.png',
              iconSize: [30, 30]
            });
            L.marker([json[0].earthquake.hypocenter.latitude, json[0].earthquake.hypocenter.longitude], {
              icon: myIcon
            }).bindPopup("<span class=font_size>震源地：" + json[0].earthquake.hypocenter.name + "</span>").addTo(map);
            len = Object.keys(json[0]['points']).length;
            for (var i = 0; i < len; i++) {
              s.push(json[0].points[i].scale);
            }
            for (var i = 0; i < len; i++) {
              addr2 = json[0].points[i].addr;
              sclae = json[0].points[i].scale;
              var result = name.filter(function (value) {
                return value === addr2;
              })
              var result2 = s.filter(function (value2) {
                return value2 === sclae;
              })
              console.log(result);
              console.log(result2);
              if (result2[i] == 10) { //震度1
                var circle = L.circle([lat[name.findIndex(item => item === addr2)], lon[name.findIndex(item => item === addr2)]], {
                  radius: 2400,
                  color: "#7F7F7F",
                  fill: true,
                  fillOpacity: 1.0,
                  weight: 0
                }).bindPopup("<span class=font_size>" + name[name.findIndex(item => item === addr2) + 1] + "</span>").addTo(map);
              } else if (result2[i] == 20) { //震度2
                var circle = L.circle([lat[name.findIndex(item => item === addr2)], lon[name.findIndex(item => item === addr2)]], {
                  radius: 2400,
                  color: "#273096",
                  fill: true,
                  fillOpacity: 1.0,
                  weight: 0
                }).bindPopup("<span class=font_size>" + name[name.findIndex(item => item === addr2) + 1] + "</span>").addTo(map);
              } else if (result2[i] == 30) { //震度3
                var circle = L.circle([lat[name.findIndex(item => item === addr2)], lon[name.findIndex(item => item === addr2)]], {
                  radius: 2400,
                  color: "#17B978",
                  fill: true,
                  fillOpacity: 1.0,
                  weight: 0
                }).bindPopup("<span class=font_size>" + name[name.findIndex(item => item === addr2) + 1] + "</span>").addTo(map);
              } else if (result2[i] == 40) { //震度4
                var circle = L.circle([lat[name.findIndex(item => item === addr2)], lon[name.findIndex(item => item === addr2)]], {
                  radius: 2400,
                  color: "#F0CC24",
                  fill: true,
                  fillOpacity: 1.0,
                  weight: 0
                }).bindPopup("<span class=font_size>" + name[name.findIndex(item => item === addr2) + 1] + "</span>").addTo(map);
              } else if (result2[i] == 45) { //震度5-
                var circle = L.circle([lat[name.findIndex(item => item === addr2)], lon[name.findIndex(item => item === addr2)]], {
                  radius: 2400,
                  color: "#FE9A05",
                  fill: true,
                  fillOpacity: 1.0,
                  weight: 0
                }).bindPopup("<span class=font_size>" + name[name.findIndex(item => item === addr2) + 1] + "</span>").addTo(map);
              } else if (result2[i] == 50) { //震度5+
                var circle = L.circle([lat[name.findIndex(item => item === addr2)], lon[name.findIndex(item => item === addr2)]], {
                  radius: 2400,
                  color: "#FF4904",
                  fill: true,
                  fillOpacity: 1.0,
                  weight: 0
                }).bindPopup("<span class=font_size>" + name[name.findIndex(item => item === addr2) + 1] + "</span>").addTo(map);
              } else if (result2[i] == 55) { //震度6-
                var circle = L.circle([lat[name.findIndex(item => item === addr2)], lon[name.findIndex(item => item === addr2)]], {
                  radius: 2400,
                  color: "#FF0404",
                  fill: true,
                  fillOpacity: 1.0,
                  weight: 0
                }).bindPopup("<span class=font_size>" + name[name.findIndex(item => item === addr2) + 1] + "</span>").addTo(map);
              } else if (result2[i] == 60) { //震度6+
                var circle = L.circle([lat[name.findIndex(item => item === addr2)], lon[name.findIndex(item => item === addr2)]], {
                  radius: 2400,
                  color: "#FF0254",
                  fill: true,
                  fillOpacity: 1.0,
                  weight: 0
                }).bindPopup("<span class=font_size>" + name[name.findIndex(item => item === addr2) + 1] + "</span>").addTo(map);
              } else if (result2[i] == 70) { //震度7
                var circle = L.circle([lat[name.findIndex(item => item === addr2)], lon[name.findIndex(item => item === addr2)]], {
                  radius: 2400,
                  color: "#C200D2",
                  fill: true,
                  fillOpacity: 1.0,
                  weight: 0
                }).bindPopup("<span class=font_size>" + name[name.findIndex(item => item === addr2) + 1] + "</span>").addTo(map);
              } else {}
            }
        }
    });
});
  }
