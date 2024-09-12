const container = document.getElementById("movies-container");
const formatCards = require("./formatCards");

$.get("https://students-api.up.railway.app/movies")
  .done( (informacion) => {
    const moviesCards = informacion.map(formatCards);
    moviesCards.forEach((movieHtml) => container.appendChild(movieHtml));
  })
  .fail( () => {
    alert("La informacion del servidor NO pudo cargarse, se utilizara FAKE info");
    const moviesCards = tempData.map(formatCards);
    moviesCards.forEach((movieHtml) => container.appendChild(movieHtml));
  });