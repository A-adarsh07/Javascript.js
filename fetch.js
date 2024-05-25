async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
  }
  

//   whenever we use "new" keyword , it'll create new empty object or instance