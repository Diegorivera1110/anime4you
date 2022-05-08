// Get Current Anime information using Jikan API call
function getCurrentAnime() {
  let apiUrl = "https://api.jikan.moe/v3/season/2022/spring";

  fetch(apiUrl).then(function (response) {
    if(response.ok) {
      response.json().then(function (data) {
        // Display current anime to the dom
        displayAnimeList(data.anime,$("#current-airing-list"),10);
      })
    }
    else {
      console.err("Couldnt get current running anime.");
    }
  })
}

// Get Top Anime information using Jikan API call
function getTopAnime() {
  let apiUrl = "https://api.jikan.moe/v3/top/anime";

  fetch(apiUrl).then(function (response) {
    if(response.ok) {
      response.json().then(function (data) {
        // Display top anime to the dom
        displayAnimeList(data.top,$("#top-anime-list"),10);
      })
    }
    else {
      console.err("Couldnt get Top anime.");
    }
  })
}

// Function to display anime of a certain list
// data is list of anime
// animeList is specific anime list
// num is the number of anime to display
function displayAnimeList(data,animeList,num) {
  for(let i = 0; i < num; i++) {
    // Making an anime information card
    let animeCard = document.createElement("div");
    animeCard.setAttribute("class","card orange lighten-4 modal-trigger");
    animeCard.setAttribute("data-target", "animeInfo");
    let cardInfo = document.createElement("div");
    cardInfo.setAttribute("class","card-content");
    cardInfo.style.padding = "5px";
    let cardImg = document.createElement("img");
    cardImg.setAttribute("src",data[i].image_url);
    let cardTitle = document.createElement("span");
    cardTitle.setAttribute("class","card-title");
    cardTitle.textContent = data[i].title;
    cardInfo.appendChild(cardImg);
    cardInfo.appendChild(cardTitle);
    animeCard.appendChild(cardInfo);

    // add to anime list
    animeList.append(animeCard);
  }
}


// Event Listener for anime within current airing list to show anime info
$("#current-airing-list").on("click", ".card", function(){
  searchAnime($(this).find(".card-content").find(".card-title").text())
})

// Event Listener for anime within top anime list to show anime info
$("#top-anime-list").on("click", ".card", function(){
  searchAnime($(this).find(".card-content").find(".card-title").text())
})

getCurrentAnime();
getTopAnime();