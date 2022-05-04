var animeSearchEl = document.querySelector("#search-anime");
var animeTitleInput = document.querySelector("#anime-search-input")
var mangaCheck = false;


function searchAnime(anime) {


  // API call 
  var apiUrl =  "https://api.jikan.moe/v3/search/anime?q=" + anime + "&page=1"
// API fetch
  fetch(apiUrl).then(function(response) {
    $("#load-info").removeClass("display-off");
    $("#anime-modal-info").addClass("display-off");
    if(response.ok){
      response.json().then(function(data){
        // console.log(data);

        $("#noAnime").addClass("display-off");

        $("#animeTitle").text(data.results[0].title);
        $("#synopsis").text(data.results[0].synopsis);
        $("#animeImg").attr("src", data.results[0].image_url);
        $("#add-anime").removeClass("display-off");
        
        $("#load-info").addClass("display-off");
        $("#anime-modal-info").removeClass("display-off");


        $("#manga").text("");
        $("#recommend-section").addClass("display-off");
        $("#no-recommended").addClass("display-off");
        
        $("#load-manga").removeClass("display-off");

        $("#load-recommend").removeClass("display-off");
        $("#manga").addClass("display-off");
        $("#no-recommended").addClass("display-off");
        $("#recommend-section").addClass("display-off");

        gotManga(data.results[0].title);
        animeRecommender(anime);
        })
    } else {
      $("#animeTitle").text("");
      $("#synopsis").text("");
      $("#animeImg").attr("src", "");
      $("#add-anime").addClass("display-off");

      $("#manga").text("");
      $("#noAnime").removeClass("display-off");
      $("#recommend-section").addClass("display-off");
      $("#no-recommended").addClass("display-off");

      $("#load-info").addClass("display-off");
      $("#anime-modal-info").removeClass("display-off");

      }
      })
    };
    
// filters throgh anime's info to see if there is a manga as  well
function gotManga(name) {    
  var apiUrl =  "https://api.jikan.moe/v3/search/manga?q=" + name + "&page=1";
      
  fetch(apiUrl).then(function(response) {
    if(response.ok){
      response.json().then(function(data){

      if (data.results.length > 0) {
        $("#manga").text("Has a manga")
      } else {
        $("#manga").text("Does not have Manga");
      }

      $("#load-manga").addClass("display-off");
      $("#manga").removeClass("display-off");

      })
    }
  })
};

function displayRecommended(animeList) {
  // console.log(animeList);
  let reclist = $("#recommendation-list");
  reclist.text("")
  for (let i = 0; i < 3; i++) {

    let animeCard = document.createElement("div");
    animeCard.setAttribute("class","card orange lighten-4");
    let cardInfo = document.createElement("div");
    cardInfo.setAttribute("class","card-content");
    cardInfo.style.padding = "5px";
    let cardImg = document.createElement("img");
    cardImg.setAttribute("src",animeList.data[i].coverImage.large);
    let cardTitle = document.createElement("span");
    cardTitle.setAttribute("class","card-title");
    cardTitle.textContent = animeList.data[i].title.english;
    cardInfo.appendChild(cardImg);
    cardInfo.appendChild(cardTitle);
    animeCard.appendChild(cardInfo);

    // add to top anime list
    reclist.append(animeCard);
  }

}


function animeRecommender(title) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'anime-recommender.p.rapidapi.com',
      'X-RapidAPI-Key': '8f3a80d81dmsh343478cdfc5c7dfp1d7768jsncfbd4adb9453'
    }
  }
  
  var apiCall = 'https://anime-recommender.p.rapidapi.com/?anime_title=' + title + '&number_of_anime=3';
 
  fetch(apiCall, options).then(function(response) {
    if(response.ok) {
      response.json().then(function(data) {
        // console.log(data);

        if (data.data == "Anime Not Found") {
           
          $("#load-recommend").addClass("display-off");
          $("#no-recommended").removeClass("display-off")
        } else {
             
          displayRecommended(data);
          $("#load-recommend").addClass("display-off");
          $("#recommend-section").removeClass("display-off")
        }

        }) 
      }
    })
    
};


$("#recommendation-list").on("click", ".card", function(){
  searchAnime($(this).find(".card-content").find(".card-title").text())
})

// uses materializecss modal form to display User requested anime info
$(document).ready(function(){
  $('.modal').modal();
});

animeSearchEl.addEventListener("click", function() {
  searchAnime(animeTitleInput.value);
})