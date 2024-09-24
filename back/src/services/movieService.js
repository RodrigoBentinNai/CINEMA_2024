class Movie {
  constructor(title, poster, director, year, duration, genre, rate) {
    // Validar las propiedades obligatorias y devolver un objeto de error si falta alguna
    if (!title || !poster || !director) {
      return { error: 'Faltan propiedades obligatorias: title, poster y director son requeridos.' };
    }

    this.title = title;
    this.poster = poster;
    this.director = director;
    this.year = year || 'Desconocido'; // Año es opcional
    this.duration = duration || 'Desconocido'; // Duración opcional
    this.genre = genre || []; // Género opcional
    this.rate = rate || null; // Calificación opcional
  }
}


const movieService = {
  getAllMovies: () => {
    const moviesData = [
      {
        title: "Guardians of the Galaxy Vol. 2",
        year: 2017,
        director: "James Gunn",
        duration: "2h 16min",
        genre: ["Action", "Adventure", "Comedy"],
        rate: 7.7,
        poster:
          "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      },
      {
        title: "Star Wars: Episode IV - A New Hope",
        year: 1977,
        director: "George Lucas",
        duration: "2h 1min",
        genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        rate: 8.7,
        poster:
          "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
      },
      {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        director: "Peter Jackson",
        duration: "2h 58min",
        genre: ["Action", "Adventure", "Drama", "Fantasy"],
        rate: 8.8,
        poster:
          "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
      },
    ];

    // Crear instancias de Movie y filtrar los errores
    return moviesData.map(data => {
      const movie = new Movie(data.title, data.poster, data.director, data.year, data.duration, data.genre, data.rate);
      // Solo devuelve la película si no hay error
      return movie.error ? null : movie;
    }).filter(Boolean); // Eliminar cualquier null del arreglo
  },
};

module.exports = movieService;
