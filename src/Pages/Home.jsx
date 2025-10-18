//we display multi movies

import React, { useEffect, useState } from 'react'
import "../Css/Home.css"
import "../Css/SliderContext.css"
import MovieCard from '../Component/MovieCard'
import { searchMovies, getPopularMovies } from "../Services/Api";
import { useSliderContext } from '../Contexts/SliderContext';
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

const Home = () => {

  //update the component or re-renter
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  //  loadPopularMovies Fetches popular movies and updates
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();   // API call
        setMovies(popularMovies);        // update movies list
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");         //show error when api not load or show
      } finally {
        setLoading(false);   // stop loading no matter what
      }
    };

    loadPopularMovies();
  }, []);

  // const handleSearch = (e) => {
  //   e.preventDefault()  // to stop reload component or page
  //   alert(searchQuery)
  //   setSearchQuery('')  // when state change mean when we click alert ok then it's show - new value
  // };


  //Triggered when the user submits the search form.
  const handleSearch = async (e) => {
    e.preventDefault();                  // to stop reload component or page
    if (!searchQuery.trim()) return      // ignore empty input
    if (loading) return                  // avoid multiple clicks while loading

    setLoading(true)
    try {
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    } catch (err) {
      console.log(err)
      setError("Failed to search movies...")
    } finally {
      setLoading(false)
    }
  };

  const { handleScrollToTop, handleScrollToBottom } = useSliderContext();


  return (
    <>
      <section className="home-page">

        <div className="home">
          <div className="scroll-buttons">
            <button className="scroll-btn" onClick={handleScrollToTop}>
              <FaArrowCircleUp />
            </button> </div>

          <form className='search-form' onSubmit={handleSearch} >
            <input
              type="text"
              placeholder='Search for movies...'
              className='home-search-input'
              value={searchQuery} // to connect usestate
              onChange={(e) => setSearchQuery(e.target.value)} // update the change in input box // e= error function
            />
            <button type='submit' className='home-search-btn'>Search</button>
          </form>

          {error && <div className="error-message">{error}</div>}

          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div className="movies-grid">
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          )}<div className="movies-grid">
            {movies.map(
              (movie) =>
                // when we search with start letter then it's show start letter cards like search R then show R letter cards
                // movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />)}
          </div>

          <div  className="scroll-buttons-2">
            <button className="scroll-btn" onClick={handleScrollToBottom}>
            <FaArrowCircleDown />
          </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home