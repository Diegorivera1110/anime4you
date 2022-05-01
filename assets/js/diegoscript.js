var animeSearchEl = document.querySelector("#search-anime");
var animeTitleInput = document.querySelector("#anime-search-input")
var mangaCheck = false;


var searchAnime = function(anime) {
  console.log(anime);

  // API call 
  var apiUrl =  "https://api.jikan.moe/v3/search/anime?q=" + anime + "&page=1"
// API fetch
  fetch(apiUrl).then(function(response) {
    if(response.ok){
        response.json().then(function(data){
            console.log(data);

            $("#noAnime").addClass("display-off");

            $("#animeTitle").text(data.results[0].title);
            $("#synopsis").text(data.results[0].synopsis);
            $("#animeImg").attr("src", data.results[0].image_url);

            gotManga(data.results[0].title);
            
           
          })
        } else {
          $("#animeTitle").text("");
          $("#synopsis").text("");
          $("#animeImg").attr("src", "");

          $("#manga").text("");

          $("#noAnime").removeClass("display-off");

        }
      })
    };
    
    // filters throgh anime's info to see if there is a manga as  well
    function gotManga(name) {
      
      var apiUrl =  "https://api.jikan.moe/v3/search/manga?q=" + name + "&page=1"
      
      fetch(apiUrl).then(function(response) {
        if(response.ok){
          response.json().then(function(data){
            
            if (data.results.length > 0) {
              $("#manga").text("Has a manga")
            } else {
              $("#manga").text("Does not have Manga");
            }


        })
    }
  })
  };

// uses materializecss modal form to display User requested anime info
  $(document).ready(function(){
    $('.modal').modal();
  });


  animeSearchEl.addEventListener("click", function() {
      console.log("click");

      searchAnime(animeTitleInput.value);
  })

