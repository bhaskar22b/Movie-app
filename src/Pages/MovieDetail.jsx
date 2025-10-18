import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Css/MovieDetail.css"

const MovieDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie; // get movie data from state

  if (!movie) {
    return (
      <div className="movie-detail">
        <p>Movie not found. Go back to Home.</p>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <button
        type="button"
        className="back-btn"
        onClick={() => navigate(-1)} // Go back one step instead of reloading
      >
        ← Back
      </button>



      <div className="movie-detail-content">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="detail-img"
        />

        <div className="movie-detail-text">
          <h2>{movie.title}</h2>
          <p className="movie-small-detail"><strong>Release Date:</strong> {movie.release_date}</p>
          <p className="movie-small-detail"><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
