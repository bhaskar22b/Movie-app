import React from 'react'
import "../Css/MovieCard.css"
import { useMovieContext } from "../Contexts/MovieContext"
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext()  // we wnat these acess
  const favorite = isFavorite(movie.id)  //if we fav or not if T then colour red
   const navigate = useNavigate();

  function onFavClick(e) {
    e.preventDefault()
    e.stopPropagation(); // prevent navigation when clicking heart
    if (favorite) removeFromFavorite(movie.id)
    else addToFavorite(movie)
  }

  //add to navgate yo pagr
  function handleCardClick() {
    // navigate to detail page, passing movie data
    navigate(`/movie/${movie.id}`, { state: { movie } });
  }


  return (
    <>
      <div className="movie-card" onClick={handleCardClick}>
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-overlay">
            <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavClick}>
              ♥
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </>
  )
}

export default MovieCard
