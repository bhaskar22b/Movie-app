const API_KEY = "a5d61af50a3cc9cfb593737020b6a2c4";
const BASE_URL = "https://api.themoviedb.org/3";



export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

//specify the base url then we send request to /movie/popular that gives us popular movies 
//we need to give api key to conform that we send request
// we get result like title , img etc 



export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};


//we did same thing to search movies
// we add query to pass the value that we not needed