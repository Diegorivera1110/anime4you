let watchList = $("#watch-anime-list");
let savedAnime = [];

function addToWatchList(aName) {
  // Create a Watch List Item
  console.log(aName);
  let watchListItem = document.createElement("li");

  let itemInfo = document.createElement("div");
  itemInfo.classList.add("watchlist-item-info");
  itemInfo.classList.add("flex-row");

  // Create an Anime Name element and append to itemInfo
  let animeName = document.createElement("div");
  animeName.classList.add("anime-name");
  animeName.innerHTML = aName;
  itemInfo.appendChild(animeName);

  // Create a delete button and append to itemInfo
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-from-watchlist");
  deleteBtn.classList.add("indigo");
  deleteBtn.textContent = "Delete";
  itemInfo.appendChild(deleteBtn);

  // Append itemInfo to watchListItem
  watchListItem.appendChild(itemInfo);

  // Append Watch List Item to Watch List
  watchList.append(watchListItem);
}

$("#add-anime").on("click", function(){
  const index = savedAnime.indexOf($("#animeTitle").text());
  if(index == -1) {
    addToWatchList($("#animeTitle").text())
    savedAnime.push($("#animeTitle").text());
    localStorage.setItem("anime-watch-list",JSON.stringify(savedAnime));
  }
});

watchList.on("click",".delete-from-watchlist",function() {
  const index = savedAnime.indexOf($(this).parent().find(".anime-name").text());
  savedAnime.splice(index);
  $(this).parent().parent().remove();
  localStorage.setItem("anime-watch-list",JSON.stringify(savedAnime));
})

window.onload = function() {
  // get array from local storage
  savedAnime = JSON.parse(localStorage.getItem("anime-watch-list"));
  //console.log(savedAnime)
  // check if it is undefine and it has items
  if(savedAnime && savedAnime.length > 0) {
    for(let i = 0; i < savedAnime.length; i++) {
      addToWatchList(savedAnime[i]);
    }
  }
  else {
    savedAnime = [];
  }
}