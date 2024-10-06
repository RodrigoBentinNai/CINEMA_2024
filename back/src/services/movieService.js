const Movie = require("../models/Movie");

module.exports = {
  getAllMovies: async () => {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw new Error('Failed to retrieve movies');
    }
  },
};

