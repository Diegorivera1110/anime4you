$('.dropdown-trigger').dropdown();

function getGenre(genreId){
    let apiUrl = "https://api.jikan.moe/v3/genre/anime/"+ genreId + "/1";
    
    fetch(apiUrl).then(function(response){
        if(response.ok){
            response.json().then(function(data){
               displayGenreAnime(data.anime)
            })
        }
    })
}

$("#genre-dropdown").on('click', ".genre" ,function(){
    getGenre(this.getAttribute("data-number"));
})

function displayGenreAnime(animeList) {
    let genreList = $("#genre-list");
  // console.log(animeList);
  for(let i = 0; i < 10; i++) {
    // Making an anime information card
    let animeCard = document.createElement("div");
    animeCard.setAttribute("class","card orange lighten-4 modal-trigger");
    animeCard.setAttribute("data-target", "animeInfo");
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
   genreList.append(animeCard);
  }
}

$("#genre-dropdown").on('click', ".genre" ,function(){
    

    getGenre(this.getAttribute("data-number"));
})

$("#genre-list").on("click", ".card", function(){
    searchAnime($(this).find(".card-content").find(".card-title").text())
})