let currentAirList = $("#current-airing-list");
let topList = $("#top-anime-list");


function getCurrentAnime() {
  let apiUrl = "https://api.jikan.moe/v3/season/2022/spring";

  fetch(apiUrl).then(function (response) {
    if(response.ok) {
      response.json().then(function (data) {
        console.log(data);
      })
    }
    else {
      console.log("error");
    }
  })
}

getCurrentAnime();