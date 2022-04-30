var animeSearchEl = document.querySelector("#search-anim");


var searchAnime = function() {
    
  var apiUrl = "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1";

  fetch(apiUrl).then(function(response) {
    if(response.ok){
        response.json().then(function(data){
            console.log(data);

            var animeTitle = document.createElement


        })
    }
  })
  };

searchAnime();