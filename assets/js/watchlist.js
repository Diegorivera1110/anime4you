let watchList = $("#watch-anime-list");

function addToWatchList() {
  console.log("adding to watch list");
  // Create a Watch List Item
  let watchListItem = document.createElement("li");

  let itemInfo = document.createElement("div");
  itemInfo.classList.add("watchlist-item-info");
  itemInfo.classList.add("flex-row");

  // Create an Anime Name element and append to itemInfo
  let animeName = document.createElement("div");
  animeName.classList.add("anime-name");
  animeName.innerHTML = $("#animeTitle").text();
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

$("#add-anime").on("click", addToWatchList);
watchList.on("click",".delete-from-watchlist",function() {
  $(this).parent().parent().remove();
})