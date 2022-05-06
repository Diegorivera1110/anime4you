$('.dropdown-trigger').dropdown();

function getGenre(genreId){
    let apiUrl = "https://api.jikan.moe/v3/genre/anime/"+ genreId + "/1";
    
    fetch(apiUrl).then(function(response){
        if(response.ok){
            response.json().then(function(data){
               displayAnimeList(data.anime,$("#genre-list"),10);
            })
        }
    })
}



$("#genre-dropdown").on('click', ".genre" ,function(){
    getGenre(this.getAttribute("data-number"));
})

$("#genre-list").on("click", ".card", function(){
    searchAnime($(this).find(".card-content").find(".card-title").text())
})