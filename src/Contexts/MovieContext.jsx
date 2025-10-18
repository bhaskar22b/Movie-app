import { createContext, useState, useContext, useEffect } from "react"

const MovieContext = createContext()   // store all data

export const useMovieContext = () => useContext(MovieContext)  // acess hooks through useMovieContext

//allow to use any hooks in any components that we write in Movieprovider
//Children = app (main.jsx)
// children have acess to movieProvider
export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        //store all movies in list then list convet into json string 
        // becouse localstroage store only string
        // json.parse = convet string into real js obj
        //(steFavorits) then set as fav
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])


    // only run when favorites state change then localStroage change or update
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])


    //prev hold old value, ...spread operator, it copies everything from prev and then add in movie 
    const addToFavorite = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorite = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    // .some() checks if at least one movie has the same id.
    // If found → returns true
    // If not found → returns false
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    //now child can acces thes value
    const value = {
        favorites,
        addToFavorite,
        removeFromFavorite,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
