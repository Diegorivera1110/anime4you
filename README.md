# Anime4You

Anime web application created by Peter Tran, Diego Rivera, and Gonzalo Hernandez. The application allows for looking up anime information and creating your own watchlist.

---

## Table of Contents

- [APIs](#apis)
  - [Jikan API](#jikan)
  - [Anime Recommender API](#anime-recommender)
- [Materialize CSS Framework](#materialize)
- [Features](#features)
  - [Current and Top Anime Lists](#current-top)
  - [Anime Search](#anime-search)
  - [Genre Search](#genre-search)
  - [Anime Info](#anime-info)
  - [Watchlist](#watchlist)
- [Screenshot](#screenshot)
- [Page Link](#page-link)

---

<a name="apis"></a>

## API

Jikan and Anime Recommender are the two APIs used in this project.

---

<a name="jikan"></a>

### Jikan API

Jikan API was used to get lists of anime and anime information.

---

<a name="anime-recommender"></a>

### Anime Recommender API

Anime Recommender was used to get a list of anime that was related to the provided anime given by the user.

---

<a name="materialize"></a>

## Materialize CSS Framework

Materialize CSS allows us to stylize the page using grid, color classes, modules and dropdowns.

---

<a name="features"></a>

## Features

Anime4You provided displaying of the current and top airing animes, searching for specific anime, searching by genre, displaying anime info, and adding/deleting to watchlist.

---

<a name="current-top"></a>

### Current and Top Anime Lists

Current anime list displays anime showing in the current season and top list displays most popular anime. Information of current season anime and top anime is retrieved from Jikan API.

---

<a name="anime-search"></a>

### Anime Search

When pressing the search anime button, a module will pop up with information of the inputted anime gotten from Jikan API and Anime Recommender.

---

<a name="genre-search"></a>

### Genre Search

Genre search is presetted with 10 genres that are shown in a dropdown. After a genre is selected and the search genre button has been pressed, a module will pop up with a list that displays anime under the selected genre. Information of anime under certain genre is gotten from Jikan API.

---

<a name="anime-info"></a>

### Anime Info

When clicking an anime from any of the list (current, top, and genre) or searching by input, a module will pop up with anime info. Display anime information is split into anime image, synopsis, manga verification, and recommended anime list. Jikan helps us get anime image, synopsis, and manga verification. Anime Recommender helps us get the list of recommended anime.

---

<a name="watchlist"></a>

### Watchlist

Users are allowed to make their own watchlist. They can either add or remove anime from the watchlist. The watchlist will persist even after reloading the page because the watchlist is stored in a local storage.

---

<a name="screenshot"></a>

## Screenshot

<img src ="./assets/images/Anime4You.gif" width="400">

---

<a name="page-link"></a>

## Page Link

Link: https://diegorivera1110.github.io/anime4you/
