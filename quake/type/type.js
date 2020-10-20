function init() {
    const url = 'https://api.renitapps.com/quake.php';
    //const url = 'https://bousai.renitapps.com/quake/test/20180906Hokkaido.json';
    //const url = 'quake2.json';
    const url2 = 'stations.json';
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (json) {
        fetch(url2).then(function (response) {
          return response.json();
        }).then(function (json2) {
          var issue = json[0].issue.type; 
          if (issue == "ScalePrompt"){
          }
          else if (issue == "Destination"){
          
          }
          else if (issue == "ScaleAndDestination"){
          
          }
          else if (issue == "DetailScale"){
          
          }
          else if (issue == "Foreign"){
            appendScript("/quake/type/Foreign.js");
          }
          else if (issue == "Other"){
          
          }
          else{}
       });
     });
  }
function appendScript(URL) {
	var el = document.createElement('script');
	el.src = URL;
	document.body.appendChild(el);
};
