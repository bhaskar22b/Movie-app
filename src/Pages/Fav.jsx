import "../css/Fav.css";
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../Component/MovieCard";

function Fav() {
  const { favorites } = useMovieContext();

  //If the user has favorites (favorites.length > 0) then run this
  if (favorites.length > 0) {   // check array length
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  //If the user has favorites (favorites.length < 0) then run this
  return (
    <section className="fav-page">
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
    </section>
  );
}

export default Fav;
