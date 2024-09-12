
function formatCards(movie) {

  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src=${movie.poster} class="card-image" alt="Poster de ${movie.title}"> 
    <h3 class="card-title">${movie.title}</h3>
    <p class="class-text">${movie.year}</p>
    <p class="class-text">${movie.director}</p>
    <p class="class-text">${movie.duration}</p>
    <p class="class-text">${movie.genre}</p>
    <p class="class-text">${movie.rate}</p>
    `;
  return card;
}

module.exports = formatCards;