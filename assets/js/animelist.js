// Get Current Anime information using Jikan API call
function getCurrentAnime() {
  let apiUrl = "https://api.jikan.moe/v3/season/2022/spring";

  fetch(apiUrl).then(function (response) {
    if(response.ok) {
      response.json().then(function (data) {
        // console.log(data);
        // Display current anime to the dom
        displayCurrentAnime(data.anime);
      })
    }
    else {
      console.err("Couldnt get current running anime.");
    }
  })
}

// Function to display the first 10 current animes
function displayCurrentAnime(animeList) {
  let currentAirList = $("#current-airing-list");
  // console.log(animeList);
  for(let i = 0; i < 10; i++) {
    // Making an anime information card
    let animeCard = document.createElement("div");
    animeCard.setAttribute("class","card orange lighten-4");
    let cardInfo = document.createElement("div");
    cardInfo.setAttribute("class","card-content");
    cardInfo.style.padding = "5px";
    let cardImg = document.createElement("img");
    cardImg.setAttribute("src",animeList[i].image_url);
    let cardTitle = document.createElement("span");
    cardTitle.setAttribute("class","card-title");
    cardTitle.textContent = animeList[i].title;
    cardInfo.appendChild(cardImg);
    cardInfo.appendChild(cardTitle);
    animeCard.appendChild(cardInfo);

    // add to current airing list
    currentAirList.append(animeCard);
  }
}

// Get Top Anime information using Jikan API call
function getTopAnime() {
  let apiUrl = "https://api.jikan.moe/v3/top/anime";

  fetch(apiUrl).then(function (response) {
    if(response.ok) {
      response.json().then(function (data) {
        // console.log(data);
        // Display top anime to the dom
        displayTopAnime(data.top);
      })
    }
    else {
      console.err("Couldnt get Top anime.");
    }
  })
}

// Function to display the first 10 top animes
function displayTopAnime(animeList) {
  let topList = $("#top-anime-list");
  // console.log(animeList);
  for(let i = 0; i < 10; i++) {
    // Making an anime information card
    let animeCard = document.createElement("div");
    animeCard.setAttribute("class","card orange lighten-4");
    let cardInfo = document.createElement("div");
    cardInfo.setAttribute("class","card-content");
    cardInfo.style.padding = "5px";
    let cardImg = document.createElement("img");
    cardImg.setAttribute("src",animeList[i].image_url);
    let cardTitle = document.createElement("span");
    cardTitle.setAttribute("class","card-title");
    cardTitle.textContent = animeList[i].title;
    cardInfo.appendChild(cardImg);
    cardInfo.appendChild(cardTitle);
    animeCard.appendChild(cardInfo);

    // add to top anime list
    topList.append(animeCard);
  }
}

getCurrentAnime();
getTopAnime();