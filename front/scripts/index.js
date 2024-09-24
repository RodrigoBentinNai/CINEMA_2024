const axios = require("axios");
const container = document.getElementById("movies-container");
const formatCards = require("./formatCards");

// ! AJAX ↓↓↓
// $.get("https://students-api.up.railway.app/movies")
//   .done( (informacion) => {
//     const moviesCards = informacion.map(formatCards);
//     moviesCards.forEach((movieHtml) => container.appendChild(movieHtml));
//   })
//   .fail( () => {
//     alert("La informacion del servidor NO pudo cargarse, se utilizara FAKE info");
//     const moviesCards = tempData.map(formatCards);
//     moviesCards.forEach((movieHtml) => container.appendChild(movieHtml));
//   });

// ! AXIOS ↓↓↓
// axios.get("https://students-api.up.railway.app/movies")
axios.get("http://localhost:3000/movies")
  .then( (informacion) => {
    const moviesCards = informacion.data.map(formatCards);
    moviesCards.forEach((movieHtml) => container.appendChild(movieHtml));
  })
  .catch( () => {
    alert("La informacion del servidor NO pudo cargarse, se utilizara FAKE info");
    const moviesCards = tempData.map(formatCards);
    moviesCards.forEach((movieHtml) => container.appendChild(movieHtml));
  });

// ! ASYNC/AWAIT ↓↓↓
// const getAllMovies = async () => {
//   try {
//     const response = await axios.get("https://students-api.up.railway.app/movies");
//   return response.data;
//   } catch (error) {
//     alert("La informacion del servidor NO pudo cargarse, se utilizara FAKE info");
//     const moviesCards = tempData.map(formatCards);
//     moviesCards.forEach((movieHtml) => container.appendChild(movieHtml));
//   }
// };

// getAllMovies();